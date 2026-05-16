var contactForm = document.querySelector(".contact-form");
if (contactForm){
    contactForm.onsubmit = function(event){
        event.preventDefault();
    
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var message = document.getElementById("message").value;

var formMessage = document.getElementById("form-message");

if (name == "" ||email == ""|| phone == "" || message == "" ) {
    formMessage.textContent = "Please fill all the required fields!";
    formMessage.style.color = "red";
}
else {
 formMessage.textContent = "Thank You! Your message has been sent successfully!";
     formMessage.style.color = "green";

     contactForm.reset();

}
};
}

var hero = document.querySelector(".hero");
var currentHour = new Date().getHours();

if (hero){
    if (currentHour < 12) {
        hero.textContent = "Good Morning! Explorer";
    }
    else if (currentHour < 18) {
        hero.textContent = "Good Afternoon! Explorer";
    }
    else {
        hero.textContent = "Good Evening! Explorer";
    }
}