const form = document.getElementById("login-form");

form.addEventListener("submit",validateLoginForm);



function validateLoginForm(event){
event.preventDefault();

const email = document.getElementById("username").value;
const password = document.getElementById("pwd").value;


    if(email === "suraj@gmail.com" && password === "suraj@79"){
        window.location.href="Home.html";
    }
    else{
        alert("false") ;
    }
}