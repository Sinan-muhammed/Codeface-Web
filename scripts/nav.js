
  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }




  

  function updateButtonVisibility() {
    const scrollLeft = caseStudiesContainer.scrollLeft;
    const maxScroll = caseStudiesContainer.scrollWidth - caseStudiesContainer.clientWidth;
  
    scrollLeftButton.style.visibility = scrollLeft > 0 ? 'visible' : 'hidden';
    scrollRightButton.style.visibility = scrollLeft < maxScroll ? 'visible' : 'hidden';
  }
  
  caseStudiesContainer.addEventListener('scroll', updateButtonVisibility);
  updateButtonVisibility(); // Initial check

  gsap.utils.toArray('.stb_line_single').forEach((line, i) => {
  
    const speed = 200 // (in pixels per second)
    
    const links = line.querySelectorAll("a"),
          tl = verticalLoop(links, i ? -speed : speed)
      
    links.forEach(link => {
      link.addEventListener("mouseenter", () => gsap.to(tl, {timeScale: 0, overwrite: true}));
      link.addEventListener("mouseleave", () => gsap.to(tl, {timeScale: 1, overwrite: true}));
    });
    
  });
  
  
  
  
  