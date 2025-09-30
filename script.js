// Language switcher functionality
(function() {
  const langToggle = document.getElementById('langToggle');
  const elementsWithLang = document.querySelectorAll('[data-en][data-te]');

  // Get saved language preference or default to 'en'
  let currentLang = localStorage.getItem('language') || 'en';

  // Apply saved language on page load
  if (currentLang === 'te') {
    switchToTelugu();
  }

  // Toggle language on button click
  langToggle.addEventListener('click', function() {
    if (currentLang === 'en') {
      switchToTelugu();
    } else {
      switchToEnglish();
    }
  });

  function switchToTelugu() {
    currentLang = 'te';
    localStorage.setItem('language', 'te');

    elementsWithLang.forEach(function(element) {
      element.textContent = element.getAttribute('data-te');
    });

    langToggle.querySelector('.lang-toggle__text').textContent = 'English';
    document.documentElement.setAttribute('lang', 'te');
  }

  function switchToEnglish() {
    currentLang = 'en';
    localStorage.setItem('language', 'en');

    elementsWithLang.forEach(function(element) {
      element.textContent = element.getAttribute('data-en');
    });

    langToggle.querySelector('.lang-toggle__text').textContent = 'తెలుగు';
    document.documentElement.setAttribute('lang', 'en');
  }
})();