//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function showFoods(person){
    for(let i = 0; i < Object.keys(person).length; i++){
        console.log(Object.keys(person)[i])
        console.log(Object.values(person)[i])
    }
}

// playing around with different ideas 👇🏼
// function showFoods2(person){
//     for(let i = 0; i < Object.keys(person).length; i++){
//         if(Array.isArray(Object.values(person)[i])){
//             console.log(Object.values(person)[i])
//         }
//     }
// }

// function showFoods3(person){
//     for(let i = 0; i < Object.keys(person).length; i++){
//         console.log(Object.keys(person)[i])
//         if(Array.isArray(Object.values(person)[i])){
//             console.log(Object.values(person)[i])
//         }
//         console.log(Object.values(person)[i])
//     }
// }

showFoods(person3)
console.log('---------------')
// showFoods2(person3)
// console.log('---------------')
// showFoods3(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo(name){
        return `Name: ${this.name} \nAge: ${this.age}`
    }addAge(age){
        const new_age = this.age + 1
        return `Happy Birthday ${this.name}! You are now ${new_age}!`
    }
}

let kit = new Person('Kit', 32)
let sara = new Person('Sara', 27)
console.log(kit.printInfo())
console.log(kit.addAge())
console.log(sara.printInfo())
console.log(sara.addAge())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = string => {
    return new Promise( (big, small) => {
        if(string.length > 10){
            big(true)
        }else{
            small(false)
        }
    })
}
isBigWord('hellllloooo')
    .then( (big) => {
        console.log(`Big Word`)
    } )
    .catch( (small) => {
        console.log(`Small Number`)
    } )

isBigWord('hello')
    .then( (big) => {
        console.log(`Big Word`)
    } )
    .catch( (small) => {
        console.log(`Small Number`)
    } )

