const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.burger');
const primaryNav = document.querySelector('.primary-navigation');
// const navSlide = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-list li');
const buttons = document.querySelectorAll('.button');



navToggle.addEventListener("click", () => {
  
    // Navbar Visibilty Toggle 
    if(primaryNav.hasAttribute('data-visible')) {
        navToggle.setAttribute("aria-expanded", false);
    }
    else{
        navToggle.setAttribute("aria-expanded", true);
    }
    primaryNav.toggleAttribute("data-visible");

    // Hamburger Menu Toggle 
    navToggle.classList.toggle('toggle');

    // Mobile Navbar Background Gradient Toggle 
    primaryHeader.toggleAttribute('data-ovelay');

    // NavBar Sliding Animation Toggle 
    if(primaryNav.style.animation) {
        primaryNav.style.animation = ``;
    }
    else{
        primaryNav.style.animation = `navDrop 1s ease forwards`;
    }

    // NavBar List Element Animation 
    navLink.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ``;
        } 
        else{
          link.style.animation = `navSlide  0.8s ease forwards ${
            index / 5 + 0.2
          }s`;
        }
      });
});

  // Buttons Ripples Effects Here 

  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
  
      let ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      this.appendChild(ripples);
  
      setTimeout(() => {
        ripples.remove()
      }, 10000);
    });

  });


  // For the Slider
  const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    arrows: false,
    autoplay: false,
    centerMode: true,
    responsive: {
    
      480: {
        dots: false, // dots enabled 480px and up.
        autoplay: true
      }
    }
  });


 




  
