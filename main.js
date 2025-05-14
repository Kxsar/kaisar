
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      
      // Change the menu icon
      const menuIcon = document.getElementById('menuIcon');
      if (!mobileMenu.classList.contains('hidden')) {
        menuIcon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      } else {
        menuIcon.innerHTML = `
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      }
    });
  }
  
  // Set current year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Load categories
  const categoriesContainer = document.getElementById('categories-container');
  if (categoriesContainer) {
    loadCategories(categoriesContainer);
  }
  
  // Load features
  const featuresContainer = document.getElementById('features-container');
  if (featuresContainer) {
    loadFeatures(featuresContainer);
  }
});

function loadCategories(container) {
  const categories = [
    {
      id: 1,
      name: "Education",
      icon: "book-open",
      color: "bg-kahoot-blue",
      count: 2458,
    },
    {
      id: 2,
      name: "Programming",
      icon: "code",
      color: "bg-quiz-primary",
      count: 1245,
    },
    {
      id: 3,
      name: "Geography",
      icon: "globe",
      color: "bg-kahoot-purple",
      count: 876,
    },
    {
      id: 4,
      name: "Mathematics",
      icon: "calculator",
      color: "bg-kahoot-pink",
      count: 1023,
    },
    {
      id: 5,
      name: "Science",
      icon: "flask",
      color: "bg-kahoot-yellow",
      count: 1589,
    },
    {
      id: 6,
      name: "Music",
      icon: "music",
      color: "bg-quiz-accent",
      count: 742,
    },
    {
      id: 7,
      name: "Gaming",
      icon: "gamepad",
      color: "bg-kahoot-red",
      count: 653,
    },
    {
      id: 8,
      name: "Business",
      icon: "briefcase",
      color: "bg-quiz-primary",
      count: 895,
    },
  ];
  
  let categoriesHTML = '';
  
  categories.forEach(category => {
    categoriesHTML += `
      <a 
        href="category/${category.id}.html"
        class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center border border-gray-100 hover:border-gray-200"
      >
        <div class="${category.color} text-white p-4 rounded-full mb-4">
          ${getIconSVG(category.icon)}
        </div>
        <h3 class="font-semibold text-quiz-dark mb-1">${category.name}</h3>
        <p class="text-sm text-gray-500">${category.count} quizzes</p>
      </a>
    `;
  });
  
  container.innerHTML = categoriesHTML;
}

function loadFeatures(container) {
  const features = [
    {
      icon: "check-circle",
      title: "Easy to Create",
      description: "Build beautiful quizzes with our intuitive editor - no technical skills required.",
      color: "bg-kahoot-purple",
    },
    {
      icon: "clock",
      title: "Real-time Engagement",
      description: "Interactive quizzes with timers, points, and instant feedback for maximum engagement.",
      color: "bg-kahoot-yellow",
    },
    {
      icon: "award",
      title: "Leaderboards",
      description: "Motivate participants with real-time rankings and competitive leaderboards.",
      color: "bg-kahoot-blue",
    },
    {
      icon: "sparkles",
      title: "Multiple Question Types",
      description: "Create diverse quizzes with multiple choice, true/false, polls, and more.",
      color: "bg-quiz-primary",
    },
    {
      icon: "bar-chart-2",
      title: "Detailed Analytics",
      description: "Gain insights with comprehensive reports on participation and performance.",
      color: "bg-quiz-accent",
    },
    {
      icon: "users",
      title: "Multiplayer Experience",
      description: "Support for unlimited participants joining via smartphone, tablet, or computer.",
      color: "bg-kahoot-red",
    },
  ];
  
  let featuresHTML = '';
  
  features.forEach(feature => {
    featuresHTML += `
      <div class="bg-white p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
        <div class="${feature.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
          ${getIconSVG(feature.icon)}
        </div>
        <h3 class="text-xl font-semibold text-quiz-dark mb-2">${feature.title}</h3>
        <p class="text-gray-600">${feature.description}</p>
      </div>
    `;
  });
  
  container.innerHTML = featuresHTML;
}

function getIconSVG(iconName) {
  const icons = {
    'book-open': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    'code': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    'globe': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    'calculator': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="8" y2="10"></line><line x1="12" y1="10" x2="12" y2="10"></line><line x1="16" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="8" y2="14"></line><line x1="12" y1="14" x2="12" y2="14"></line><line x1="16" y1="14" x2="16" y2="14"></line><line x1="8" y1="18" x2="8" y2="18"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="16" y1="18" x2="16" y2="18"></line></svg>',
    'flask': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v4l5 7.6-2.8 3.7a7 7 0 0 1-5.6 2.7H9.8a7 7 0 0 1-5.6-2.7L1.3 14.6 6.1 7H6V3z"></path><path d="M9.8 17h4.4a2 2 0 0 0 1.6-.8l.6-.8-2.3-3.5a2 2 0 0 0-1.6-.9H9.5a2 2 0 0 0-1.6.9L5.7 15.4l.5.8a2 2 0 0 0 1.6.8z"></path></svg>',
    'music': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
    'gamepad': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><circle cx="15" cy="13" r="1"></circle><circle cx="18" cy="11" r="1"></circle><rect x="2" y="6" width="20" height="12" rx="2"></rect></svg>',
    'briefcase': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    'clock': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    'award': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
    'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.2 1.2L3 12l5.9 1.9a2 2 0 0 1 1.2 1.2L12 21l1.9-5.9a2 2 0 0 1 1.2-1.2L21 12l-5.9-1.9a2 2 0 0 1-1.2-1.2L12 3Z"></path></svg>',
    'bar-chart-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    'users': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'
  };
  
  return icons[iconName] || '';
}
