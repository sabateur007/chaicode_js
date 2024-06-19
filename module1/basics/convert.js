// let score = "33abc"
// let inn = Number(score)
// console.log(inn)
// console.log(typeof(inn))
// console.log(typeof(typeof(inn)))
// console.log(typeof(null))

//when a conversion is done successfully, type of and value both change , eg let s ="3" let in = Number(s)
//then value of in= 3, type - Number. but when conversion is unsuccessfull like s= "33abc" then type - Number
//but value is NaN meaning not a number. 
let isloggedin = -1
let statuss = Boolean(isloggedin)
console.log(statuss)
console.log(typeof(statuss))
//any non zero number(positive negative decimeal or not decimal deosnt matter) = true, type boolean
//0 = false, type boolean
//"" = false
//" " =  true
//"anything" = ture