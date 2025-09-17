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

    //push the object to the array and then clear the input field to allow other entries
    // const inputArray = [];
    // inputArray.push(inputObj);
    // localStorage.setItem("register", JSON.stringify(inputArray));
    // console.log(inputArray);
    // document.forms[0].reset();
    
    // 
    // console.log(localStorage.getItem("register"));

   

    // localStorage.setItem("fullname", fullName.value);
    // localStorage.setItem("email", email.value);
    // localStorage.setItem("password", password.value);



    // const name = localStorage.getItem("fullname");
    // const savedEmail = localStorage.getItem("email");
    // const savedPassword = localStorage.getItem("password");

    // console.log(savedEmail);
    // console.log(savedPassword);
    // console.log(name);

    //  window.location.href = './success.html';
    //cut the data from the form
    // const formData = new FormData(form);
    // console.log(formData.get("email"));
    // const data = new URLSearchParams(formData);

    // //send data to a server with the fetch API 
    // fetch("https://reqres.in/api/users", {
    //     method: 'POST',
    //     body: data
    // }).then(res => res.json())
    //     .then(data => {
    //         window.location.href = './success.html';
    //     })
    //     .catch(error => console.log(error));
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