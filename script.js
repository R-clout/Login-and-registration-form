const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
 const successMessage = document.getElementById("success-message");

if(registerForm){
    registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const fullName = document.getElementById("full-name");

    localStorage.setItem("fullname", fullName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    const name = localStorage.getItem("fullname");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    console.log(savedEmail);
    console.log(savedPassword);
    console.log(name);

     window.location.href = './success.html';
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
     const email = document.getElementById("email");
    const password = document.getElementById("password");

    const name = localStorage.getItem("fullname");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if(email.value !== savedEmail || password.value !== savedPassword){
        console.log("Invalid Details");
    } else {
        window.location.href = "mockupfoobr.html";
    }
})