console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){

    const imgUrl = "https://dog.ceo/api/breeds/image/random/5";

    fetch(imgUrl)
        .then(response => response.json() )
        .then(function(object){
            let array = object["message"];
            for (const element of array){
                let image = document.createElement("img");
                image.src = element
                document.body.appendChild(image);
                
            }
        })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
        .then(response => response.json() )
        .then(function(object){
            // debugger
            let array = Object.keys(object.message)
            const ul = document.getElementById("dog-breeds");
            ul.addEventListener("click", function(e){
                // debugger
                if (e.target.className == "breed"){
                let liToChange = e.target;
                liToChange.style.color = "magenta";
                }
            })
            for (const element of array){
                let li = document.createElement("li");
                li.innerHTML = element;
                li.className = `breed`;
                ul.appendChild(li);
                
            }
        })

    const dropDown = document.getElementById("breed-dropdown");
    dropDown.addEventListener("change", filterBreeds)
    function filterBreeds(event){
        const liArray = document.getElementsByClassName("breed");
        for (const element of liArray){
            element.style.display="block";
        }
            
        const letter = dropDown.value;
        for (const element of liArray){
            if (letter != element.innerHTML.charAt(0) ){
                element.style.display="none";
            }
        }

    }
})