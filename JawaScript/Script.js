const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");

hamburger .addEventListener("click",()=>{
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click",()=>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
 
}))
AOS.init({
     disable:'mobile',
});


// script for scroll to top button 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// script for Load more button for  show all projects.

$(".image-card").slice(0,3).show();

$(".load_More").on("click",function(){
  $(".image-card:hidden").show();
  $(".load_More").hide();
})