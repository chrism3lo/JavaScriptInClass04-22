//1) Create 3 arrays, One with all String data types, one with all Numbers data types, and one with Boolean data types.  
//You will need to add sample data to each array (don't over think this). Each array should have at least 5 elements.. 

//2) Next create a function that can take any of these arrays as a parameter and add an additional String, Number,
// or Boolean depending on which array was passed in. 

//Hint: You will need an array method to add new items to the end of the array. You will also need conditionals 
//set up to check the item at index 0 so you know what array was passed into the function.  You can use the typeof 
//method to determine what type of data is in the array.   .push()


let person = ["Chris", "Alex", "Donovan", "Josue", "Dominic"];
let age = [22, 22, 24, 24, 19];
let over21 = [true, true, true, true, false];

// Sample
let addPerson = "Wally";
let addAge = 20;
let addOver21 = false;
// sample



function addParameter(x){
    let param = x[0];
return 

if (param.typeof() === addPerson.typeof()){
    person.push(addPerson);
    console.log(person);

} else if (param.typeof() === addAge.typeof()){
    age.push(addAge);
    console.log(age);
} else {
    over21.push(addOver21);
    console.log(over21);
}
;


}
console.log(addParameter(person));