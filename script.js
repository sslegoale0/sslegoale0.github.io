// 1. Select all sections and all nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// 2. Configure the observer options
const observerOptions = {
  root: null, // uses the viewport
  rootMargin: '0px',
  threshold: 0.5 // triggers when 50% of the section is visible
};

// 3. Create the observer logic
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Check if the section has entered the viewport threshold
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      
      // Remove 'active' from all links
      navLinks.forEach(link => link.classList.remove('active-link'));
      
      // Add 'active' to the link matching the visible section's ID
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active-link');
      }
    }
  });
}, observerOptions);

// 4. Attach the observer to each section
sections.forEach(section => observer.observe(section));

var tablinks = document.getElementsByClassName("tab-link");

var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-tab");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-contents");
    }

    event.currentTarget.classList.add("active-tab");

    document.getElementById(tabname).classList.add("active-contents");
};

const button = document.getElementById('form-submit');

// Toggle the 'clicked' class every time the button is pressed
button.addEventListener('click', () => {
  button.classList.toggle('clicked');
});

var sidemenu = document.getElementById("navbar");

function openmenu(){
    sidemenu.style.left = "0";
}

function closemenu(){
    sidemenu.style.left = "-200px";
}