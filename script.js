// const toggleButton = document.getElementsByClassName('toggle-button')[0]
//   const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//   toggleButton.addEventListener('click', () => {
//       navbarLinks.classList.toggle('active')
//   })

  mybutton = document.getElementById("myBtn");
      
      window.onscroll = function() {scrollFunction()};
    
      function scrollFunction(){
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


    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links')
    
      const navLinks = document.querySelectorAll('.nav-links li');
    
      burger.addEventListener('click', ()=>{
    
        //Toggle Nav
        nav.classList.toggle('nav-active');
    
    
         //Animate links
        navLinks.forEach((link, index) =>{
    
          if(link.style.animation){
            link.style.animation = ''
          }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.1}s`;
          }
            
      
            
        });
        //Burger Animation
    
        burger.classList.toggle('toggle');
      });
    
     
    
      
    }
    
    navSlide();
