const radios = document.getElementsByName("participated"); 
const secondPageNumOne = document.querySelector(".secondPageNumOne");
const thirdPageNumtwo = document.querySelector(".thirdPageNumtwo");

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
    name.classList.remove("inputval");

})

email.addEventListener("input", event =>{
    localStorage.setItem("email", email.value);
    console.log(localStorage.getItem("email"))

    secondPageNumOne.classList.add("greyBack");
    email.classList.remove("inputval");
})

number.addEventListener("input", event =>{
    localStorage.setItem("number", number.value);
    console.log(localStorage.getItem("number"))

    secondPageNumOne.classList.add("greyBack");
    number.classList.remove("inputval");
})

date.addEventListener("input", event =>{
    localStorage.setItem("date", date.value);
    console.log(localStorage.getItem("date"))

    secondPageNumOne.classList.add("greyBack");
    date.classList.remove("inputval");
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
