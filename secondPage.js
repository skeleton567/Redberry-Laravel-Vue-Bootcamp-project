const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const date = document.querySelector("#date");
const firstForm = document.querySelector("#firstForm");
const errorMessage = document.querySelector("#errorMessage");
const secondPagebtn = document.querySelector("#secondPagebtn");
const errorInstr = document.querySelector(".errorInstr");
const errorMain = document.querySelector(".errorMain");

let persInfo;

firstForm.addEventListener("submit", event =>{
    event.preventDefault();
    let phoneRegex = /^[0-9]*$/;

    if (name.value.length < 2 || name.value === "" || name.value === null ){


        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        
        
        errorMain.innerText = "Invalid name"
        errorInstr.innerText = "Name should contain at least 2 characters"

    } else  if(email.value === "" || email.value === null || !email.value.includes("@redberry.ge")){
        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        
        errorMain.innerText = "Invalid Email"
        errorInstr.innerText = "Email should be in redberry format"
      } else if (number.value.length !== 9 || number.value === "" || number.value === null || !phoneRegex.test(number.value) ){
        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        
        errorMain.innerText = "Invalid Phone number"
        errorInstr.innerText = "Number should be exactly 9 digits long"
    } else if (date.value.length < 1 || date.value === "" || date.value === null ){
        if(errorMessage.classList.contains("hide")){
            errorMessage.classList.toggle("hide");
        }
        errorMain.innerText = "Invalid Date of birth"
        errorInstr.innerText = "Please enter Date of birth"
    } else {

        persInfo =  {
            name: name.value,
            email: email.value, 
            phone: number.value,
            date_of_birth: date.value
        }

        let count = Math.floor(Math.random()+1) * 9;
        persInfo.character_id = count;
        console.log(persInfo);
    }
})
