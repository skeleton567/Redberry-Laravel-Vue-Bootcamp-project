const dropdown = document.querySelector("#selectField");
const grandmasterList = document.querySelector("#list");
const grandmasterOptions = document.querySelectorAll(".options");
const grandmasterValue = document.querySelector("#grandmasterValue");
const selectExpirience = document.querySelector("#expirience");
const radioYes = document.querySelector("#yes");
const radioNo = document.querySelector("#no");
const secondForm = document.querySelector("#secondForm");
const secondErrorMessage = document.querySelector("#secondErrorMessage");
const secondErrorInstr = document.querySelector("#errorInstr");
const secondErrorMain = document.querySelector("#errorMain");
const otherOption = document.querySelector(".otherOption");
const options = document.querySelectorAll(".otherOption");
const grandOptions = document.querySelectorAll(".grandOptions");
const grandOption = document.querySelectorAll(".grandOption");
const grandmasterImg = document.querySelectorAll(".grandmasterImg");
let character_id;

const connection = async url => {
    try {
        const res = await fetch(`https://chess-tournament-api.devtest.ge/api/${url}`);
        const data = await res.json();
        return data
    
    } catch (error) {
    
        return error;
    }
}

connection("grandmasters")
    .then(data =>{
        for(let grandmaster of data){

            for(let i = 0; i < grandOption.length; i++){
                if(i === grandmaster.id - 1){
                    
                    grandOption[i].value = grandmaster.id;
                    grandmasterImg[i].src = `https://chess-tournament-api.devtest.ge${grandmaster.image}`;
                    grandOption[i].innerHTML = `${grandmaster.name}`;
                    console.log(grandmasterImg);
                    grandOption[i].addEventListener("click", event =>{
                        grandmasterValue.innerText = event.target.innerText;
                        grandmasterList.classList.toggle("hide");
                        character_id = grandOption[i].value;
                        localStorage.setItem("innerText", event.target.innerText);
                        localStorage.setItem("character_id", character_id);
                })
            }
            
            }
            
        }
})


otherOption.addEventListener("click", event =>{
    grandmasterValue.innerText = event.target.innerText;
    grandmasterList.classList.toggle("hide");
    character_id = 0;
    localStorage.setItem("innerText", event.target.innerText);
    localStorage.setItem("character_id", character_id);
})


dropdown.addEventListener("click", event =>{
    grandmasterList.classList.toggle("hide");
    
})




secondForm.addEventListener("submit", event =>{
    event.preventDefault();

    if (selectExpirience.value !== "beginner" && selectExpirience.value !== "normal" && selectExpirience.value !== "professional" ){


        if(secondErrorMessage.classList.contains("hide")){
            secondErrorMessage.classList.toggle("hide");
        }
        
        
        secondErrorMain.innerText = "Invalid Expirience"
        secondErrorInstr.innerText = "You should choose one from given options"

    } else  if(grandmasterValue.innerText !== "Nona Gaphrindashvili" && grandmasterValue.innerText !== "Mikhail Tal" 
    && !grandmasterValue.innerText !== "Bobby Fisher" && grandmasterValue.innerText !== "Bobby Fisher" && grandmasterValue.innerText !== "Other"){
        if(secondErrorMessage.classList.contains("hide")){
            secondErrorMessage.classList.toggle("hide");
        }
        
        secondErrorMain.innerText = "Invalid Grandmaster"
        secondErrorInstr.innerText = "You should choose one from given option"

      } else if (radioYes.checked === false && radioNo.checked === false){

        if(secondErrorMessage.classList.contains("hide")){
            secondErrorMessage.classList.toggle("hide");
        }
        
        secondErrorMain.innerText = "Invalid Answer"
        secondErrorInstr.innerText = "You should choose one from given option"

    } else {

        console.log(selectExpirience.value);
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
        

    }


})
