// 
let home = document.getElementById("homepage");

    home.onclick = () =>{

    document.getElementById("home").scrollIntoView({
        behavior:"smooth"});
}




let about = document.getElementById("aboutpage");

    about.onclick = () =>{

    document.getElementById("about").scrollIntoView({
        behavior:"smooth"});
}


let certificate = document.getElementById("certificatepage");

    certificate.onclick = () =>{

    document.getElementById("certificate").scrollIntoView({
        behavior:"smooth"});
}


let contact = document.getElementById("contactpage");

    contact.onclick = () =>{

    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"});
}

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});