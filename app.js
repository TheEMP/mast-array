//Write a function called cubed(x) that accepts an argument x and returns its cubed value
function cubed(x) {
    for (var i = 1; i < 3; i++) {
        x *= 2 
    }
   
    return x 
}

//write a function called power that accepts two args (base, exp) and returns the power  
function getPower(b, x) {
   for (var i = 1; i < x; i++) {
        b *= 2    
    }
    return b 
}
/*
* write a function called logArr that will log each item in an array
*/
function logArr(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i])
    }
}
/**
    Fill in the necessary parts of the findById function below
*/
var users = [{id: 1, name: 'Jon'},{id: 2, name: 'Yuli'},{id: 21, name: 'Peter'},{id: 17, name: 'St. MaryLou de la playa carmen'},{id: 51, name: 'Doug'},{id: 881, name: 'Paul'},{id: 0, name: 'Jon'},{id: 999, name: 'Timma'}]

function findById(id){
    for (var i = 0; i < users.length; i++){
        var obj = users[i]
        if (obj.id === id){
            return obj
        }
    }
    return {error:"Sorry that user id could not be found"}
}
console.log(findById(17)) //Should return {id: 17, name: 'St. MaryLou de la playa carmen'}
findById(1000) //Should return 4 {error: 'Sorry that user id could not be found'} ****Upshift Challenge

//Write a function that accepts a name argument and will loop over theBand and return the band member's name and the instrument that he/she plays
//use string concat to return the sentence below 
// [band-members-name] is in the band and plays the [band-members-instrument];

var theBand = {
    members: [{
        name: 'Johnny P',
        instrument: 'Sax'
    },{
        name: 'River',
        instrument: 'Drums'
    },{
        name: 'Kris',
        instrument: 'Guitar'
    }]
}

function findInstr(name){
    for (var i = 0; i < theBand.members.length; i++) {
        var obj = theBand.members[i];
        if (obj.name === name) {
            return name + " is in the band and plays the " + obj.instrument
        }
    }
    return ""
}
//write a fn that accepts two arguments a (sentence, letter) have the function return the number of times that letter repeats in the sentence
function findSCount(sentence, letter) {
   var a = sentence.split(letter)
   return a.length - 1;
}

/**
    Best Practice: Constructor functions are the only variables that start with an uppercase letter
    The keyword this refers to a single instance
    When calling or invoking a constructor function you must use the *** new *** keyword
*/

//Write a CellPhone constructor function that accepts the following arguments (string: brand, number: screenSize, string: carrier)
function CellPhone(brand, sc, c) {
    this.brand = brand
    this.screensize = sc
    this.carrier = c
}
//Write a function called sumAll that accepts an array of numbers and returns the sum of all items in the array
function sumAll(a) {
    var c = 0
    for (var i = 0; i < a.length; i++) {
        var v = a[i];
        c += v
    }
    return c
}
//write an isEqual function that accepts two arguments and returns a boolean (3,'3') returns false ('abc', 'abc') returns true
function isEqual(a,b){
    return a === b
}
//write a function called inStock that accepts a productId or productName and returns the product if it is in stock based on its quantity

var products =[{
    id: 123,
    name: 'Squaty Potty', 
    url: 'https://www.youtube.com/watch?v=YbYWhdLO43Q',
    quantity: 5,
    price: 19.99
},{
    id: 124,
    name: 'Design Your Own Cage', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/e93da6b3583ea782f5b3814305c16960.jpeg',
    quantity: 0,
    price: 1.99
},{
    id: 125,
    name: 'Worlds Best Chap Stick', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/dde306374cd35acff10f52eb4c586b5d.jpeg',
    quantity: 280,
    price: 0.99
}]

function inStock(id) {
    for (var i = 0; i < products.length; i++) {
        var p = products[i];
        if (p.id === id) {
            return p.quantity > 0
        }
    }
}
