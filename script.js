document.addEventListener('DOMContentLoaded', function() {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            
            nav.classList.toggle('nav-active');

            
            navLinks.forEach((link, index) => {
                link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            });

            
            burger.classList.toggle('toggle');
        });
    }

    navSlide();
});



const getUserSelectedText = () => {
    return window.getSelection().toString();
}


const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});


let mybutton = document.getElementById("Button_Top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


