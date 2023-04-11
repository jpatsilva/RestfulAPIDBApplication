// The use strict mode changes previously accepted "bad syntax" into real errors.
'use strict'

// declarations and requires for extensions needed
const http               = require('http');
const express            = require('express');
const socketio           = require('socket.io');
const mongoose           = require('mongoose');
const bodyParser         = require('body-parser');
const port               = 3000;

// variable to hold the express server
var app = express();

// Using thje body parser to parse some JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/grass_mower', {useNewUrlParser: true}).catch(error => console.log("Something went wrong: " + error));

var mowerModel = require("./dataModel/mower");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());

// Form to add a new lawn mower
app.get("/form", function(req, res){
    res.render("pages/form");
});

// Form to delete a new lawn mower
app.get("/delete", function(req, res){
    res.render("pages/delete");
});

// Form to update the manufacturer of an existing lawn mower
app.get("/update", function(req, res){
    res.render("pages/update");
});

// Form to find a lawn mower made by a manufacturer
app.get("/findMower", function(req,res) {
    res.render("pages/findMower");
});

// Form to find a lawn mower by _ID
app.get("/findbyID", function(req,res){
    res.render("pages/findbyID");
});

// Displays all lawn mowers in the database
app.get("/shop", function(req,res) {
    mowerModel.listAllMowers().then(function(mowers){
        res.render("pages/shop", {mowers:mowers});
    }).catch(function(error){ 
        res.errored("Ooops...Something went wrong!" + error );
    });
    
});

// Displays a lawn mower(s) in the database
app.get("/mower", function(req,res) {
    console.log("Mower: " + JSON.stringify(req.body.mower))
    mowerModel.listManufacturedMowers().then(function(mowers){
        res.render("pages/mower", {mowers:mowers});
    }).catch(function(error){ 
        res.errored("Ooops...Something went wrong!" + error );
    });
    
});

// gets a lawn mower from the database
app.get("/maker", function(req,res) {
    mowerModel.listMowerManufacturer().then(function(mowers){
        res.render("pages/mower", {mowers:mowers});
    }).catch(function(error){
        res.errored("Something went wrong when attemptiong to retrieve mower..." + error);
    });
});

// retrieves an item from the database by _id
app.get('/mower_id', function(req, res) {
    console.log("Mower: " + JSON.stringify(req.body.mower));

    mowerModel.listMowerByID().then(function(mowers){
        res.render("pages/mower", {mowers:_id});
    }).catch(function(error){
        res.err("No mower was retrieved");
    });
});

// Posts or sends the data to the database and saves the data into the database
app.post('/mower', function(req, res){
    console.log("Mower: " + JSON.stringify(req.body.mower));
    var newMower = new mowerModel(req.body.mower);
    
    newMower.save().then(function(){
        res.send("Added a new lawn mower to the database!");
    }).catch(function(err){
        res.err("Ooops...Something went wrong. No mower was added to the database!");
    });
});

// Updates or modifies the selected data in the database
app.put('/update', function(req, res) {
    console.log("Mower: " + JSON.stringify(req.body.mower));

    var newMower = new mowerModel(req.body.mower);

    newMower.updateOne(mongoose.model.maker).then(function(){
        res.send("Updated lawn mower!");
    }).catch(function(err){
        res.err("Ooops...Something went wrong. No mower was deleted in the database!");
    });;

    res.send('Lawn mower updated');
});

// Deletes lawn mowers of manufacturer in the database.
app.delete('/delete', function(req, res){
    console.log("Mower Maker: ", JSON.stringify(req.body.mower));

    var newMower = new mowerModel(req.body.mower);
    
    newMower.deleteOne(mongoose.model.maker).then(function(){
        res.send("Deleted a lawn mower from the database!");
    }).catch(function(err){
        res.err("Ooops...Something went wrong. No mower was deleted from the database!");
    });
});

// Sets the listening port 
app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});