const radios = document.getElementsByName("participated"); 

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
})

email.addEventListener("input", event =>{
    localStorage.setItem("email", email.value);
    console.log(localStorage.getItem("email"))
})

number.addEventListener("input", event =>{
    localStorage.setItem("number", number.value);
    console.log(localStorage.getItem("number"))
})

date.addEventListener("input", event =>{
    localStorage.setItem("date", date.value);
    console.log(localStorage.getItem("date"))
})

selectExpirience.addEventListener("change", event =>{
    localStorage.setItem("expirience", selectExpirience.value);
    console.log(localStorage.getItem("expirience"))
})


radios.forEach(radio =>{
    radio.addEventListener("click", event =>{
        localStorage.setItem("participated", radio.value);
        console.log(localStorage.getItem("participated"))
    })
})

for(let i=0;i<radios.length;i++){
  if(radios[i].value == localStorage.getItem('participated')){
      radios[i].checked = true; 
  }
}
