//Promises
const promis = new Promise(function(resolve, reject){
    //DO asunc task
    //DB calls, Encryption and more
    setTimeout(function(){
        console.log("Asic task is completed")
        resolve()
    }, 1000)
})

//consuming Promise
promis.then(function(){      //.then has direct relation with resolve
    console.log("promise consumed")
})

//Another way
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Task 2 resolved")
})

//Anoterh way with some error 
const promis4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true
        if(!err){
            resolve({username: "namo", password: "1234"})
        }else{
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promis4.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(() => console.log("Promsie is either resolved or rejected"))