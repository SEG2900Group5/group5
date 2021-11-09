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
    var t5 = document.getElementById("heading")
    var t6 = document.getElementById("found");
    var t7 = document.getElementById("heading2");
    var t8 = document.getElementById("team");
    var t9 = document.getElementById("heading3");
    var t10 = document.getElementById("goal");
    var t11 = document.getElementById("top")
    // Only need to check if the button has changed
    if (t1.innerHTML == "FR") {
        t1.innerHTML = "EN";
        t2.innerHTML = "Page d'accueil";
        t3.innerHTML = "À Propos";
        t4.innerHTML = "Les Prix";
        t5.innerHTML = "Fondateur";
        t6.innerHTML = "Electra a été cofondée par un petit groupe d'étudiants ambitieux de première année fréquentant l'Université d'Ottawa en septembre 2021. L'équipe s'est rencontrée dans le cadre de leur projet de groupe dans leur classe de génie logiciel, le projet étant de créer une idée originale de produit à promouvoir via un site Web. Leur concept initial pour leur produit était un coordinateur de tenue numérique, mais leurs idées ultérieures ont conduit à la création de leur produit révolutionnaire, le (insérer le nom du système de maison intelligente ici), la technologie la plus révolutionnaire dans l'industrie de la maison intelligente.";
        t7.innerHTML = "Notre équipe";
        t8.innerHTML = "Chez Electra, nous comprenons que nos clients veulent la meilleure expérience de maison intelligente sur le marché. C'est pourquoi notre équipe d'ingénieurs experts repousse constamment les limites de la technologie de la maison intelligente.";
        t9.innerHTML = "Notre Objectif";
        t10.innerHTML = "Chez Electra, notre objectif est de révolutionner l'industrie de la maison intelligente. L'Internet des objets a déjà commencé à améliorer l'infrastructure de notre vie quotidienne. Cependant, Electra vise à changer le jeu pour toujours, en créant un produit avec des fonctionnalités allant d'un coordinateur de tenue à la sécurité à domicile, toutes accessibles à partir d'un emplacement pratique.";
        t11.innerHTML = "À propos";
    }
    else {
        t1.innerHTML = "FR";
        t2.innerHTML = "Home";
        t3.innerHTML = "About";
        t4.innerHTML = "Price";
        t5.innerHTML = "Founding";
        t6.innerHTML = "Electra was co-founded by a small group of ambitious first year students attending the University of Ottawa in September of 2021. The team met through their group project in their software engineering class, with the project being to create an original idea for a product to promote through a website. Their initial concept for their product was a digital outfit coordinator, however their later ideas led to the creation of their breakthrough product, the (insert name of smart home system here), the most game changing technology in the smart home industry.";
        t7.innerHTML = "Our Team";
        t8.innerHTML = "Here at Electra, we understand that our customers want the best smart home experience in the market. That is why our team of expert engineers are constantly pushing the boundaries of smart home technology.";
        t9.innerHTML = "Our Goal";
        t10.innerHTML = "Our goal here at Electra is to revolutionize the smart home industry. The internet of things has already begun improving the infrastructure of our day to day life. However, Electra aims to change the game forever, by creating a product with features from an outfit coordinator to home security, all accessed from one convienient location.";
        t11.innerHTML = "About";
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
    var review_1 = document.getElementById("review1");
    var review_2 = document.getElementById("review2");
    var review_3 = document.getElementById("review3");
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
        review_1.innerHTML = "Micheal aime le fait qu'il sait animaux de compagnie sont en sécurité avec Electra pet care";
        review_2.innerHTML = "Ruth de Ottawa, Ontario se sent confiant chaque jour sanchant qu'elle est en securité avec Electra home security";
        review_3.innerHTML = "Sarah sais que si elle a des problèmes, elle peut utiliser laèpplication Electra pour l'aider";
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
        t5.innerHTML = "Micheal loves the fact that he knows his pets are safe with Electra's pet care.";
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
