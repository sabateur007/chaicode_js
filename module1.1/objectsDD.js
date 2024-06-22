const appuser = new Object() // object created using constructor. this creates a singleton onject

//nested object, 
appuser.name ={
                fullname:{
                        firstname: "aniket",
                        lastname: "singh"
                }
}
//console.log(appuser.name.fullname.lastname)
////////////////////////////////////////////////////////////////////////////////
//object merging
let objone = new Object()
let objtwo = new Object()
objone.name="a"
objone.class="c"
objtwo.roll="d"
//console.log(`objtwo: ${objtwo}`)
objtwo.sub= `f`

const finalobj = Object.assign({},objone,objtwo)  //one way to do it
// console.log(finalobj)
// console.log(objone)
// console.log(objtwo)

const lasts = {...objone,...objtwo}      //another way. this one is trendy
//console.log(lasts)
///////////////////////////////////////////////////////////////////////////////
//iteraring over keys and values in a object
const zomatouser = {
        name :"ashu",
        city :"lucknow",
        favcuisine : "mughalai",
        phone : 9616686179
}
///////////////////////////////////////////////////////////////////////////////
//array of objects
let keysOfZomatoUsers = Object.values(zomatouser)
//console.log(keysOfZomatoUsers)

const arrayofusers = [{
        name :"ashu",
        city :"lucknow",
        favcuisine : "mughalai",
        phone : 9616686179
},{
        name :"mummy",
        city :"lucknow",
        favcuisine : "chinese",
        phone : 9454330729
},{
        name :"papa",
        city :"bahraich",
        favcuisine : "south indian",
        phone : 9616686179
}]

//console.log(arrayofusers[2].favcuisine)
//////////////////////////////////////////////////////////////////////////////////////////////////
//destructing object
const course = {
        coursename : "javascriptoneshot",
        courseprice : 999,
        courseinstructor : "hitesh"
}
const {courseinstructor : teacher} = course
console.log(teacher)