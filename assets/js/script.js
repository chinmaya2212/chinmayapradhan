'use strict';

/* ============================================
   PORTFOLIO & BLOG DATA
   ============================================ */

const portfolioData = [
  {
    id: 1,
    title: 'AptPlan (Business Planning & Forecasting)',
    category: 'ai-ml',
    image: './assets/images/project-1.jpg',
    description: 'Designed for financial experts to improve sales and demand predictions using seasonal trends and regional variations.',
    technologies: ['Machine Learning', 'Python', 'Forecasting']
  },
  {
    id: 2,
    title: 'AptChat (AI-Enhanced Support Chatbot)',
    category: 'ai-ml',
    image: './assets/images/project-2.png',
    description: 'AI-driven support chatbot using Generative and Agentic AI principles with a scalable microservices architecture.',
    technologies: ['Generative AI', 'Agentic AI', 'Microservices']
  },
  {
    id: 3,
    title: 'Cloud Native Microservices Architecture',
    category: 'cloud',
    image: './assets/images/project-3.jpg',
    description: 'Designing and deploying scalable cloud-native applications and microservices for enterprise solutions.',
    technologies: ['AWS/Azure', 'Docker', 'Kubernetes']
  },
  {
    id: 4,
    title: 'End-to-End MLOps Pipeline',
    category: 'devops',
    image: './assets/images/project-4.png',
    description: 'Implementing automated CI/CD pipelines for machine learning model training, testing, and deployment.',
    technologies: ['MLOps', 'CI/CD', 'Python']
  },
  {
    id: 5,
    title: 'Deep Learning Image Classifier',
    category: 'ai-ml',
    image: './assets/images/project-5.png',
    description: 'Developed CNN-based image classification model for medical imaging diagnosis.',
    technologies: ['PyTorch', 'OpenCV', 'Deep Learning']
  },
  {
    id: 6,
    title: 'Serverless Data Processing',
    category: 'cloud',
    image: './assets/images/project-6.png',
    description: 'Architecting serverless data pipelines using AWS Lambda and Kinesis for real-time analytics.',
    technologies: ['AWS Lambda', 'Kinesis', 'Serverless']
  },
  {
    id: 7,
    title: 'Kubernetes Cluster Management',
    category: 'devops',
    image: './assets/images/project-7.png',
    description: 'Managing multi-node Kubernetes clusters with automated scaling and health monitoring.',
    technologies: ['Kubernetes', 'Helm', 'Prometheus']
  },
  {
    id: 8,
    title: 'NLP Sediment Analysis',
    category: 'ai-ml',
    image: './assets/images/project-8.jpg',
    description: 'Built an NLP model to analyze customer feedback and sentiment from social media streams.',
    technologies: ['NLP', 'BERT', 'TensorFlow']
  },
  {
    id: 9,
    title: 'Hybrid Cloud Migration',
    category: 'cloud',
    image: './assets/images/project-9.png',
    description: 'Successfully migrated on-premise infrastructure to a secure hybrid cloud environment.',
    technologies: ['Azure', 'Hybrid Cloud', 'Networking']
  },
  {
    id: 10,
    title: 'Infrastructure as Code Framework',
    category: 'devops',
    image: './assets/images/project-1.jpg',
    description: 'Developed a reusable IaC framework using Terraform for rapid environment provisioning.',
    technologies: ['Terraform', 'AWS', 'Automation']
  },
  {
    id: 11,
    title: 'Predictive Maintenance System',
    category: 'ai-ml',
    image: './assets/images/project-2.png',
    description: 'IoT-based predictive maintenance solution for manufacturing equipment using sensor data.',
    technologies: ['IoT', 'Machine Learning', 'Edge Computing']
  },
  {
    id: 12,
    title: 'Secure API Gateway',
    category: 'cloud',
    image: './assets/images/project-3.jpg',
    description: 'Implemented a high-performance API Gateway with advanced security policies and rate limiting.',
    technologies: ['API Gateway', 'OAuth2', 'Security']
  },
  {
    id: 13,
    title: 'Container Security Scanning',
    category: 'devops',
    image: './assets/images/project-4.png',
    description: 'Integrated automated security scanning for container images in the CI/CD pipeline.',
    technologies: ['Docker', 'Trivy', 'Security']
  },
  {
    id: 14,
    title: 'Recommendation System V2',
    category: 'ai-ml',
    image: './assets/images/project-5.png',
    description: 'Advanced collaborative filtering recommendation engine for e-commerce platforms.',
    technologies: ['Python', 'Scikit-learn', 'Redis']
  }
];

