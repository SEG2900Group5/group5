function validateForm(form) {
    // let x = document.forms["contactForm"]["umail"]
    // let y = document.forms["contactForm"]["message"]
    let x = form.contactForm.umail
    let y = form.contactForm.message
    if (x == "") {
        alert("Email must be filled out")
        return false;
    } 
    if (y == "") {
        alert("You must enter a message")
        return false;
    }
    var message = form.message.value    
    location.href = "mailto:electrasolutions@electra.ca"+'&subject='+"Inquiry"+'&body='+message;
}