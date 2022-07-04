
doneBtn.addEventListener("click", event =>{

    let persInfo =  {
        name: name.value,
        email: email.value, 
        phone: number.value,
        date_of_birth: date.value
    }

    console.log(persInfo);

    persInfo.experience_level = selectExpirience.value;

    persInfo.character_id = character_id;

    let checkedRadio = document.querySelector('input[name="participated"]:checked');
    persInfo.already_participated = JSON.parse(checkedRadio.value.toLowerCase());

    console.log(persInfo);

    try {
        fetch("https://chess-tournament-api.devtest.ge/api/register", {
        method: "POST",
        headers: {
            "Content-type": "application/JSON",
            "accept": "application/json"
        },
        body: JSON.stringify(persInfo)
    }) .then (res =>{
        if(res.status === 201){
            localStorage.clear();
            forthPage.classList.toggle("hide");
            thirdPage.classList.toggle("hide");
        }
    }) 
    } catch (error) {
        console.log(error);
    }
    

})

