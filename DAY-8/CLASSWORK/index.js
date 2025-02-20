document.getElementById("parent").style.border="1px solid gray";
document.getElementById("parent").style.height="200px";
document.getElementById("parent").style.backgroundColor="blue";

let element = document.createElement("button")
element.innerText="Submit";
element.style.backgroundColor="red";
element.style.padding="10px";

document.getElementById("parent").append(element);

//variables

// let variable = 10 
console.log(variable)
var variable = 10 
// variable = 15
// console.log(variable)

function myfunction(){
    console.log(variable)
}
myfunction()