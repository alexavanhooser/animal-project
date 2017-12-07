// router.route('/animals')
// ...

// // on routes that end in /bears/:bear_id
// // ----------------------------------------------------
// router.route('/animals/:animal_id')

// // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
// .get(function(req, res) {
//     Animal.findById(req.params.animal_id, function(err, animal) {
//         if (err)
//             res.send(err);
//         res.json(animal);
//     });
// });

// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', router);