const blogData = [
  {
    id: 1,
    title: 'Getting Started with Machine Learning in 2025',
    category: 'ai-ml',
    cover: './assets/images/blog-1.jpg',
    excerpt: 'A comprehensive guide to starting your machine learning journey with practical examples.',
    date: '2025-01-15',
    readTime: 8
  },
  {
    id: 2,
    title: 'Cloud Cost Optimization Strategies',
    category: 'cloud',
    cover: './assets/images/blog-2.jpg',
    excerpt: 'Discover proven strategies to reduce your cloud infrastructure costs without sacrificing performance.',
    date: '2025-01-10',
    readTime: 6
  },
  {
    id: 3,
    title: 'DevOps Best Practices for 2025',
    category: 'devops',
    cover: './assets/images/blog-3.jpg',
    excerpt: 'Learn the latest DevOps practices and tools that are shaping the industry.',
    date: '2025-01-05',
    readTime: 7
  },
  {
    id: 4,
    title: 'Deep Learning: From Theory to Practice',
    category: 'ai-ml',
    cover: './assets/images/blog-4.jpg',
    excerpt: 'Explore practical deep learning applications and how to implement them effectively.',
    date: '2024-12-28',
    readTime: 10
  },
  {
    id: 5,
    title: 'Kubernetes in Production: Lessons Learned',
    category: 'cloud',
    cover: './assets/images/blog-5.jpg',
    excerpt: 'Real-world insights from managing Kubernetes clusters in production environments.',
    date: '2024-12-20',
    readTime: 9
  },
  {
    id: 6,
    title: 'Automating Infrastructure with Terraform',
    category: 'devops',
    cover: './assets/images/blog-6.jpg',
    excerpt: 'Master Infrastructure as Code and automate your cloud deployments effectively.',
    date: '2024-12-15',
    readTime: 8
  },
  {
    id: 7,
    title: 'The Future of Generative AI',
    category: 'ai-ml',
    cover: './assets/images/blog-1.jpg',
    excerpt: 'Analyzing the trends and future impact of Generative AI on software development.',
    date: '2024-12-10',
    readTime: 12
  },
  {
    id: 8,
    title: 'Securing Cloud Native Applications',
    category: 'cloud',
    cover: './assets/images/blog-2.jpg',
    excerpt: 'Best practices for securing microservices and containerized applications in the cloud.',
    date: '2024-12-05',
    readTime: 7
  },
  {
    id: 9,
    title: 'GitOps: The Modern Way of CD',
    category: 'devops',
    cover: './assets/images/blog-3.jpg',
    excerpt: 'Understanding GitOps principles and how it streamlines continuous delivery.',
    date: '2024-11-28',
    readTime: 6
  },
  {
    id: 10,
    title: 'Building Scalable Data Lakes',
    category: 'cloud',
    cover: './assets/images/blog-4.jpg',
    excerpt: 'Architecture patterns for building robust and scalable data lakes on AWS.',
    date: '2024-11-20',
    readTime: 11
  },
  {
    id: 11,
    title: 'AI in Healthcare: Use Cases',
    category: 'ai-ml',
    cover: './assets/images/blog-5.jpg',
    excerpt: 'Exploring impactful use cases of Artificial Intelligence in the healthcare sector.',
    date: '2024-11-15',
    readTime: 9
  },
  {
    id: 12,
    title: 'Zero Trust Architecture Explained',
    category: 'cloud',
    cover: './assets/images/blog-6.jpg',
    excerpt: 'A deep dive into the Zero Trust security model and its implementation.',
    date: '2024-11-10',
    readTime: 8
  },
  {
    id: 13,
    title: 'Monitoring Microservices with Prometheus',
    category: 'devops',
    cover: './assets/images/blog-1.jpg',
    excerpt: 'Setting up effective monitoring and alerting for microservices using Prometheus.',
    date: '2024-11-01',
    readTime: 10
  }
];

