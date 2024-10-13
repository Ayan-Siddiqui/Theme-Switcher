const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

const handleClick = (e) => {
    // if(e.target.id === "yellow"){
    //     
    // }
    // if(e.target.id === "blue"){
    // }
    // if(e.target.id === "white"){
    //     
    // }
    // if(e.target.id === "red"){
    //     
    // }
    // if(e.target.id === "purple"){
    //     
    // }
    // body.style.backgroundColor = e.target.id
    switch(e.target.id){
        case "yellow":
            body.style.backgroundColor = "#fde047"
            break
        case "blue":
            body.style.backgroundColor = "#7dd3fc"
            break
        case "white":
            body.style.backgroundColor = "#ffffff"
            break
        case "red":
            body.style.backgroundColor = "#fda4af"
            break
        case "purple":
            body.style.backgroundColor = "#d8b4fe"
            break
    }
}

buttons.forEach((button) => {
    console.log(button)
    
    button.addEventListener('click', (e) => handleClick(e))
})