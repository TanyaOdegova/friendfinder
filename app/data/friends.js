/* Homework requirement:application's data inside of app/data/friends.js as an array of objects. 
Each of these objects should roughly follow the format below.*/
// DATA
// Below data will hold all of the reserved tables.

var friends = [
    {
        name: "Ross",
        photo: "../app/public/assets/images/ross.jpg",
        scores: [5,1,2,3,1,2,5,1,1,1]
    },
    {
        name: "Monica",
        photo: "../app/public/asssets/images/monica.jpg",
        scores: [2,5,4,5,1,2,4,3,2,3]
    },
    {
        name: "Chandler",
        photo: "../app/public/asssets/images/chandler.jpg",
        scores: [1,3,4,4,5,3,2,1,2,2]
    },
    {
        name: "Joey",
        photo: "../app/public/asssets/images/joe.jpg",
        scores: [1,2,1,1,1,1,1,1,1,1]
    },
    {
        name: "Rachel",
        photo: "../app/public/asssets/images/rachel.jpg",
        scores: [5,5,5,5,5,5,5,5,5,5]
    },
    {
        name: "Phoebe",
        photo: "../app/public/asssets/images/phoebe.jpg",
        scores: [5,5,5,5,1,5,1,1,5,5]
    }
];
// Module.Exports will export the array. 
//This makes it accessible to other files using require.
module.exports = friends;