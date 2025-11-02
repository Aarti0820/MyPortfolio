document.getElementById("contactForm").addEventListener("submit" , function(e) {

   e.preventDefault();

   //get values
   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();


   const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
     const messageError = document.getElementById("messageError");
      const successMsg = document.getElementById("successMsg");


      //reset message
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      successMsg.textContent = "";

    let isValid = true;


     //name validation
     if(name === "") {
            nameError.textContent = "please enter your name";
            isValid = false;
     }else if (name.lenght <= 3){
        nameError.textContent = "Name must be at least 3 charcters.";
        isValid = false;
     }


     //email validation
     const emailPattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/;
     if(email === ""){
        emailError.textContent = "please enter your email";
        isValid = false;
     }else if(!email.match(emailPattern)){
        emailError.textContent = "Enter valid email address";
        isValid = false;
     }

     //message validation
     if(message === ""){
        messageError.textContent = "please write a message";
        isValid = false;
     }

     //if all valid
  
     if(isValid){
        successMsg.textContent= "Message sent successfully";
        document.getElementById("contactForm").reset();
     }

});