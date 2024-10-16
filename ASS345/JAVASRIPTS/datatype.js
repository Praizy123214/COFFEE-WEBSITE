
document.addEventListener("DOMContentLoaded", () => {
// Primitive datatypes

var str = "Hello" // string
var num = 0// number
var nu = null //null
var und = undefined //undefined
var undef //also defined
var bol = true //boolen
var sym = Symbol ("held29ujs9d") // symbol
var bgin = BigInt ('235483647872389') //bigint

console.log(typeof(str))
console.log(typeof (num))
console.log(typeof (nu))
console.log(typeof (und))
console.log(typeof (undef))
console.log(typeof (bol))
console.log(typeof (sym))
console.log(typeof (bgin))




// Non-primitive datatypes
var arr = ['Hello', 0, true, undefined] //array
var obj = {
    name:'Emma James',
    age: 0,
    street: {
        area: 'forgot'
    }

}


var func = function Helloworld() {
    return "We are " +  15 + "!"
}
console.log(typeof (func()))
console.log(func()) 


console.log(arr[3])
console.log(obj.name ) 
console.log(obj?.street?.area)


console.log(typeof(arr))
console.log(typeof(obj))



})
