//Wait for website to load
document.addEventListener("DOMContentLoaded", function () {

    //contact form
    document.getElementById("emailMessage").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;
        const subject = encodeURIComponent("Message from " + name);
        const body = encodeURIComponent(message);
        window.location.href = `mailto:azaleadoom@gmail.com?subject=${subject}&body=${body}`;
    })
});