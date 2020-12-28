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

  // const announceDeliveryCosts = (location, amount) => {

  //   if (location === "USA"){
  //     console.log(`Yours shipping will be ${amount} USD`)
  //   }else{
  //     console.log(`Yours shipping will be ${amount} EUR`)
  //   }
  // }

  // const finalizeDeliveryInfo = (location, amount) => {

  //   if (location === "USA" || location === "EU"){
  //     announceDeliveryCosts(location, amount)
      
  //   }else{
  //     console.log(`sorry, we don't deliver to ${location}`)
  //   }
  // }

  // finalizeDeliveryInfo("USA", 200);

  //MODAL

  // const btns = document.querySelectorAll(".btn");

  // const modal = document.querySelector(".modal");

  // const close = document.querySelector(".close");
  // const modalConcertInfo = document.querySelector(".concert-details")

  // const showConcertInfo = (event) => {

  //   // console.log(event);
    
  //   const contentToBeDisplayed = event.target.previousElementSibling.innerHTML;

  //   modalConcertInfo.innerHTML = contentToBeDisplayed;
  // }

  // btns.forEach((btn) => {

  //   btn.addEventListener("click", (event) => {

  //     event.preventDefault();
  //     modal.classList.add("modal-show");

  //     showConcertInfo(event);
  //   })
  // })

  // close.addEventListener("click", () => {
  //   modal.classList.remove("modal-show");

  // })

