const startBtn = document.querySelector(".startBtn");
const firstPage  = document.querySelector("#firstPage");
const secondPage  = document.querySelector("#secondPage");
const closeErrbtn = document.querySelector(".closeErr");
const secondCloseErrbtn = document.querySelector("#closeErr");



startBtn.addEventListener("click", event =>{
    firstPage.classList.toggle("hide");
    secondPage.classList.toggle("hide");
})

secondPageBack.addEventListener("click", event =>{
    firstPage.classList.toggle("hide");
    secondPage.classList.toggle("hide");
})

thirdPageBack.addEventListener("click", event =>{
    thirdPage.classList.toggle("hide");
    secondPage.classList.toggle("hide");
})

       


closeErrbtn.addEventListener("click", event =>{
    errorMessage.classList.toggle("hide");
})

secondCloseErrbtn.addEventListener("click", event =>{
    secondErrorMessage.classList.toggle("hide");
})

