arr = []

//easy so not imp for me atleast

//object

const myObj = {
    nam : "namo",
    "new name" : "nammoooo",
    age : 22,
    location : "teai para",
    isLoggedIn : false,
    loggedInDays : ["sunday", "Monday", "Tusedaay"]
}
//accessing
// console.log(myObj.nam) // bad practise 
// console.log(myObj["nam"]) //right way
// console.log(myObj["new name"])

//changing data after freee
myObj.nam = "hero"
//console.log(myObj.nam)
//Object.freeze(myObj)  // doesnot let you chnage the obj data when freezed

//changing data after freee
myObj.nam = "heroV2"
//console.log(myObj.nam)


//function 
myObj.hello = function(){
    console.log("hello senior")
}

// console.log(myObj.hello())
// console.log(myObj)

myObj.hello1 = function(){
    console.log(`hilo hilo, ${this["new name"]}`)
}

// console.log(myObj.hello1())
// console.log(myObj)







//Singleton and Nonsingleton Object

//const obj = new Object() //singleton obj deceleration
const obj = {} //non singleton obj deceleration
//console.log(obj)

obj.name = 'new name'
obj.id = '47478598'
obj.isLoggedin = 'false'

//console.log(obj)
console.log(Object.keys(obj)) //this is erry important in backend development
console.log(Object.values(obj)) 


const newobj = {
    email : "hero@gmail.com",
    fullname : {
        frstname : "newname ",
        lstname : "newlast"
    },
    address : "newadd"
}

// console.log(newobj)
// console.log(newobj.fullname)

//combining objects, nested objects
// same as array
//example
const obj1 = {1:"a",2:"b"}
const obj2 = {4:"a",5:"b"}
const obj3 =  Object.assign(obj1,obj2) 
//note Object.assign({},obj1,obj2) this is good practise because it ensures the return value is Object
//syntx Object.assign(target, sources)
//console.log(obj3)

const obj4 = {...obj1, ...obj2} // we will use this mostly
//console.log(obj4)