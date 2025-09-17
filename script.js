const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const successMessage = document.getElementById("success-message");



if(registerForm){
    registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("full-name").value;
    const errorMessage = document.getElementById("error-message");
    //add input details to an object
    let inputObj = {
        email,
        password,
        fullName
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const findemail = users.find(user => user.email === email);
    
    if(findemail){
        errorMessage.textContent = "email already in use";
    }
    else{
        users.push(inputObj);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "./success.html"
    }
})
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
     const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error-message");


    const users = JSON.parse(localStorage.getItem("users"));

    if(users == null){
        error.textContent = "New User?. kindly register";
    }

    console.log(users);
    console.log(email)
    console.log(password);
    const login = users.find(user => user.email === email);

    if(!login){
        error.textContent = "Email incorrect. Kindly register"
    } 

    if(login.password !== password){
        error.textContent = "password incorrect. try again";
    }

    if(login && login.password === password){
    localStorage.setItem("loggedInUser", JSON.stringify(login));
        console.log(localStorage.getItem("loggedInUser"));
        window.location.href = "./mockupfoobr.html";
    }
})