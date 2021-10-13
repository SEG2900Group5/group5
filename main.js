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
    document.getElementById("lang").addEventListener("click", french);
    document.getElementById("lang").innerHTML = "EN";
}