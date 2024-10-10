// Initialize 

const beniImg = document.querySelector('.imgbenefit')
const heroSection = document.querySelector('.heroSection')
const imgWhywe = document.querySelector('.imgWhywe')
const textWhywe = document.querySelector('.textWhywe')
const textbenefit = document.querySelector('.textbenefit')




const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is visible according to the threshold
        entry.target.classList.add('visible');
      } else {
        // Element is not visible according to the threshold
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // Trigger callback when 50% of the element is visible
  });
  

    observer.observe(beniImg);
    observer.observe(heroSection);
    observer.observe(imgWhywe);
    observer.observe(textWhywe);
    observer.observe(textbenefit);
  ;
  

 
