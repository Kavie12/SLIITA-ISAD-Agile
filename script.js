var ham = document.getElementById("ham");
var navPages = document.getElementById("menu-links");
var ham1 = document.getElementById("ham1");
var ham2 = document.getElementById("ham2");
var ham3 = document.getElementById("ham3");

function closeDropdown() {
    navPages.style.right = "-300px"
    ham1.style.transform = "rotate(0deg)";
    ham1.style.width = "20px";
    ham2.style.display = "block";
    ham3.style.transform = "rotate(0deg)";
    ham3.style.width = "20px";
}

function showDropdown() {
    navPages.style.right = "25px"
    ham1.style.transform = "rotate(-45deg) translateY(5.5px)";
    ham1.style.width = "23px";
    ham2.style.display = "none";
    ham3.style.transform = "rotate(45deg) translateY(-5.5px)";
    ham3.style.width = "23px";
}

ham.addEventListener("click", function() {
    if (navPages.style.right === "25px") {
        closeDropdown();
    } else {
        showDropdown();
    }
})