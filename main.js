/* ─── ĒTHER — main.js ─────────────────────────────────────── */
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
    .to(qa('.hero-line .word'), { y: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' }, '-=0.4')
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

  // Parallax on the origin bg image
  gsap.to('.origin-img', {
    scale: 1, ease: 'none',
    scrollTrigger: { trigger: '#origin', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
  });

  gsap.to('.altitude-number', { opacity: 1, duration: 1.2, ease: 'power4.out', scrollTrigger: st });
  gsap.to('.altitude-unit', { opacity: 1, duration: 0.8, delay: 0.3, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.origin-divider', { opacity: 1, duration: 0.6, delay: 0.5, ease: 'power2.out', scrollTrigger: st });
  gsap.to('.origin-location', { opacity: 1, duration: 0.7, delay: 0.65, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.origin-desc', { opacity: 1, duration: 0.9, delay: 0.8, ease: 'power3.out', scrollTrigger: st });

  // Counter
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

  // Parallax on ritual image
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

/* ─── PHILOSOPHY ──────────────────────────────────────────── */
function initPhilosophy() {
  qa('.philosophy-statement').forEach(stmt => {
    gsap.to(stmt, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: stmt, start: 'top 85%', toggleActions: 'play none none none' }
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
  gsap.to(qa('.pricing-card'), { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.2, ease: 'power3.out', scrollTrigger: st });
  gsap.to('.cta-wrap', { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out', scrollTrigger: st });

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

  q('#reserve-btn')?.addEventListener('click', () => {
    const txt = q('.cta-text');
    const btn = q('#reserve-btn');
    txt.textContent = 'Coming Soon ·';
    btn.style.background = '#1a1a1a';
    btn.style.color = '#fff';
    setTimeout(() => { txt.textContent = 'Reserve Your Air'; btn.style.background = ''; btn.style.color = ''; }, 3000);
  });
}

/* ─── NAV ─────────────────────────────────────────────────── */
function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = q('#nav');
    nav.style.backdropFilter = window.scrollY > 80 ? 'blur(20px)' : 'none';
  });

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
    initPhilosophy();
    initDrops();
    initDropSection();
  }, 2800);
});
