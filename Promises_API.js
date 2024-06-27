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

