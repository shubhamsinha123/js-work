function myFunc()
{
    document.getElementById("h1").style.color = "blue";
}
let input  = document.querySelector('button');
let changedData = document.querySelector('h1');
// let input  = document.getElementsByTagName('h1');
// input.addEventListener('click', helloMsg);
input.addEventListener('click', promptFunc);

function promptFunc()
{
    let name = prompt("Enter the name:");
    // let data = document.getElementsByTagName('h1')
    changedData.textContent = "Namaste" + " "+ name + ".";
}

function helloMsg()
{
    alert("clicked");
}