
  // Function to format numbers (e.g., 5000 → 5k)
  function formatNumber(number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(0) + 'k';
    }
    return number;
  }

  // Function to animate counters
  function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // Animation speed (lower is faster)

    counters.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const increment = target / speed;

      const updateCounter = () => {
        const count = +counter.innerText.replace('k', '') * 1000 || +counter.innerText; // Handle 'k' values
        if (count < target) {
          counter.innerText = formatNumber(Math.ceil(count + increment));
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = formatNumber(target);
        }
      };

      updateCounter();
    });
  }

  // Function to check if the counter section is in view
  function isCounterSectionInView() {
    const counterSection = document.querySelector('.counter-section');
    const rect = counterSection.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Trigger counter animation when the section is in view
  window.addEventListener('scroll', () => {
    if (isCounterSectionInView()) {
      animateCounters();
      window.removeEventListener('scroll', animateCounters); // Stop listening after animation
    }
  });





  const text = document.querySelector(".text");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
    )
    .join("");



    const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}