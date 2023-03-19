var annually = document.querySelectorAll(".annually")
var check = document.querySelector(".toggle-btn label")

check.addEventListener("click", function() {
    if(annually.style.display === "none") {
        annually.style.display = "block"  
    } else {
        annually.style.display = "none";
    }
})