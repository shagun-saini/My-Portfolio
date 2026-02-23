// 
let home = document.querySelector("#home");
console.log(home);

homepage.onclick=()=>{
    window.open("#home");
    console.log("Open the Home Page");
}


let about = document.querySelector("#about");
console.log(about);

aboutpage.onclick=()=>{
    window.open("#about");
    console.log("Open the About Page");
}


let certificate = document.querySelector("#certificate");
console.log(certificate);

certificatepage.onclick=()=>{
    window.open("#certificate");
    console.log("Open the Certificate Page");
}


let contact = document.querySelector("#contact");
console.log(contact);

contactpage.onclick=()=>{
    window.open("#contact");
    console.log("Open the Contact Page");
}

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});