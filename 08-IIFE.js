// my fav (commonly use to init databse and more importantly & controlling data pollution of a global scope )

(function dataBaseConnection(){
    console.log("DB connected")
})(); //use ";" to end IIEF function

( () => {
    console.log("Another DB Connected")
} )();

//passing arg
( (nam) => {
    console.log(`Another name data ${nam}`)
} )('Oracle')


// ?? and ?

const temp = 50
temp > 30 ? console.log("Hot") : console.log("cold")

// Nullish Coalescing Operator (??) : null undefined
// mostly comes returned value but in our case we are assigning value
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 10
val = null ?? 10 ?? 20 // assigns the value that comes after null

console.log(val)
