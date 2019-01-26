document.addEventListener("DOMContentLoaded", function(e) {});

document.addEventListener("focusin", function(event) {
    if (event.target.matches(".post--full *")) {
        console.log(event.target.offsetTop + 200);

        document.body.scrollTo({
            top: event.target.offsetTop - 200,
            left: 0,
            behavior: "smooth"
        });
    }
});
