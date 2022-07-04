const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const date = document.querySelector("#date");
const firstForm = document.querySelector("#firstForm");
const errorMessage = document.querySelector("#errorMessage");
const secondPagebtn = document.querySelector("#secondPagebtn");
const errorInstr = document.querySelector(".errorInstr");
const errorMain = document.querySelector(".errorMain");



firstForm.addEventListener("submit", event =>{
    event.preventDefault();
    let phoneRegex = /^[0-9]*$/;
    let emailRegex = /.@redberry.ge$/

    if (name.value.length < 2 || name.value === "" || name.value === null ){


        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        
        
        errorMain.innerText = "Invalid name"
        errorInstr.innerText = "Name should contain at least 2 characters"

        name.classList.add("inputval");

    } else  if(email.value === "" || email.value === null || !emailRegex.test(email.value)){
        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        
        errorMain.innerText = "Invalid Email"
        errorInstr.innerText = "Email should be in redberry format"
        email.classList.add("inputval");
      } else if (number.value.length !== 9 || number.value === "" || number.value === null || !phoneRegex.test(number.value) ){
        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        
        errorMain.innerText = "Invalid Phone number"
        errorInstr.innerText = "Number should be exactly 9 digits long"
        number.classList.add("inputval");
    } else if (date.value.length < 1 || date.value === "" || date.value === null ){
        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        errorMain.innerText = "Invalid Date of birth"
        errorInstr.innerText = "Please enter Date of birth"
        date.classList.add("inputval");
    } else {

        thirdPage.classList.toggle("hide");
        secondPage.classList.toggle("hide");

        if(!errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
    }
})
