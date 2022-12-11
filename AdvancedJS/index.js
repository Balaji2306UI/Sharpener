//call, apply & bind
let student1 = {
    name: "Bala",
    age: 25
}
let student2 = {
    name: "Arjun",
    age: 26
}
let student3 = {
    name: "Ajai",
    age: 23
}

function displayStudentInfo(percentage, rank) {
    console.log(`Student Name: ${this.name}; Age: ${this.name}
Percentage: ${percentage}; Rank: ${rank}
`);
}

let student1_Academics = [70, 3];
let student2_Academics = [88, 1];
let student3_Academics = [74, 2]

//call invokes a functino with the given object reference and function parameters as comma separated values
displayStudentInfo.call(student1, ...student1_Academics);

//apply invokes a function with the given object reference and function parameters as an array
displayStudentInfo.apply(student2, student2_Academics);

//bind binds the given object reference and function parameters(comma separated) with the function and returns a new function, so that we can call it later.
displayStudentInfo.bind(student3, ...student3_Academics)();

//This is also valid
displayStudentInfo.bind(student3, student3_Academics[0])(2); //currying

//Another way of currying using closures
function displayInfo_curried(percentage) {
    return function(rank) {
        return function(remarks) {
            console.log(`Percentage: ${percentage}; Rank: ${rank}; Remarks: ${remarks}`)
        }
    }
}

displayInfo_curried(80)(1)('Excellent');