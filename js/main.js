const closeButton = document.getElementById("visual-button");
const closeSection =document.getElementById("visually-id");

closeButton.addEventListener("click", function(evt){
evt.preventDefault();
closeSection.classList.toggle("visually-none")
})