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

function french() {
    // get all html elements by id and change them to the proper french translation
    // I should add the ability to go back to english when the button is clicked again
    document.getElementById("lang").addEventListener("click", french);
    document.getElementById("lang").innerHTML = "EN";
    document.getElementById("welcome").innerHTML = "Bienvenue dans notre projet";
}