/* ============================================
   THEME TOGGLE
   ============================================ */

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

/* ============================================
   NAVIGATION
   ============================================ */

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');

    // Update active state
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

/* ============================================
   ANIMATION ON SCROLL
   ============================================ */

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

/* ============================================
   PORTFOLIO SECTION
   ============================================ */

const portfolioGrid = document.getElementById('portfolioGrid');
const portfolioSearch = document.getElementById('portfolioSearch');
const portfolioFilter = document.getElementById('portfolioFilter');
const portfolioViewMoreBtn = document.getElementById('portfolioViewMore');

let displayedPortfolioCount = 6;
let filteredPortfolioItems = [];

function renderPortfolioItems(items) {
  portfolioGrid.innerHTML = '';
  const itemsToShow = items.slice(0, displayedPortfolioCount);

  itemsToShow.forEach(item => {
    const html = `
      <div class="portfolio-item" data-category="${item.category}">
        <img src="${item.image}" alt="${item.title}" class="portfolio-image">
        <div class="portfolio-content">
          <span class="portfolio-tag">${item.category.replace('-', ' ')}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="portfolio-tech">
            ${item.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    portfolioGrid.innerHTML += html;
  });

  // Re-observe new items for animation
  document.querySelectorAll('.portfolio-item').forEach(el => {
    observer.observe(el);
  });

  // Toggle View More Button
  if (displayedPortfolioCount >= items.length) {
    portfolioViewMoreBtn.style.display = 'none';
  } else {
    portfolioViewMoreBtn.style.display = 'block';
  }
}

function filterPortfolioItems() {
  const searchTerm = portfolioSearch.value.toLowerCase();
  const filterValue = portfolioFilter.value;

  filteredPortfolioItems = portfolioData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.technologies.some(tech => tech.toLowerCase().includes(searchTerm));
    const matchesCategory = filterValue === 'all' || item.category === filterValue;
    return matchesSearch && matchesCategory;
  });

  // Reset count when filtering changes, unless it's just a view more click which calls render directly?
  // Actually, we should reset if the user changes filter/search.
  // But for now, let's keep the logic simple. If filter changes, reset count?
  // The prompt implies "View More" adds more to the current list.
  // We'll reset count on filter change.

  renderPortfolioItems(filteredPortfolioItems);
}

// Reset view count when filter changes
function resetPortfolioView() {
  displayedPortfolioCount = 6;
  filterPortfolioItems();
}

portfolioSearch.addEventListener('input', resetPortfolioView);
portfolioFilter.addEventListener('change', resetPortfolioView);

portfolioViewMoreBtn.addEventListener('click', () => {
  displayedPortfolioCount += 6;
  renderPortfolioItems(filteredPortfolioItems);
});

// Initial render
filteredPortfolioItems = portfolioData; // Initialize
renderPortfolioItems(filteredPortfolioItems);

/* ============================================
   BLOG SECTION
   ============================================ */

const blogGrid = document.getElementById('blogGrid');
const blogSearch = document.getElementById('blogSearch');
const blogFilter = document.getElementById('blogFilter');
const blogViewMoreBtn = document.getElementById('blogViewMore');

let displayedBlogCount = 6;
let filteredBlogItems = [];

function renderBlogItems(items) {
  blogGrid.innerHTML = '';
  const itemsToShow = items.slice(0, displayedBlogCount);

  itemsToShow.forEach(item => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const html = `
      <div class="blog-item" data-category="${item.category}">
        <img src="${item.cover}" alt="${item.title}" class="blog-cover">
        <div class="blog-content">
          <span class="blog-category">${item.category.replace('-', ' ')}</span>
          <h3>${item.title}</h3>
          <p class="blog-excerpt">${item.excerpt}</p>
          <div class="blog-meta">
            <div class="blog-date">
              <ion-icon name="calendar"></ion-icon>
              <span>${formattedDate}</span>
            </div>
            <div class="blog-read-time">
              <ion-icon name="time"></ion-icon>
              <span>${item.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    `;
    blogGrid.innerHTML += html;
  });

  // Re-observe
  document.querySelectorAll('.blog-item').forEach(el => {
    observer.observe(el);
  });

  if (displayedBlogCount >= items.length) {
    blogViewMoreBtn.style.display = 'none';
  } else {
    blogViewMoreBtn.style.display = 'block';
  }
}

function filterBlogItems() {
  const searchTerm = blogSearch.value.toLowerCase();
  const filterValue = blogFilter.value;

  filteredBlogItems = blogData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
      item.excerpt.toLowerCase().includes(searchTerm);
    const matchesCategory = filterValue === 'all' || item.category === filterValue;
    return matchesSearch && matchesCategory;
  });

  renderBlogItems(filteredBlogItems);
}

function resetBlogView() {
  displayedBlogCount = 6;
  filterBlogItems();
}

blogSearch.addEventListener('input', resetBlogView);
blogFilter.addEventListener('change', resetBlogView);

blogViewMoreBtn.addEventListener('click', () => {
  displayedBlogCount += 6;
  renderBlogItems(filteredBlogItems);
});

// Initial render
filteredBlogItems = blogData;
renderBlogItems(filteredBlogItems);

/* ============================================
   CHATBOT WIDGET
   ============================================ */

const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWidget = document.getElementById('chatbotWidget');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

function toggleChatbot() {
  chatbotWidget.classList.toggle('active');
}

chatbotBtn.addEventListener('click', toggleChatbot);
chatbotClose.addEventListener('click', () => {
  chatbotWidget.classList.remove('active');
});

function sendMessage() {
  const message = chatbotInput.value.trim();

  if (message === '') return;

  // Add user message
  const userMessageDiv = document.createElement('div');
  userMessageDiv.className = 'message user-message';
  userMessageDiv.innerHTML = `<p>${message}</p>`;
  chatbotMessages.appendChild(userMessageDiv);

  chatbotInput.value = '';

  // Scroll to bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  // Simulate bot response
  setTimeout(() => {
    const response = getBotResponse(message);

    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot-message';
    botMessageDiv.innerHTML = `<p>${response}</p>`;
    chatbotMessages.appendChild(botMessageDiv);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 600);
}

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();

  // Check if chatKnowledgeBase is defined (from chatData.js)
  if (typeof chatKnowledgeBase !== 'undefined') {
    for (const item of chatKnowledgeBase) {
      if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
        return item.response;
      }
    }
  }

  return "I'm not sure about that. Try asking about Chinmaya's <b>projects</b>, <b>experience</b>, <b>skills</b>, or just say <b>hello</b>!";
}

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Close chatbot when clicking outside
document.addEventListener('click', (e) => {
  if (!chatbotWidget.contains(e.target) && !chatbotBtn.contains(e.target) && chatbotWidget.classList.contains('active')) {
    chatbotWidget.classList.remove('active');
  }
});

/* ============================================
   CONTACT FORM
   ============================================ */

// contact form variables
const form = document.querySelector("[contact-form]");
const formInputs = document.querySelectorAll("[contact-form-input]");
const formBtn = document.querySelector("[contact-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


