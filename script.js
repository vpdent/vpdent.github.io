const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
  })

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