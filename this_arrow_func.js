const obg = {
    namee : "naya manxe",
    cost : 299,
    fun : function(){
        console.log(this.namee)
    }
}
obg.fun()
obg.namee = "hero"
obg.fun()

//arrow function

const fun = () => {
    console.log("superman")
}

fun();

//basic syntax of arrow function
() => {}
//assigning in ariable
const addTwo = (a,b) => {
    return a+b
}
//or
const addtwo = (a,b) => a+b //one line arrow function