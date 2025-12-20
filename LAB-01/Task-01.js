//task-01
//variables

var firstname="venkat";
console.log(firstname);

let age=23;
console.log(age);

const pi=3.14;
console.log(pi);

//task-02
function venkat(){
    console.log("this is a function");
}
venkat();

//arrow functions
const vicky=() => {
    console.log("this is an arrow function");
};
vicky();

function add(a,b){
    return a+b;
}
let result=add(5,10);
console.log("addition:",result);

const subtraction =(a,b) => a-b;
let result1=subtraction(10,5);
console.log("subtraction:",result1);

//task-03
//alert("This is an alert box!");

//let userinput=prompt("enter ur name:");
//console.log("user input:",userinput);

console.log("Hello World!");

//task-04
function changepara(){
document.getElementById("demo").innerHTML='paragraph changed byy js!..';
}

 function changetext(){
    document.getElementById("msg").innerHTML='text changed byy js!..';
 }

 function addcontent(){
    document.getElementById("contentbox").innerHTML +="<p>new content added</p>";
 }

 function removecontent(){
    document.getElementById("contentbox").innerHTML="";
 }

//task-05
 function toggleStyle() {
    const body = document.getElementById('body');
            // Toggle both classes
    body.classList.toggle('style1');
    body.classList.toggle('style2');

}

//task-06
function sayHello() {
    alert("Button was clicked!");
}
function mouseOver() {
    document.getElementById("hoverText").style.color = "red";
    document.getElementById("hoverText").style.fontSize = "22px";
}

function mouseOut() {
    document.getElementById("hoverText").style.color = "black";
    document.getElementById("hoverText").style.fontSize = "16px";
}
function submitForm(event) {
    event.preventDefault(); // stops page refresh
    console.log("Form submitted successfully!");
}

//task-07
//-01
// let userName = prompt("Enter your name:");
// document.getElementById("greet").innerText = "Hello, " + userName + " 👋";
//-02
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Name is required");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
//-03
function printPage() {
    window.print();
}
