
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