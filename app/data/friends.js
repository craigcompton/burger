// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/2bd/2425aa2.jpg",
//     "scores":[
//         5,
//         2,
//         4,
//         4,
//         5,
//         2,
//         2,
//         5,
//         4,
//         2
//       ]
//   }
var express = require("express");
var path = require("path");

var friends = [
    {
        "name": "Darth Vader",
        "photo": "../images/Darth_Vader.jpg",
        "scores": [
            5,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Jason Voorhees",
        "photo": "../images/Jason_Voorhees.jpg",
        "scores": [
            2,
            5,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Indiana Jones",
        "photo": "../images/Indiana_Jones.jpg",
        "scores": [
            2,
            2,
            5,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Ellen Ripley",
        "photo": "../images/Ellen_Ripley.jpg",
        "scores": [
            2,
            2,
            2,
            5,
            2,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Katniss Everdeen",
        "photo": "../images/Katniss_Everdeen.jpg",
        "scores": [
            2,
            2,
            2,
            2,
            5,
            2,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Goldilocks",
        "photo": "../images/Goldilocks.jpg",
        "scores": [
            2,
            2,
            2,
            2,
            2,
            5,
            2,
            2,
            2,
            2
        ]
    },
    {
        "name": "Princess Leia",
        "photo": "../images/Princess_Leia.jpg",
        "scores": [
            2,
            2,
            2,
            2,
            2,
            2,
            5,
            2,
            2,
            2
        ]
    },
    {
        "name": "Superman",
        "photo": "../images/Superman.jpg",
        "scores": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            5,
            2,
            2
        ]
    },
    {
        "name": "Sarah Connor",
        "photo": "../images/Sarah_Connor.jpg",
        "scores": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            5,
            2
        ]
    },
    {
        "name": "Snow White",
        "photo": "../images/Snow_White.jpg",
        "scores": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            5
        ]
    }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;