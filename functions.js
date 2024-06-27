//defining function

function sayHello(){
    console.log("hello")
}

//sayHello //this is reference
//sayHello() //this is execution 

//if you want to save function value in variables , function need to return it
// for example
function naya(val1, val2){
    return (val1+val2)
}
const naya1 = naya(5,3)
//console.log(naya1)

function calculateTotalPrice(...num){
    return num
}
// console.log(calculateTotalPrice(5,6,10))

//function with objects
const user = {
    username:"namo",
    price: 99
}

function handleObj(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObj(user)
// handleObj({
//     username: "newuser",
//     price : 299
// })

//nested function
 function one(){
    const username = " namo"

    function two(){
        const website = "abc"
        console.log(username)
    }
    //console.log(website)
    two()
 }
one()


// another ways to declear functions
const newfunct = function(number){
    return number+1
}
console.log(newfunct(5))