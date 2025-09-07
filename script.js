const form = document.getElementById("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    //cut the data from the form
    const formData = new FormData(form);
    console.log(formData.get("email"));
    const data = new URLSearchParams(formData);

    //send data to a server with the fetch API 
    fetch("/", {
        method: 'POST',
        body: data
    }).then(res => res.json())
        .then(data => {
            window.location.href = './success.html';
        })
        .catch(error => console.error(error));
})