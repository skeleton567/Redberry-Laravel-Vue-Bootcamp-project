const radios = document.getElementsByName("participated"); 
const secondPageNumOne = document.querySelector(".secondPageNumOne");
const thirdPageNumtwo = document.querySelector(".thirdPageNumtwo");
const nameWrap = document.querySelector(".nameWrap");
const emailWrap = document.querySelector(".emailWrap");
const numberWrap = document.querySelector(".numberWrap");
const dateWrap = document.querySelector(".dateWrap");
const expirienceRedStar = document.querySelector(".selectRedStar");
const nameRedStar = document.querySelector(".nameRedStar");
const emailRedStar = document.querySelector(".emailRedStar");
const numberRedStar = document.querySelector(".numberRedStar");
const dateRedStar = document.querySelector(".dateRedStar");



name.value = localStorage.getItem("name");
email.value = localStorage.getItem("email");
number.value = localStorage.getItem("number");
date.value = localStorage.getItem("date");



if(localStorage.getItem("name")){
    nameRedStar.classList.add("hide");
}

if(localStorage.getItem("email")){
    emailRedStar.classList.add("hide");
}

if(localStorage.getItem("number")){
    numberRedStar.classList.add("hide");
}



if(date.value !== ""){
    dateRedStar.classList.add("hide");
}


if(localStorage.getItem("innerText") && localStorage.getItem("character_id")){
    grandmasterValue.innerText =  localStorage.getItem("innerText");
    character_id = localStorage.getItem("character_id");
}

if(localStorage.getItem("expirience")){
    selectExpirience.value = localStorage.getItem("expirience");
    
    expirienceRedStar.classList.add("hide");
}




name.addEventListener("input", event =>{
    localStorage.setItem("name", name.value);
    

    secondPageNumOne.classList.add("greyBack");
    nameWrap.classList.remove("inputval");
    name.classList.remove("inputval");
    nameImg.classList.add("hide");
    nameRedStar.classList.add("hide");
    if(name.value === ""){
        nameRedStar.classList.remove("hide"); 
    }

        
})

email.addEventListener("input", event =>{
    localStorage.setItem("email", email.value);
    

    secondPageNumOne.classList.add("greyBack");
    emailWrap.classList.remove("inputval");
    email.classList.remove("inputval");
    emailImg.classList.add("hide");

    emailRedStar.classList.add("hide");
    if(email.value === ""){
        emailRedStar.classList.remove("hide"); 
    }
        
})

number.addEventListener("input", event =>{
    localStorage.setItem("number", number.value);
    

    secondPageNumOne.classList.add("greyBack");
    numberWrap.classList.remove("inputval");
    number.classList.remove("inputval");
    numberImg.classList.add("hide");

    numberRedStar.classList.add("hide");
    if(number.value === ""){
        numberRedStar.classList.remove("hide"); 
    }
        
})

date.addEventListener("input", event =>{
    localStorage.setItem("date", date.value);
    

    secondPageNumOne.classList.add("greyBack");
    dateWrap.classList.remove("inputval");
    date.classList.remove("inputval");
    dateImg.classList.add("hide");

    
    
})

date.addEventListener("click", event =>{
    dateRedStar.classList.add("hide");
    date.type = "date";
})



selectExpirience.addEventListener("change", event =>{
    localStorage.setItem("expirience", selectExpirience.value);
    

    thirdPageNumtwo.classList.add("greyBack");

    expirienceRedStar.classList.add("hide");

    if(!doneBtn.classList.contains("hide")){
        doneBtn.classList.toggle("hide");
        submitBtn.classList.toggle("hide");
        thirdPageHeaderText.innerText = "First Step is Done, Continue To Finish Onboarding";
    }

})


radios.forEach(radio =>{
    radio.addEventListener("click", event =>{
        localStorage.setItem("participated", radio.value);
        

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
