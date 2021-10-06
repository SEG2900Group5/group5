function validateForm() {
    let x = document.forms["contactForm"]["umail"]
    let y = document.forms["contactForm"]["message"]
    if (x == "") {
        alert("Email must be filled out")
        return false;
    } 
    if (y == "") {
        alert("You must enter a message")
        return false;
    }
    location.href = "mailto:"+"electrasolutions@electra.ca"+'&subject='+"Inquiry"+'&body='+y;
}