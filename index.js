// Countdown Timer Script
const countdown = () => {
    const eventDate = new Date("December 14, 2024 09:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  
    if (timeLeft < 0) {
      clearInterval(interval);
      document.querySelector(".countdown-timer").innerHTML = "Event Started!";
    }
  };
  
  const interval = setInterval(countdown, 1000);
  



  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const cards = document.querySelectorAll("#card2");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
      
        filterButtons.forEach((btn) => btn.classList.remove("active"));
       
        button.classList.add("active");
  
        const category = button.textContent.toLowerCase();
  
   
        cards.forEach((card) => {
          const cardCategory = card.querySelector(".category").textContent.toLowerCase();
  
          if (category === "all" || cardCategory === category) {
          
            card.style.display = "block";
            card.style.opacity = "0";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 400); 
          } else {
            
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            setTimeout(() => {
              card.style.display = "none";
            }, 200); 
          }
        });
      });
    });
  });




  const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});