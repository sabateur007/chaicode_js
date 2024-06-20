//singleton
//const obj = object.create

//object literals
const obj = {
    name:"aniket",
    age:25,
    location:"lucknow",
    email:"aniketisngh0107@gmail.com",
    isloggedin: false,
    lastlogindays: ["mon","tues","fri"]
}

// console.log(obj.lastlogindays)  //accessing onject properties
// console.log(obj["lastlogindays"])

//taking a symbol input and get it inside object
let sym = Symbol("key0")
//console.log(sym)
const obj1 = {
    sym: "key1"
}
// console.log(obj1.sym)
// console.log(typeof(obj1.sym))  // here we can see that sym is not stored as symbol inside the object, but it is stored as a string
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//correct way to do it
// Declare a symbol
const mySymbol = Symbol("uniqueKey");

// Create an object
const myObject = {
  [mySymbol]: "This value is associated with the unique symbol"
};

// Access the value using the symbol as a key
const value = myObject[mySymbol];

// Print the value and typeof
//console.log(myObject)
//console.log("Value:", value);
//console.log("typeof:", typeof value);  // This will print "string"
//console.log("typeof mySymbol:", typeof mySymbol);  // This will print "symbol"
///////////////////////////////////////////////////////////////////////////////////////////////
//changing vlaues.
obj.email = "elli@nsooc.loi"
//console.log(obj.email)
//Object.freeze(obj)
obj.email = "zzziiiee"
//console.log(obj.email)
///////////////////////////////////////////////////////////////////////////////////////////

//adding functions in objects
const Fobj = {}
Fobj.att = function(){
  console.log("yo wassup mah nigger")
}
console.log(Fobj)
console.log(Fobj.att)   //referernce to the fnction returned
console.log(Fobj.att()) //function executed

obj.greeting = function(){
  console.log(`hi there ${this.name}`)
}
console.log(obj.greeting())