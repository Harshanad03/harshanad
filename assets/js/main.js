/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 14 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  
  // Ensure the button exists and add event listener
  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', headerToggle);
    console.log('Hamburger button found and event listener added');
    
    // Force the button to be visible and clickable on mobile
    if (window.innerWidth <= 1199) {
      headerToggleBtn.style.display = 'flex';
      headerToggleBtn.style.visibility = 'visible';
      headerToggleBtn.style.opacity = '1';
      headerToggleBtn.style.zIndex = '9999999';
      headerToggleBtn.style.pointerEvents = 'auto';
      console.log('Forced hamburger button visibility on mobile');
    }
  } else {
    console.error('Hamburger button not found!');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Ensure hamburger button visibility on resize
   */
  window.addEventListener('resize', () => {
    if (headerToggleBtn) {
      if (window.innerWidth <= 1199) {
        headerToggleBtn.style.display = 'flex';
        headerToggleBtn.style.visibility = 'visible';
        headerToggleBtn.style.opacity = '1';
        headerToggleBtn.style.zIndex = '9999999';
        headerToggleBtn.style.pointerEvents = 'auto';
      } else {
        headerToggleBtn.style.display = 'none';
      }
    }
    
    // Ensure header is visible on desktop
    const header = document.querySelector('#header');
    if (header) {
      if (window.innerWidth >= 1200) {
        header.style.left = '0';
        header.style.visibility = 'visible';
        header.style.opacity = '1';
        header.style.zIndex = '997';
      }
    }
  });

  /**
   * Ensure hamburger button visibility on page load
   */
  window.addEventListener('load', () => {
    if (headerToggleBtn) {
      if (window.innerWidth <= 1199) {
        headerToggleBtn.style.display = 'flex';
        headerToggleBtn.style.visibility = 'visible';
        headerToggleBtn.style.opacity = '1';
        headerToggleBtn.style.zIndex = '9999999';
        headerToggleBtn.style.pointerEvents = 'auto';
        console.log('Hamburger button forced visible on mobile on page load');
      } else {
        headerToggleBtn.style.display = 'none';
      }
    }
    
    // Ensure header is visible on desktop on page load
    const header = document.querySelector('#header');
    if (header) {
      if (window.innerWidth >= 1200) {
        header.style.left = '0';
        header.style.visibility = 'visible';
        header.style.opacity = '1';
        header.style.zIndex = '997';
      }
    }
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Ensure header visibility on desktop on page load
   */
  window.addEventListener('load', () => {
    const header = document.querySelector('#header');
    if (header && window.innerWidth >= 1200) {
      header.style.left = '0';
      header.style.visibility = 'visible';
      header.style.opacity = '1';
      header.style.zIndex = '997';
    }
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }

  /**
   * Super Animations for Landing Page
   */
  
  // Create floating particles
  function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: ${Math.random() > 0.5 ? 'rgba(0, 171, 240, 0.8)' : 'rgba(255, 255, 255, 0.6)'};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        z-index: 3;
        pointer-events: none;
      `;
      hero.appendChild(particle);
    }
  }

  // Add CSS for floating particles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float-particle {
      0% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) translateX(100px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Mouse trail effect
  function createMouseTrail() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailElements = [];

    hero.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create trail element
      const trail = document.createElement('div');
      trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: rgba(0, 171, 240, 0.6);
        border-radius: 50%;
        left: ${mouseX - 3}px;
        top: ${mouseY - 3}px;
        pointer-events: none;
        z-index: 1000;
        animation: trail-fade 0.8s ease-out forwards;
      `;
      
      document.body.appendChild(trail);
      trailElements.push(trail);
      
      // Remove trail elements after animation
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
        trailElements = trailElements.filter(el => el !== trail);
      }, 800);
    });
  }

  // Add CSS for mouse trail
  const trailStyle = document.createElement('style');
  trailStyle.textContent = `
    @keyframes trail-fade {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0.1);
      }
    }
  `;
  document.head.appendChild(trailStyle);

  // Parallax effect for hero elements
  function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      const heroContent = hero.querySelector('.container');
      if (heroContent) {
        heroContent.style.transform = `translateY(${rate}px)`;
      }
    });
  }

  // Interactive hover effects for social links
  function initInteractiveHover() {
    const socialLinks = document.querySelectorAll('.hero-social-link');
    
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          width: 100px;
          height: 100px;
          background: rgba(0, 171, 240, 0.3);
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: ripple-effect 0.6s ease-out;
          pointer-events: none;
        `;
        
        link.style.position = 'relative';
        link.appendChild(ripple);
        
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      });
    });
  }

  // Add CSS for ripple effect
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple-effect {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);

  // Elegant text animation for hero title
  function initTextScramble() {
    const heroTitle = document.querySelector('.hero h2');
    if (!heroTitle) return;

    const originalText = heroTitle.textContent;
    let isAnimating = false;
    
    heroTitle.addEventListener('mouseenter', () => {
      if (isAnimating) return;
      isAnimating = true;
      
      // Store original styles to restore later
      const originalTransform = heroTitle.style.transform;
      const originalTextShadow = heroTitle.style.textShadow;
      
      // Create a subtle wave effect through the letters
      const letters = heroTitle.textContent.split('');
      const letterSpans = letters.map((letter, index) => 
        `<span style="display: inline-block; animation: letter-wave 0.8s ease-in-out ${index * 0.03}s; white-space: nowrap; contain: layout style paint; transform: translateZ(0); backface-visibility: hidden;">${letter}</span>`
      ).join('');
      
      // Preserve the original text content
      heroTitle.setAttribute('data-original-text', originalText);
      heroTitle.innerHTML = letterSpans;
      
      setTimeout(() => {
        // Restore original content and styles
        heroTitle.innerHTML = originalText;
        heroTitle.style.transform = originalTransform;
        heroTitle.style.textShadow = originalTextShadow;
        isAnimating = false;
      }, 1200);
    });
  }

  // Glitch effect for resume button
  function initGlitchEffect() {
    const resumeBtn = document.querySelector('.hero-resume-section .resume1');
    if (!resumeBtn) return;

    resumeBtn.addEventListener('mouseenter', () => {
      resumeBtn.style.animation = 'glitch 0.3s ease-in-out';
    });

    resumeBtn.addEventListener('animationend', () => {
      resumeBtn.style.animation = '';
    });
  }

  // Add CSS for glitch effect and letter wave
  const glitchStyle = document.createElement('style');
  glitchStyle.textContent = `
    @keyframes glitch {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
      100% {
        transform: translate(0);
      }
    }
    
    @keyframes letter-wave {
      0% {
        transform: translateY(0px) translateX(0px) scale(1);
        color: #ffffff;
      }
      25% {
        transform: translateY(-4px) translateX(2px) scale(1.05);
        color: #00abf0;
      }
      50% {
        transform: translateY(-8px) translateX(4px) scale(1.1);
        color: #00abf0;
      }
      75% {
        transform: translateY(-4px) translateX(2px) scale(1.05);
        color: #00abf0;
      }
      100% {
        transform: translateY(0px) translateX(0px) scale(1);
        color: #ffffff;
      }
    }
    
    /* Prevent layout shifts */
    .hero h2 span {
      display: inline-block !important;
      white-space: nowrap !important;
      overflow: hidden;
      vertical-align: top;
      contain: layout style paint;
      transform: translateZ(0);
      backface-visibility: hidden;
    }
  `;
  document.head.appendChild(glitchStyle);

  /**
   * Navbar animations and effects
   */
  function initNavbarAnimations() {
    // Add ripple effect to navbar links
    const navLinks = document.querySelectorAll('.navmenu a');
    
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('nav-ripple');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'color-mix(in srgb, var(--accent-color), transparent 70%)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'navRipple 0.6s linear';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Add floating animation to social links
    const socialLinks = document.querySelectorAll('.header .social-links a');
    socialLinks.forEach((link, index) => {
      link.style.animationDelay = `${index * 0.1}s`;
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1) rotate(5deg)';
      });
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
      });
    });

    // Add glow effect to logo
    const logo = document.querySelector('.header .logo h1');
    if (logo) {
      logo.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 30px color-mix(in srgb, var(--accent-color), transparent 40%), 0 0 60px color-mix(in srgb, var(--accent-color), transparent 60%)';
        this.style.transform = 'scale(1.05)';
      });
      logo.addEventListener('mouseleave', function() {
        this.style.textShadow = '0 0 20px color-mix(in srgb, var(--accent-color), transparent 70%)';
        this.style.transform = 'scale(1)';
      });
    }

    // Note: Particle effect removed to avoid conflicts with main toggle functionality
    // The main headerToggle function should work properly now

    // Add scroll-based navbar effects
    window.addEventListener('scroll', function() {
      const header = document.querySelector('#header');
      const scrolled = window.pageYOffset;
      
      if (scrolled > 100) {
        header.style.boxShadow = '0 0 50px color-mix(in srgb, var(--accent-color), transparent 40%)';
        header.style.borderRight = '2px solid color-mix(in srgb, var(--accent-color), transparent 70%)';
      } else {
        header.style.boxShadow = '0 0 50px color-mix(in srgb, var(--default-color), transparent 95%)';
        header.style.borderRight = '2px solid color-mix(in srgb, var(--default-color), transparent 70%)';
      }
    });
  }

  // Add CSS animations for navbar effects
  function addNavbarCSSAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes navRipple {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      @keyframes particleExplosion {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(1) translate(var(--x, 50px), var(--y, -50px));
          opacity: 0;
        }
      }
      
      .header .social-links a {
        animation: float 3s ease-in-out infinite;
      }
      
      .header .social-links a:nth-child(1) { animation-delay: 0s; }
      .header .social-links a:nth-child(2) { animation-delay: 0.2s; }
      .header .social-links a:nth-child(3) { animation-delay: 0.4s; }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      
      .navmenu a {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .navmenu a:hover {
        transform: translateX(8px) scale(1.02);
      }
      
      .header .logo h1 {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize navbar animations
  window.addEventListener('load', function() {
    setTimeout(() => {
      addNavbarCSSAnimations();
      initNavbarAnimations();
    }, 1000);
  });

  // About Section Animations
  function initAboutAnimations() {
    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
      const target = parseInt(element.textContent);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
      }, 16);
    };

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statItem = entry.target;
          const statNumber = statItem.querySelector('.stat-number');
          if (statNumber) {
            animateCounter(statNumber);
          }
          statsObserver.unobserve(statItem);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(item => {
      statsObserver.observe(item);
    });

    // Hover effects for info items
    document.querySelectorAll('.info-item').forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px) translateY(-3px)';
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.transform = 'scale(1.2) rotate(360deg)';
        }
      });

      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) translateY(0)';
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0deg)';
        }
      });
    });

    // Skill category mini animations
    document.querySelectorAll('.skill-category-mini').forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
        const title = this.querySelector('h4');
        if (title) {
          title.style.color = 'var(--accent-color)';
          title.style.textShadow = '0 0 10px color-mix(in srgb, var(--accent-color), transparent 40%)';
        }
      });

      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        const title = this.querySelector('h4');
        if (title) {
          title.style.color = 'var(--accent-color)';
          title.style.textShadow = 'none';
        }
      });
    });

    // Stat item hover effects
    document.querySelectorAll('.stat-item').forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.03)';
        const icon = this.querySelector('.stat-icon i');
        if (icon) {
          icon.style.transform = 'scale(1.15) rotate(360deg)';
          icon.style.boxShadow = '0 0 40px color-mix(in srgb, var(--accent-color), transparent 50%)';
        }
      });

      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        const icon = this.querySelector('.stat-icon i');
        if (icon) {
          icon.style.transform = 'scale(1) rotate(0deg)';
          icon.style.boxShadow = 'none';
        }
      });
    });

    // Description paragraph typing effect
    const descriptionText = document.querySelector('.about-description p');
    if (descriptionText) {
      const originalText = descriptionText.textContent;
      descriptionText.textContent = '';
      
      let index = 0;
      const typeWriter = () => {
        if (index < originalText.length) {
          descriptionText.textContent += originalText.charAt(index);
          index++;
          setTimeout(typeWriter, 30);
        }
      };
      
      // Start typing effect when section comes into view
      const descriptionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            typeWriter();
            descriptionObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      
      descriptionObserver.observe(descriptionText);
    }

    // Floating animation for stat icons
    document.querySelectorAll('.stat-icon i').forEach((icon, index) => {
      icon.style.animation = `float 3s ease-in-out infinite`;
      icon.style.animationDelay = `${index * 0.2}s`;
    });

    // Pulse animation for skill categories
    document.querySelectorAll('.skill-category-mini').forEach((item, index) => {
      item.style.animation = `pulse 4s ease-in-out infinite`;
      item.style.animationDelay = `${index * 0.3}s`;
    });
  }

  // Initialize all super animations
  function initSuperAnimations() {
    createFloatingParticles();
    createMouseTrail();
    initParallax();
    initInteractiveHover();
    initTextScramble();
    initGlitchEffect();
    initAboutAnimations(); // Add About section animations
  }

  // Initialize animations when page loads
  window.addEventListener('load', () => {
    setTimeout(initSuperAnimations, 1000); // Delay to let other animations finish
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


function sendMail() {
  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  const serviceId = "service_kml18ij";
  const templateId = "template_ozdffgl";

  emailjs.send(serviceId, templateId, params)
  .then(
      res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Great news! 🎉 Your message has been sent successfully! ✉️🚀");
          location.reload();  // This will reload the page
      }
  )
  .catch((err) => console.log(err));

  return false;  // Prevent the default form submission
}
