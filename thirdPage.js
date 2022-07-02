const dropdown = document.querySelector("#selectField");
const grandmasterList = document.querySelector("#list");
const grandmasterOptions = document.querySelectorAll(".options");
const grandmasterValue = document.querySelector("#grandmasterValue");


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
            
            const li = document.createElement("li");
            const option = document.createElement("option");
            const img = document.createElement("img");
            
            img.src = grandmaster.image;
            option.value = grandmaster.name;
            option.innerHTML = `${grandmaster.name} <img class="grandmasterImg" src="${grandmaster.image}" alt="">`;
            
            option.addEventListener("click", event =>{
                grandmasterValue.innerText = event.target.innerText;
                grandmasterList.classList.toggle("hide");
            })

            li.appendChild(option);
            li.appendChild(img);
            li.classList.toggle("options");
            grandmasterList.appendChild(li);
        }
})




dropdown.addEventListener("click", event =>{
    grandmasterList.classList.toggle("hide");
    
})


