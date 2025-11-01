// script.js - starter script

//Progress bar
document.addEventListener("DOMContentLoaded" , function(){
     
    const skillBar = document.querySelectorAll('.progress-bar');
    const options = {
          threshold : 0.4
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =>{
               if(entry,isIntersecting){
                const value = entry.target.getAttribute('data-skill');
                entry.target.style.width = value + '%';
               }
        });
    } , options);


    skillBar.forEach(bar =>{
        observer.observe(bar);
    });
});
