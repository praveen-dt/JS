
//alert('k xa') // doesnot work in nodejs,only works in browser
let age = 22  //int
let isLoggedin = false //bollean
let state = null  //stand alone
let states;  //undefined

//console.log(typeof(age))



const array = ['abc','bcd']
let obj = {
    name : "don",
    age : 25
}

const ggwala = function(){
    console.log("hero")
}



//###################
//Stack and Heap

//stack (promitive), heap (non primitive)

let firstname = "hero"
let name1 = firstname

console.log(firstname)
console.log(name1)

name1 = "done"
console.log(firstname)
console.log(name1)


//++++++++++++++++++++

let user1 = {
    email : "hero@hotmail.com",
    age : 35
}

let user2 =  user1

console.log(user1)
console.log(user2)

user2.email = "mango@kyu.io"
console.log(user1)
console.log(user2)
