var config = require('config.json');
var _ = require('lodash');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser:true });
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getByEmail = getByEmail;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service

function authenticate(username, password) {
    var deferred = Q.defer();

    db.users.findOne({username: username}, function(err, user) {
        if(err) deferred.reject(err.name + ':' + err.message);
        if(user && bcrypt.compareSync(password,user.hash)) { 
            deffered.resolve({
                _email: user._email, 
                username: user.username
            });
        }
        else{
            deferred.resolve();
        }
    });
    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();
 
    db.users.find().toArray(function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        // return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });
 
        deferred.resolve(users);
    });
 
    return deferred.promise;
}

function getByEmail(_email) {
    var deferred = Q.defer();
 
    db.users.findByEmail(_email, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();
 
    // validation
    db.users.findOne(
        { username: userParam.username },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });
 
    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');
 
        // add hashed password to user object
        // user.hash = bcrypt.hashSync(userParam.password, 10);
 
        db.users.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}

function update(_email, userParam) {
    var deferred = Q.defer();
 
    // validation
    db.users.findByEmail(_email, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
 
                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });
 
    function updateUser() {
        // fields to update
        var set = {
            fName: userParam.fName,
            username: userParam.username,

        };
 
        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }
 
        db.users.update(
            { _email: mongo.helper.toObjectID(_email) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}

function _delete(_email) {
    var deferred = Q.defer();
 
    db.users.remove(
        { _email: mongo.helper.toObjectID(_email) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });
 
    return deferred.promise;
}
