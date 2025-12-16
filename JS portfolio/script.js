const btn = document.querySelector('.hamburger');
btn.addEventListener("click", () =>{
   const nav = document.querySelector('#navLinks');
   nav.classList.toggle('open');
})

const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optional: toggle icon between moon and sun
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});

document.body.classList.add('fade');
setTimeout(() => {
  document.body.classList.remove('fade');
}, 1000);

carts = [
  {
    title: "Product Filter App",
    desc: "A dynamic web app that lets users filter and sort products by category, price, and rating.",
    info: "Tech Stack:</strong> HTML, CSS, JavaScript",
    link: "#",
    img: "./a light-themed abstr.png"
  },
  {
    title: "Dark Mode Portfolio",
    desc: "A responsive portfolio site with smooth dark mode transitions and animated UI elements.",
    info: "Tech Stack:</strong> HTML, CSS, JavaScript",
    link: "#",
    img: "./a light-themed abstr.png"
  },
  {
    title: "Product Filter App",
    desc: "A dynamic web app that lets users filter and sort products by category, price, and rating.",
    info: "Tech Stack:</strong> HTML, CSS, JavaScript",
    link: "#",
    img: "./a light-themed abstr.png"
  },
]
const cart = document.querySelector('.project-card');
for (let i = 0; i < carts.length; i++) {
  const project = carts[i];
  const projectCard = document.createElement('div');
  projectCard.classList.add('project');


  projectCard.innerHTML = `
    <img src="${project.img}">
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <p>${project.info}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `

  ;

  cart.appendChild(projectCard);
}


// team section start

const teamMembers = [
  {
    name: "Amina",
    role: "Designer",
    linkedin: "#",
    twitter: "#",
    github: "#",
    img: "./img/cheerful-curly-business-girl-wearing-glasses.jpg"
  },
  {
    name: "Zubair",
    role: "Developer",
    linkedin: "#",
    twitter: "#",
    github: "#",
    img: "./img/handsome-bearded-guy-posing-against-white-wall.jpg"
  },
  {
    name: "Mohammad",
    role: "UI/UX Designer",
    linkedin: "#",
    twitter: "#",
    github: "https://github.com/sahil001100",
    img: "./img/zia.jpg"
  }
];

const teamSection = document.getElementById('team-section');

teamMembers.forEach(member => {
  const card = document.createElement('div');
  card.className = 'glass-box';
  card.innerHTML = `
    <img src="${member.img}">
    <h3>${member.name}</h3>
    <p>${member.role}</p>
    <div class="social-icons">
      <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="${member.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>
    </div>
  `;
  teamSection.appendChild(card);
});

const cards = document.querySelectorAll('.glass-box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: animate only once
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});




//team section end


// form handling and form validation start

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  // Simple email regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
    return;
  }

  if (!email.match(emailPattern)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    return;
  }

  // Simulate form submission
  formMessage.textContent = 'Message sent successfully!';
  formMessage.style.color = 'green';

  // Optionally reset form
  this.reset();
});

// form handling and form validation end

// about section start

const aboutSection = document.getElementById('about');

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 40 },
  { name: "React", level: 10 },
  { name: "Node", level:0},
  { name: "python", level:15},

];

skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'skill';
  skillDiv.innerHTML = `
    <span>${skill.name}</span>
    <div class="progress-bar">
      <div class="progress" data-value="${skill.level}"></div>
    </div>
  `;
  
  aboutSection.appendChild(skillDiv);
});

// progress bar animation
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-value");
    bar.style.width = value + "%";
  });
});


// about section end