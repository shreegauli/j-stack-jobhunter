const bar = document.getElementById("bar");
const menu = document.getElementById("menue");

if(bar){
    bar.addEventListener("click",()=>{
        menu.classList.toggle("active");
    });
}
const baar=document.querySelector("#bar")
console.log(baar)

const sortBtns = document.querySelectorAll(".job-id > *");

sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Remove "active" class from all buttons
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        // Add "active" class to the clicked button
        btn.classList.add("active");
    });
});