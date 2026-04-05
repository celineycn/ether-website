/* ─── ĒTHER — main.js v3 (CMO-refined) ───────────────────── */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const q = (s) => document.querySelector(s);
const qa = (s) => document.querySelectorAll(s);

/* ─── LOADER ──────────────────────────────────────────────── */
function initLoader() {
  const loader = q('#loader');
  const wordmark = q('.loader-wordmark');
  const tl = gsap.timeline({
    onComplete: () => {
      loader.style.display = 'none';
      initHeroAnimation();
    }
  });
  tl.to(wordmark, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' })
    .to(wordmark, { opacity: 0, y: -20, duration: 0.8, ease: 'power3.in', delay: 0.6 })
    .to(loader, { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
}

/* ─── HERO ────────────────────────────────────────────────── */
function initHeroAnimation() {
  const heroLines = qa('.hero-line');
  heroLines.forEach(line => {
    const words = line.textContent.trim().split(' ');
    line.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
  });

  const tl = gsap.timeline();
  tl.to(q('#nav'), { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 })
    .to(q('.hero-scarcity-badge'), { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
    .to(qa('.hero-line .word'), { y: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' }, '-=0.3')
    .to(q('.hero-sub'), { opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .to(q('.scroll-indicator'), { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4');

  gsap.to('.hero-content', {
    y: '25%', opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });
}

/* ─── PRODUCT REVEAL ──────────────────────────────────────── */
function initProductReveal() {
  const st = { trigger: '#product-reveal', start: 'top 75%', toggleActions: 'play none none none' };
  gsap.to('.product-img', { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.product-desc-label', { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.product-desc-title', { opacity: 1, y: 0, duration: 0.9, delay: 0.45, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.product-desc-body', { opacity: 1, y: 0, duration: 0.9, delay: 0.6, ease: 'power3.out', scrollTrigger: st });
}

/* ─── MONOLITH FULL ───────────────────────────────────────── */
function initMonolith() {
  gsap.to('.full-bleed-img', {
    opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out',
    scrollTrigger: { trigger: '#monolith-full', start: 'top 80%', toggleActions: 'play none none none' }
  });
  gsap.to('.full-bleed-img', {
    scale: 1.06, ease: 'none',
    scrollTrigger: { trigger: '#monolith-full', start: 'top bottom', end: 'bottom top', scrub: 1 }
  });
}

/* ─── ORIGIN ──────────────────────────────────────────────── */
function initOrigin() {
  const st = { trigger: '#origin', start: 'top 60%', toggleActions: 'play none none none' };

  gsap.to('.origin-img', {
    scale: 1, ease: 'none',
    scrollTrigger: { trigger: '#origin', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  });

  gsap.to('.altitude-number', { opacity: 1, duration: 1.2, ease: 'power4.out', scrollTrigger: st });
  gsap.to('.altitude-unit', { opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.origin-divider', { opacity: 1, duration: 0.6, delay: 0.5, ease: 'power2.out', scrollTrigger: st });
  gsap.to('.origin-location', { opacity: 1, duration: 0.7, delay: 0.65, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.origin-desc', { opacity: 1, duration: 0.9, delay: 0.8, ease: 'power3.out', scrollTrigger: st });

  gsap.from({ val: 0 }, {
    val: 4200,
    duration: 2.2,
    ease: 'power3.out',
    delay: 0.2,
    scrollTrigger: st,
    onUpdate: function () {
      const el = q('.altitude-number');
      if (el) el.textContent = Math.round(this.targets()[0].val).toLocaleString();
    }
  });
}

/* ─── PACKAGING ───────────────────────────────────────────── */
function initPackaging() {
  const st = { trigger: '#packaging', start: 'top 70%', toggleActions: 'play none none none' };
  gsap.to('.packaging-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: st });
  qa('.diptych-left, .diptych-right').forEach((el, i) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 0.9, delay: i * 0.15, ease: 'power3.out', scrollTrigger: st });
  });
}

/* ─── THE OBJECT ──────────────────────────────────────────── */
function initTheObject() {
  gsap.to('.object-title', {
    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '#the-object', start: 'top 75%', toggleActions: 'play none none none' }
  });
  qa('.spec-card').forEach((c, i) => {
    gsap.to(c, {
      opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.specs-grid', start: 'top 70%', toggleActions: 'play none none none' }
    });
  });
  gsap.to('.shelf-image', {
    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.shelf-image', start: 'top 80%', toggleActions: 'play none none none' }
  });
}

/* ─── RITUAL ──────────────────────────────────────────────── */
function initRitual() {
  const st = { trigger: '#ritual', start: 'top 65%', toggleActions: 'play none none none' };
  gsap.to('.ritual-title', { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.ritual-body', { opacity: 1, duration: 0.9, delay: 0.3, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.ritual-social', { opacity: 1, y: 0, duration: 0.8, delay: 0.55, ease: 'power3.out', scrollTrigger: st });

  gsap.to('.ritual-bg-img', {
    scale: 1, ease: 'none',
    scrollTrigger: { trigger: '#ritual', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  });
}

/* ─── CARD DETAIL ─────────────────────────────────────────── */
function initCardDetail() {
  const st = { trigger: '#card-detail', start: 'top 70%', toggleActions: 'play none none none' };
  gsap.to('.card-detail-img img', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.card-detail-title', { opacity: 1, y: 0, duration: 0.9, delay: 0.3, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.card-detail-body', { opacity: 1, duration: 0.9, delay: 0.5, ease: 'power3.out', scrollTrigger: st });
}

/* ─── GALLERY ─────────────────────────────────────────────── */
function initGallery() {
  gsap.to('.gallery-full', {
    opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out',
    scrollTrigger: { trigger: '#gallery', start: 'top 80%', toggleActions: 'play none none none' }
  });
  gsap.to('.gallery-full', {
    scale: 1.07, ease: 'none',
    scrollTrigger: { trigger: '#gallery', start: 'top bottom', end: 'bottom top', scrub: 1 }
  });
}

/* ─── SOCIAL PROOF STRIP ──────────────────────────────────── */
function initSocialProof() {
  qa('.proof-stat').forEach((stat, i) => {
    gsap.to(stat, {
      opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '#social-proof', start: 'top 80%', toggleActions: 'play none none none' }
    });
  });
}

/* ─── PHILOSOPHY ──────────────────────────────────────────── */
function initPhilosophy() {
  qa('.philosophy-statement').forEach(stmt => {
    gsap.to(stmt, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: stmt, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });
}

/* ─── FAQ ─────────────────────────────────────────────────── */
function initFAQ() {
  gsap.to('.faq-title', {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: '#faq', start: 'top 75%', toggleActions: 'play none none none' }
  });

  qa('.faq-item').forEach((item, i) => {
    gsap.to(item, {
      opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: '.faq-list', start: 'top 75%', toggleActions: 'play none none none' }
    });

    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      qa('.faq-q').forEach(b => b.setAttribute('aria-expanded', 'false'));
      qa('.faq-a').forEach(a => a.classList.remove('open'));
      // Toggle this one
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });
}

/* ─── DROPS ───────────────────────────────────────────────── */
function initDrops() {
  qa('.drop-item').forEach((item, i) => {
    gsap.to(item, {
      opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '#upcoming-drops', start: 'top 70%', toggleActions: 'play none none none' }
    });
  });
}

/* ─── PURCHASE SECTION ────────────────────────────────────── */
function initDropSection() {
  const st = { trigger: '#drop', start: 'top 70%', toggleActions: 'play none none none' };
  gsap.to('.drop-title', { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.scarcity-block', { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out', scrollTrigger: st });
  gsap.to(qa('.pricing-card'), { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.25, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.cta-wrap', { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out', scrollTrigger: st });

  // Animate scarcity bar when section enters
  ScrollTrigger.create({
    trigger: '#drop',
    start: 'top 80%',
    onEnter: () => {
      // 372/500 = 74.4% filled
      setTimeout(() => {
        const fill = q('#scarcity-fill');
        if (fill) fill.style.width = '74.4%';
      }, 400);
      // Slow decrement simulation
      initScarcityDecrement();
    }
  });

  // Pricing card selection
  qa('.pricing-card').forEach(card => {
    card.addEventListener('click', () => {
      qa('.pricing-card').forEach(c => {
        c.classList.remove('pricing-card--selected');
        const dot = c.querySelector('.pricing-selected-dot');
        if (dot) dot.classList.remove('selected');
      });
      card.classList.add('pricing-card--selected');
      const dot = card.querySelector('.pricing-selected-dot');
      if (dot) dot.classList.add('selected');
    });
  });

  // Reserve form
  const form = q('#reserve-form');
  const input = q('#email-input');
  const wrap = q('#cta-wrap');
  const success = q('#reserve-success');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.classList.add('error');
      input.focus();
      setTimeout(() => input.classList.remove('error'), 2000);
      return;
    }
    // Success state
    gsap.to(wrap, { opacity: 0, y: -10, duration: 0.4, ease: 'power2.in', onComplete: () => {
      wrap.style.display = 'none';
      success.style.display = 'block';
      gsap.to(success, { opacity: 1, duration: 0.6, ease: 'power3.out' });
      // Decrement one bottle
      const countEl = q('#bottles-left');
      if (countEl) {
        const current = parseInt(countEl.textContent);
        countEl.textContent = current - 1;
        // Update bar
        const fill = q('#scarcity-fill');
        if (fill) fill.style.width = `${((current - 1) / 500) * 100}%`;
      }
    }});
  });
}

/* ─── SCARCITY DECREMENT ──────────────────────────────────── */
function initScarcityDecrement() {
  let count = parseInt(q('#bottles-left')?.textContent || '372');
  // Randomly decrement by 1 every 15–45 seconds (simulated live demand)
  const tick = () => {
    if (count <= 1) return;
    const delay = (15 + Math.random() * 30) * 1000;
    setTimeout(() => {
      count -= 1;
      const el = q('#bottles-left');
      if (el) {
        el.textContent = count;
        el.style.transition = 'color 0.3s ease';
        el.style.color = '#fff';
        setTimeout(() => { el.style.color = ''; }, 600);
      }
      const fill = q('#scarcity-fill');
      if (fill) fill.style.width = `${(count / 500) * 100}%`;
      tick();
    }, delay);
  };
  tick();
}

/* ─── NEXT DROP WAITLIST ──────────────────────────────────── */
function initNextDrop() {
  const st = { trigger: '#next-drop', start: 'top 75%', toggleActions: 'play none none none' };
  gsap.to('.next-drop-title', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.next-drop-body', { opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.next-drop-form', { opacity: 1, y: 0, duration: 0.8, delay: 0.35, ease: 'power3.out', scrollTrigger: st });

  const form = q('#notify-form');
  const input = q('#notify-email');
  const btn = form?.querySelector('.notify-btn');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.classList.add('error');
      setTimeout(() => input.classList.remove('error'), 2000);
      return;
    }
    if (btn) {
      btn.textContent = 'You\'re on the list ✦';
      btn.disabled = true;
      btn.style.opacity = '0.5';
      input.style.opacity = '0.4';
    }
  });
}

/* ─── NAV ─────────────────────────────────────────────────── */
function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = q('#nav');
    nav.style.backdropFilter = window.scrollY > 80 ? 'blur(20px)' : 'none';
  }, { passive: true });

  q('.nav-cta')?.addEventListener('click', e => {
    e.preventDefault();
    gsap.to(window, { duration: 1.2, scrollTo: { y: '#drop', offsetY: 60 }, ease: 'power3.inOut' });
  });
}

/* ─── INIT ────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';
  initLoader();
  initNavScroll();

  setTimeout(() => {
    document.body.style.overflow = '';
    initProductReveal();
    initMonolith();
    initOrigin();
    initPackaging();
    initTheObject();
    initRitual();
    initCardDetail();
    initGallery();
    initSocialProof();
    initPhilosophy();
    initFAQ();
    initDrops();
    initDropSection();
    initNextDrop();
  }, 2800);
});
