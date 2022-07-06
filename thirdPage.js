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
const doneBtn = document.querySelector("#done");
const submitBtn = document.querySelector("#submitBtn");
const thirdPageHeaderText = document.querySelector("#thirdPageHeaderText");
const twoGreenCheck = document.querySelector(".twoGreenCheck");
const openImg = document.querySelector(".characterOpenImg");
const knowledgeOpenImg = document.querySelector(".open");
const knowledgeCloseImg = document.querySelector(".close");
const selectOptions = document.querySelectorAll(".option");
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
                    

                    grandOptions[i].addEventListener("click", event =>{

                        if(!event.target.src){
                            grandmasterValue.innerText = event.target.innerText;
                            grandmasterList.classList.toggle("hide");
                            openImg.classList.toggle("rotate");
                            character_id = grandOption[i].value;
                            localStorage.setItem("innerText", event.target.innerText);
                            localStorage.setItem("character_id", character_id);

                            thirdPageNumtwo.classList.add("greyBack");

                            if(!doneBtn.classList.contains("hide")){
                                doneBtn.classList.toggle("hide");
                                submitBtn.classList.toggle("hide");
                                thirdPageHeaderText.innerText = "First Step is Done, Continue To Finish Onboarding";
                            }
                        
                        }
                       
                })
            }
            
            }
            
        }
})


dropdown.addEventListener("click", event =>{
    grandmasterList.classList.toggle("hide");
    openImg.classList.toggle("rotate");
    
    
})

selectExpirience.addEventListener("click", event =>{

    knowledgeOpenImg.classList.toggle("hide");
    knowledgeCloseImg.classList.toggle("hide");


})



secondForm.addEventListener("submit", event =>{
    event.preventDefault();

    if (selectExpirience.value !== "beginner" && selectExpirience.value !== "normal" && selectExpirience.value !== "professional" ){


        if(secondErrorMessage.classList.contains("hide")){
            secondErrorMessage.classList.toggle("hide");
        }
        
        
        secondErrorMain.innerText = "Invalid Level of knowledge"
        secondErrorInstr.innerText = "You should choose one from given options"

    } else  if(grandmasterValue.innerText !== "Nona Gaphrindashvili" && grandmasterValue.innerText !== "Mikhail Tal" 
    && grandmasterValue.innerText !== "Bobby Fisher" && grandmasterValue.innerText !== "Magnus Carlsen" && grandmasterValue.innerText !== "Other"){
        if(secondErrorMessage.classList.contains("hide")){
            secondErrorMessage.classList.toggle("hide");
        }
        
        secondErrorMain.innerText = "Invalid Character"
        secondErrorInstr.innerText = "You should choose one from given option"

      } else if (radioYes.checked === false && radioNo.checked === false){

        if(secondErrorMessage.classList.contains("hide")){
            secondErrorMessage.classList.toggle("hide");
        }
        
        secondErrorMain.innerText = "Invalid Answer"
        secondErrorInstr.innerText = "You should choose one from given option"

    } else {

        thirdPageHeaderText.innerText = "Almost done!";
        doneBtn.classList.toggle("hide");
        submitBtn.classList.toggle("hide");

        if(!secondErrorMessage.classList.contains("hide")){
            secondErrorMessage.classList.toggle("hide");
        }
    }
        
        
    })
