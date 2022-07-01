const startBtn = document.querySelector("#startBtn");
const firstPage  = document.querySelector("#firstPage");
const secondPage  = document.querySelector("#secondPage");


startBtn.addEventListener("click", event =>{
    firstPage.classList.toggle("hide");
    secondPage.classList.toggle("hide");
})