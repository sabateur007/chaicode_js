const username = {
    name :"aniket",
    age :"25",
    welcomeMessage : function(){
        console.log(`hi, ${this.name}`)
        //console.log(this)
    }
}
//username.welcomeMessage()
username.name = "ashu"
//username.welcomeMessage()
//console.log(this) //check the same in browsers, it will give windows object

function tids(){
    let vari = "hello"
    const obj = {
        msg: "hello"
    }
    console.log(this.msg)
    console.log(vari)
    //console.log(this)
}
tids()
/////////////////////////////////////
const add = (num1,num2)=>{
    console.log(num1+num2)
}

add(3,4)
const add1 = (num1,num2)=>(num1*num2)
console.log(add1(8.6,84))
const returnobject = (num1,num2)=>({name:"anie"})
console.log(returnobject())