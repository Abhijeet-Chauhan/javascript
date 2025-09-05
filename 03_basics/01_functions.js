function sayMyName () {
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
}

// sayMyName()
// sayMyName

// function addTwoNumbers (num1, num2) {
//     console.log(num1 + num2);
     
// }

// const result = addTwoNumbers(4, 5)
// console.log(result); <-- undefined

function addTwoNumbers (num1, num2) {
    return num1 + num2;
    console.log(Abhi);
}

const result = addTwoNumbers(4, 5)
console.log(result);


function calculateCartPrice (...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400));

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));