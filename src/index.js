
document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = "http://localhost:3000/pups/"
    //const dogSpan = document.createElement('span')


    const getDogs = () => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(dogArray => renderDogs(dogArray))
    }

    const renderDogs = dogs => {
        dogs.forEach(dogObj => renderDog(dogObj))
        
    }

    const renderDogDetails = (dog) => {
        const dogInfo = document.querySelector('#dog-info')
        dogInfo.innerHTML = `
        <img src=${dog.image}>
        <h2>${dog.name}</h2>
        <button id=${dog.id} class="button">Good Dog!</button>
        `
    }

    const renderDog = dogObj => {
        const dogDiv = document.getElementById('dog-bar')
        console.log(dogDiv)
        //dogDiv.dataset.dogId = dogObj.id 
        const dogSpan = document.createElement('span')
        dogSpan.dataset.dogId = dogObj.id 
        dogSpan.innerHTML = `${dogObj.name}`
        
        dogDiv.append(dogSpan)
        

        dogSpan.addEventListener('click', e => {
            if(e.target.matches('span')){
               
                const dogId = e.target.dataset.dogId

                fetch(baseUrl + dogId)
                .then(resp => resp.json())
                .then(renderDogDetails)     
            }
              
                
                
            
            
        })   

       
    }


    
    const dogButton = document.querySelector(".button")
    
    const clickHandler  = () => {
        document.addEventListener('click', e =>{
         if (e.target.matches(dogButton)){
           const pupButton = e.target.dataset.id 
           console.log('click')
           
         }
        
        })

        
    }

      //if e.target.textContent === "Good Dog!"
                    //e.target.textContent === "Bad Dog!"
                //else e.target.textContent === "Good Dog!"
    




//event listener for button ('click' toggle)
//action - change button's text to read good dog/bad dog
//action - change dog status from good to bad or bad to good (conditional if/else)

// ^ this action can be done w a PATCH request
// const options = {
//     method: "PATCH",
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({isGoodDog})
// }
//     fetch(baseUrl + dogId, options)
//     .then(resp => resp.json())
//     .then()



clickHandler(); 
getDogs();
})


/*
get request for dog data
iteration to render dogs
create div to append data to html 



*/