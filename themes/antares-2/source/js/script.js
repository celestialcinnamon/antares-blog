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

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('is_dark_mode', document.documentElement.classList.contains('dark') ? 1 : 0)
}

function initDarkMode() {
    const siteIsOnDarkMode = !!parseInt(localStorage.getItem('is_dark_mode'));
    console.log(siteIsOnDarkMode)

    if (siteIsOnDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove("dark");
    }
}

initDarkMode();