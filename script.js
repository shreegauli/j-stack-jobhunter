
const bar = document.getElementById("bar");
const menu = document.getElementById("menue");

if (bar) {
    bar.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !bar.contains(event.target)) {
        menu.classList.remove("active");
    }
});

const baar = document.querySelector("#bar");
console.log(baar);

const sortBtns = document.querySelectorAll(".job-id > *");

sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");
    });
});