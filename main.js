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
    var phone = document.getElementById("phone");
    var email = document.getElementById("email_prompt");
    var message = document.getElementById("message_prompt");
    var send = document.getElementById("send_button");
    // Only need to check if the button has changed
    if (t1.innerHTML == "FR") {
        t1.innerHTML = "EN";
        t2.innerHTML = "Page d'accueil";
        t3.innerHTML = "À Propos";
        t4.innerHTML = "Les Prix";
        phone.innerHTML = "Numéro de téléphone";
        email.innerHTML = "Votre Email";
        message.innerHTML = "Votre Message";
        send.innerHTML = "Envoyer";
    }
    else {
        t1.innerHTML = "FR";
        t2.innerHTML = "Home";
        t3.innerHTML = "About";
        t4.innerHTML = "Price";
        phone.innerHTML = "Phone Number";
        email.innerHTML = "Your Email";
        message.innerHTML = "Your Message";
        send.innerHTML = "Submit";
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
