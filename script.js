
function updateProgressBar(){
    const{scrollTop, scrollHeight}=document.documentElement;
    const scrollPercent = `${(scrollTop / (scrollHeight-window.innerHeight))*100}%`;
    document.querySelector("#progress-bar").style.setProperty('--progress', scrollPercent); 
}

document.addEventListener("scroll", updateProgressBar);


const aboutContainer = document.querySelector(".about-container");
const servicesContainer = document.querySelector("#services");
const talkContainer = document.querySelector("#talk");

const wholeContainer = document.querySelector("#hide-on-click")
const hamburgerButton = document.querySelector(".hamburger-button")
const hamburgerMenu = document.querySelector("#hamburger-menu")
const progressBar = document.querySelector("#progress-bar")

hamburgerButton.addEventListener("click", (e) =>{
    wholeContainer.classList.toggle("display");
    hamburgerMenu.classList.toggle("displayNav");
    hamburgerButton.classList.toggle("fa-bars");
    hamburgerButton.classList.toggle("fa-times");
    progressBar.classList.toggle("display");  
})

removeDisplayNone = () => {
    wholeContainer.classList.toggle("display");
    progressBar.classList.toggle("display");  
    hamburgerMenu.classList.toggle("displayNav");
    hamburgerButton.classList.toggle("fa-bars");
    hamburgerButton.classList.toggle("fa-times");
}
