const sideNav = document.getElementById("sideNav");

function toggleNav() {
    sideNav.classList.toggle("open");
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 480) {
        sideNav.classList.remove("open");
    }
});