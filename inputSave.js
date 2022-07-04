const radios = document.getElementsByName("participated"); 
const secondPageNumOne = document.querySelector(".secondPageNumOne");
const thirdPageNumtwo = document.querySelector(".thirdPageNumtwo");
const nameWrap = document.querySelector(".nameWrap");
const emailWrap = document.querySelector(".emailWrap");
const numberWrap = document.querySelector(".numberWrap");
const dateWrap = document.querySelector(".dateWrap");

name.value = localStorage.getItem("name");
email.value = localStorage.getItem("email");
number.value = localStorage.getItem("number");
date.value = localStorage.getItem("date");


if(localStorage.getItem("innerText") && localStorage.getItem("character_id")){
    grandmasterValue.innerText =  localStorage.getItem("innerText");
    character_id = localStorage.getItem("character_id");
}

if(localStorage.getItem("expirience")){
    selectExpirience.value = localStorage.getItem("expirience");
}




name.addEventListener("input", event =>{
    localStorage.setItem("name", name.value);
    console.log(localStorage.getItem("name"))

    secondPageNumOne.classList.add("greyBack");
    nameWrap.classList.remove("inputval");
    name.classList.remove("inputval");

    nameImg.classList.add("hide");
        
})

email.addEventListener("input", event =>{
    localStorage.setItem("email", email.value);
    console.log(localStorage.getItem("email"))

    secondPageNumOne.classList.add("greyBack");
    emailWrap.classList.remove("inputval");
    email.classList.remove("inputval");

   
    emailImg.classList.add("hide");
        
})

number.addEventListener("input", event =>{
    localStorage.setItem("number", number.value);
    console.log(localStorage.getItem("number"))

    secondPageNumOne.classList.add("greyBack");
    numberWrap.classList.remove("inputval");
    number.classList.remove("inputval");

    
        numberImg.classList.add("hide");
        
})

date.addEventListener("input", event =>{
    localStorage.setItem("date", date.value);
    console.log(localStorage.getItem("date"))

    secondPageNumOne.classList.add("greyBack");
    dateWrap.classList.remove("inputval");
    date.classList.remove("inputval");

    
        dateImg.classList.add("hide");
})

selectExpirience.addEventListener("change", event =>{
    localStorage.setItem("expirience", selectExpirience.value);
    console.log(localStorage.getItem("expirience"))

    thirdPageNumtwo.classList.add("greyBack");

    if(!doneBtn.classList.contains("hide")){
        doneBtn.classList.toggle("hide");
        submitBtn.classList.toggle("hide");
        thirdPageHeaderText.innerText = "First Step is Done, Continue To Finish Onboarding";
    }

})


radios.forEach(radio =>{
    radio.addEventListener("click", event =>{
        localStorage.setItem("participated", radio.value);
        console.log(localStorage.getItem("participated"))

        thirdPageNumtwo.classList.add("greyBack");

        if(!doneBtn.classList.contains("hide")){
            doneBtn.classList.toggle("hide");
            submitBtn.classList.toggle("hide");
            thirdPageHeaderText.innerText = "First Step is Done, Continue To Finish Onboarding";
        }
    
    })

    
})

for(let i=0;i<radios.length;i++){
  if(radios[i].value == localStorage.getItem('participated')){
      radios[i].checked = true; 
  }
}
