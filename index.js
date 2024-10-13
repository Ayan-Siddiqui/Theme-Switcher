const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

const handleClick = (e) => {
    if(e.target.id === "yellow"){
        body.style.backgroundColor = "#fde047"
    }
    if(e.target.id === "blue"){
        body.style.backgroundColor = "#7dd3fc"
    }
    if(e.target.id === "white"){
        body.style.backgroundColor = "#ffffff"
    }
    if(e.target.id === "red"){
        body.style.backgroundColor = "#fda4af"
    }
    if(e.target.id === "purple"){
        body.style.backgroundColor = "#d8b4fe"
    }
    // body.style.backgroundColor = e.target.id
}

buttons.forEach((button) => {
    console.log(button)
    
    button.addEventListener('click', (e) => handleClick(e))
})