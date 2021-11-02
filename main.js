function validateForm() {
    let x = document.forms["contactForm"]["umail"]
    let y = document.forms["contactForm"]["message"]
    if (x == "") {
        console.log("Email must be filled out")
        return false;
    } 
    if (y == "") {
        console.log("You must enter a message")
        return false;
    }
    location.href = "mailto:"+"electrasolutions@electra.ca"+'?cc='+x.value+'&subject='+"Inquiry"+'&body='+y.value;
}

// Split into multiple functions because otherwise the document would look for elements that do not exist
function french() {
    // Nav bar
    var t1 = document.getElementById("lang");
    var t2 = document.getElementById("home");
    var t3 = document.getElementById("about");
    var t4 = document.getElementById("price");
    // Only need to check if the button has changed
    if (t1.innerHTML == "FR") {
        t1.innerHTML = "EN";
        t2.innerHTML = "Page d'accueil";
        t3.innerHTML = "À Propos";
        t4.innerHTML = "Les Prix";
    }
    else {
        t1.innerHTML = "FR";
        t2.innerHTML = "Home";
        t3.innerHTML = "About";
        t4.innerHTML = "Price";
    }
}

function french_pricing(){
    // Nav bar
    var t1 = document.getElementById("lang");
    var t2 = document.getElementById("home");
    var t3 = document.getElementById("about");
    var t4 = document.getElementById("price");
    // Only need to check if the button has changed
    if (t1.innerHTML == "FR") {
        t1.innerHTML = "EN";
        t2.innerHTML = "Page d'accueil";
        t3.innerHTML = "À Propos";
        t4.innerHTML = "Les Prix";
    }
    else {
        t1.innerHTML = "FR";
        t2.innerHTML = "Home";
        t3.innerHTML = "About";
        t4.innerHTML = "Price";
    }
}

function french_about(){
    // Nav bar
    var t1 = document.getElementById("lang");
    var t2 = document.getElementById("home");
    var t3 = document.getElementById("about");
    var t4 = document.getElementById("price");
    // Only need to check if the button has changed
    if (t1.innerHTML == "FR") {
        t1.innerHTML = "EN";
        t2.innerHTML = "Page d'accueil";
        t3.innerHTML = "À Propos";
        t4.innerHTML = "Les Prix";
    }
    else {
        t1.innerHTML = "FR";
        t2.innerHTML = "Home";
        t3.innerHTML = "About";
        t4.innerHTML = "Price";
    }
}

function french_solutions(){
    // Nav bar
    var t1 = document.getElementById("lang");
    var t2 = document.getElementById("home");
    var t3 = document.getElementById("about");
    var t4 = document.getElementById("price");
    // Only need to check if the button has changed
    if (t1.innerHTML == "FR") {
        t1.innerHTML = "EN";
        t2.innerHTML = "Page d'accueil";
        t3.innerHTML = "À Propos";
        t4.innerHTML = "Les Prix";
    }
    else {
        t1.innerHTML = "FR";
        t2.innerHTML = "Home";
        t3.innerHTML = "About";
        t4.innerHTML = "Price";
    }
}

function french_contact(){
    // Nav bar
    var t1 = document.getElementById("lang");
    var t2 = document.getElementById("home");
    var t3 = document.getElementById("about");
    var t4 = document.getElementById("price");
    var t5 = document.getElementById("review1");
    // Only need to check if the button has changed
    if (t1.innerHTML == "FR") {
        t1.innerHTML = "EN";
        t2.innerHTML = "Page d'accueil";
        t3.innerHTML = "À Propos";
        t4.innerHTML = "Les Prix";
        t5.innerHTML = "Micheal aime le fait qu'il sache que ses animaux de compagnie sont en sécurité avec Electra pet care";
    }
    else {
        t1.innerHTML = "FR";
        t2.innerHTML = "Home";
        t3.innerHTML = "About";
        t4.innerHTML = "Price";
        t5.innerHTML = "Micheal loves the fact that he knows his pets are safe with Electra pet care";
    }
}
// Splitting these up into each page
const lang = document.getElementById("lang");
lang.addEventListener("click", french);

const lang_pricing = document.getElementById("lang");
lang_pricing.addEventListener("click", french_pricing);

const lang_about = document.getElementById("lang");
lang_about.addEventListener("click", french_about);

const lang_solutions = document.getElementById("lang");
lang_solutions.addEventListener("click", french_solutions);

const lang_contact = document.getElementById("lang");
lang_contact.addEventListener("click", french_contact);
