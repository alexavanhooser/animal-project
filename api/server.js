const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');

const config = require('./config');
const mongoose = require('mongoose');


const Animal = require('./models/animals');

// const cors = require('cors');
// app.use(cors({
//   origin: '*'
// }))



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// Setting port
const port = process.env.PORT || 4000;

// CONNECT TO DATABASE
mongoose.Promise = global.Promise;
mongoose.connect(config.database, (err) => {
  useMongoClient: true;
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('Connected to database: ' + 'animal');
  }
});


// ROUTES
var router = express.Router();

// Animal Routes 
router.route('/animal')

  .post(function(req, res) {

    var animal = new Animal(); 
    animal.name = req.body.name;
    animal.status = req.body.status;
   

    animal.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Animal created!'});
      });

  })

  .get(function(req, res) {
    Animal.find(function(err, animal) {
        if (err)
            res.send(err);
      // console.log(animal)
        res.json(animal);
    });
});

// function get(request, reply) {
//   var findObject = {};
//   for (var key in request.query) {
//       findObject[key] = request.query[key]
//   }
//   collection.find(findObject).toArray(function(error, students) {
//       reply(students);
//   })
// }




// Registering the route
app.use('/api', router);


// Starting the server 
app.listen(port);
console.log('contected on port ' + port);






// router.route('/animal')

//   .get(function(req, res) {
//     animal.find(function(err, animal) {
//         if (err)
//             res.send(err);

//         res.json(animal);
//     });
//   });
    

