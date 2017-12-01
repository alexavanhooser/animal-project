// Set up express and include our User model
var express = require('express');
var Animal = require('../models/animal');

// Get an instance of the express router
var router = express.Router();

// Our first set of routes, those that end with /users
router.route('/animal')


.post(function(req,res){
    var animal = new Animal();
  
    animal.name = req.body.name;  
    
    // Save the user to the database
    // If we don't get any errors respond with a success message
    animal.save(function(err){
        if (err) { res.send(err); }
        res.json({ message: 'We have created a new animal!' });
    });
})


.get(function(req,res){

    User.find(function(err, animal){
        if (err){ res.send(err); }

        res.json(animal);
    });

})



// Routes for a specific user, ending in /users/:user_id
router.route('/animal/:animal_id')


.get(function (req,res){

    Animal.findById(req.params.animal_id, function(err, animal){
        if (err){ res.send(err); }

        res.json(animal);
    });
})


.put(function(req,res){
    Animal.findById(req.params.animal, function(err, animal){
        if (err){ res.send(err); }

        animal.name = req.body.name;
        animal.status = req.body.status;

        user.save(function(err){
            if (err) { res.send(err); }

            res.json({ message: 'Animal Updated!' });
        });
    });
})

/*
// When we make a DELETE request we want to 
// remove the user with the specified id, if 
// there are no errors we'll again respond 
// with a success message
*/
.delete(function(req, res){
    User.remove({_id:req.params.animal_id}, function(err, user){
        if (err){ res.send(err); }

        res.json({ message: 'Successfully removed!' });
    });
})


module.exports = router;