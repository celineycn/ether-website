/* ─── ĒTHER — main.js ─────────────────────────────────────── */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ─── Helpers ─────────────────────────────────────────────── */
const q = (s) => document.querySelector(s);
const qa = (s) => document.querySelectorAll(s);

/* ─── 1. LOADER ───────────────────────────────────────────── */
function initLoader() {
  const loader = q('#loader');
  const wordmark = q('.loader-wordmark');

  const tl = gsap.timeline({
    onComplete: () => {
      loader.style.display = 'none';
      initHeroAnimation();
    }
  });

  tl.to(wordmark, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power3.out'
  })
  .to(wordmark, {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: 'power3.in',
    delay: 0.6
  })
  .to(loader, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out'
  }, '-=0.3');
}

/* ─── 2. HERO ANIMATION ───────────────────────────────────── */
function initHeroAnimation() {
  const nav = q('#nav');
  const heroTitle = q('.hero-title');
  const heroSub = q('.hero-sub');
  const scrollIndicator = q('.scroll-indicator');

  // Wrap words for animation
  const heroLines = qa('.hero-line');
  heroLines.forEach(line => {
    const words = line.textContent.trim().split(' ');
    line.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
  });

  const tl = gsap.timeline();

  tl.to(nav, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.2
  })
  .to(qa('.hero-line .word'), {
    y: 0,
    duration: 1.1,
    stagger: 0.08,
    ease: 'power4.out'
  }, '-=0.4')
  .to(heroSub, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to(scrollIndicator, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4');

  // Hero parallax on scroll
  gsap.to('.hero-content', {
    y: '25%',
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

/* ─── 3. PRODUCT REVEAL ───────────────────────────────────── */
function initProductReveal() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#product-reveal',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none none'
    }
  });

  tl.to('.product-img', {
    opacity: 1,
    y: 0,
    duration: 1.4,
    ease: 'power3.out'
  })
  .to('.product-desc-label', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out'
  }, '-=0.8')
  .to('.product-desc-title', {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out'
  }, '-=0.6')
  .to('.product-desc-body', {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: 'power3.out'
  }, '-=0.6');

  // Subtle parallax on product image
  gsap.to('.product-img', {
    y: '-6%',
    ease: 'none',
    scrollTrigger: {
      trigger: '#product-reveal',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });
}

/* ─── 4. ORIGIN ───────────────────────────────────────────── */
function initOrigin() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#origin',
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  });

  tl.to('.altitude-number', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power4.out',
    from: { y: 40 }
  })
  .to('.altitude-unit', {
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.8')
  .to('.origin-divider', {
    opacity: 1,
    scaleX: 1,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.4')
  .to('.origin-location', {
    opacity: 1,
    duration: 0.7,
    ease: 'power3.out'
  }, '-=0.3')
  .to('.origin-desc', {
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out'
  }, '-=0.4');

  // Altitude number counter
  gsap.from({ val: 0 }, {
    val: 4200,
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#origin',
      start: 'top 70%',
      toggleActions: 'play none none none'
    },
    onUpdate: function () {
      const altEl = q('.altitude-number');
      if (altEl) {
        altEl.textContent = Math.round(this.targets()[0].val).toLocaleString();
      }
    }
  });
}

/* ─── 5. THE OBJECT ───────────────────────────────────────── */
function initTheObject() {
  gsap.to('.object-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#the-object',
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  });

  qa('.spec-card').forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#the-object',
        start: 'top 60%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* ─── 6. PHILOSOPHY ───────────────────────────────────────── */
function initPhilosophy() {
  qa('.philosophy-statement').forEach((stmt, i) => {
    gsap.to(stmt, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: stmt,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* ─── 7. RITUAL ───────────────────────────────────────────── */
function initRitual() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#ritual',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  tl.to('.ritual-title', {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: 'power3.out'
  })
  .to('.ritual-body', {
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out'
  }, '-=0.6');

  // Wave animation when in view
  gsap.to('.wave-path-active', {
    strokeDashoffset: 0,
    duration: 3,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '#ritual',
      start: 'top 60%',
      toggleActions: 'play none none none'
    }
  });
}

/* ─── 8. UPCOMING DROPS ───────────────────────────────────── */
function initDrops() {
  qa('.drop-item').forEach((item, i) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#upcoming-drops',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* ─── 9. THE DROP (Purchase) ──────────────────────────────── */
function initDropSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#drop',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  tl.to('.drop-title', {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: 'power3.out'
  })
  .to(qa('.pricing-card'), {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out'
  }, '-=0.6')
  .to('.cta-wrap', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4');

  // Pricing card selection
  qa('.pricing-card').forEach(card => {
    card.addEventListener('click', () => {
      qa('.pricing-card').forEach(c => {
        c.style.borderColor = 'rgba(255,255,255,0.1)';
        const dot = c.querySelector('.pricing-selected-dot');
        if (dot) dot.style.background = 'transparent';
      });
      card.style.borderColor = 'rgba(255,255,255,0.5)';
      const dot = card.querySelector('.pricing-selected-dot');
      if (dot) dot.style.background = 'rgba(255,255,255,0.8)';
    });
  });

  // Reserve button
  const btn = q('#reserve-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const originalText = q('.cta-text').textContent;
      q('.cta-text').textContent = 'Coming Soon ·';
      btn.style.background = '#1a1a1a';
      btn.style.color = '#fff';
      btn.style.borderColor = 'rgba(255,255,255,0.3)';
      setTimeout(() => {
        q('.cta-text').textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    });
  }
}

/* ─── 10. NAV TRANSPARENCY ON SCROLL ─────────────────────── */
function initNavScroll() {
  const nav = q('#nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      nav.style.backdropFilter = 'blur(20px)';
      nav.style.webkitBackdropFilter = 'blur(20px)';
    } else {
      nav.style.backdropFilter = 'none';
      nav.style.webkitBackdropFilter = 'none';
    }
    lastScroll = currentScroll;
  });

  // Smooth scroll for reserve nav link
  q('.nav-cta')?.addEventListener('click', e => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: '#drop', offsetY: 60 },
      ease: 'power3.inOut'
    });
  });
}

/* ─── INIT ────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  // Lock scroll during loader
  document.body.style.overflow = 'hidden';

  initLoader();
  initNavScroll();

  // Init scroll animations after a short delay
  setTimeout(() => {
    document.body.style.overflow = '';
    initProductReveal();
    initOrigin();
    initTheObject();
    initPhilosophy();
    initRitual();
    initDrops();
    initDropSection();
  }, 2800);
});
