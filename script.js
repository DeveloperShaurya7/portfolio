const root = document.documentElement;
const body = document.body;
const pageOverlay = document.getElementById('pageOverlay');
const scrollProgress = document.getElementById('scrollProgress');
const typewriterText = document.getElementById('typewriter');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const navLinks = document.querySelectorAll('.nav-link');
const cursor = document.getElementById('cursor');
const projectsGrid = document.getElementById('projectsGrid');
const timelineContainer = document.getElementById('timeline');
const certificationsGrid = document.getElementById('certificationsGrid');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalDemo = document.getElementById('modalDemo');
const modalGitHub = document.getElementById('modalGitHub');
const certificateModal = document.getElementById('certificateModal');
const certificateModalClose = document.getElementById('certificateModalClose');
const certificateModalTitle = document.getElementById('certificateModalTitle');
const certificateModalIssuer = document.getElementById('certificateModalIssuer');
const certificateModalFocus = document.getElementById('certificateModalFocus');
const certificateModalImage = document.getElementById('certificateModalImage');
const certificateModalLink = document.getElementById('certificateModalLink');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

const TYPEWRITER_PHRASES = [
  'Raviranjan Kumar',
  'Full Stack Developer',
  'Software Developer',
  'Author',
  'YouTuber',
];

const PROJECTS = [
  {
    title: 'Portfolio Hub',
    description: 'A polished site experience for showcasing modern products, portfolios, and agency design systems.',
    tags: ['Tailwind', 'React', 'UI'],
    category: 'web',
    image: 'images/portfolio.png',
    demo: '#',
    github: '#',
  },
  {
    title: 'Hotel Chanakya',
    description: 'An intelligent hotel booking dashboard with reservation flows, availability management, and guest analytics.',
    tags: ['React', 'API', 'UX'],
    category: 'web',
    image: 'images/hotelchanakya.png',
    demo: '#',
    github: '#',
  },
  {
    title: 'Varkesha Ayurveda',
    description: 'A wellness marketplace that connects users with natural healthcare services and product subscriptions.',
    tags: ['Node.js', 'Stripe', 'Mobile'],
    category: 'mobile',
    image: 'images/varkeshayurveda.png',
    demo: '#',
    github: '#',
  },
  {
    title: 'GrowthYari Analytics',
    description: 'A growth metrics dashboard that combines business insights, conversion tracking, and KPIs in one place.',
    tags: ['D3', 'Next.js', 'Vercel'],
    category: 'api',
    image: 'images/growthyari.png',
    demo: '#',
    github: '#',
  },
];

const TIMELINE = [
  {
    title: 'Lead Full Stack Engineer',
    company: 'Varkesha Ayurveda',
    duration: '2024 - Present',
    description: 'Shipping high-conversion web experiences, integrating payments, and leading the team on cloud improvements.',
  },
  {
    title: 'Product Engineer',
    company: 'Syani Clothing',
    duration: '2022 - 2024',
    description: 'Delivered design-led commerce flows, optimized checkout journeys, and built internal automation tools.',
  },
  {
    title: 'Growth Tech Lead',
    company: 'Hotel Chanakya',
    duration: '2021 - 2022',
    description: 'Built booking interfaces, guest dashboards, and reporting pipelines for stronger hotel operations.',
  },
  {
    title: 'Software Developer',
    company: 'Freelance & Academic Projects',
    duration: '2019 - 2021',
    description: 'Executed web products, integrated APIs, and supported customers across startup and research work.',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified: Python Programming Fundamentals',
    issuer: 'Microsoft',
    date: '2025',
    focus: 'Python automation, data handling, and clean programming practices.',
    image: 'images/microsoft_python_programming_fundamentals.png',
    link: '#',
  },
  {
    title: 'Google Python Crash Course',
    issuer: 'Google',
    date: '2024',
    focus: 'Core Python skills for scripting, testing, and workflow automation.',
    image: 'images/google_python_crash_coure.png',
    link: '#',
  },
  {
    title: 'JavaScript Basics',
    issuer: 'UC Davis',
    date: '2024',
    focus: 'Browser scripting, DOM interaction, and modern JavaScript fundamentals.',
    image: 'images/ucDavis_javascript_basics.png',
    link: '#',
  },
  {
    title: 'HTML Essentials',
    issuer: 'University of Michigan',
    date: '2023',
    focus: 'Semantic markup, responsive structure, and accessibility-first web pages.',
    image: 'images/university_of_michigan_html.png',
    link: '#',
  },
];

const createElement = (tag, options = {}) => {
  const el = document.createElement(tag);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') el.className = value;
    else if (key === 'text') el.textContent = value;
    else if (key === 'html') el.innerHTML = value;
    else el.setAttribute(key, value);
  });
  return el;
};

const renderProjects = (filter = 'all') => {
  projectsGrid.innerHTML = '';
  const filtered = PROJECTS.filter((project) => filter === 'all' || project.category === filter);
  filtered.forEach((project) => {
    const card = createElement('article', { class: 'reveal-item rounded-[28px] border border-slate-800/70 bg-slate-950/80 p-6 shadow-glow transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30' });
    const imageWrapper = createElement('div', { class: 'relative aspect-video w-full overflow-hidden rounded-[24px] bg-slate-900' });
    const imageEl = createElement('img', { src: project.image, alt: `${project.title} preview` });
    imageEl.className = 'h-full w-full object-cover';
    imageWrapper.append(imageEl);
    const title = createElement('h3', { text: project.title });
    title.className = 'mt-6 text-xl font-semibold text-white';
    const description = createElement('p', { text: project.description });
    description.className = 'mt-3 text-slate-300 leading-7';
    const tags = createElement('div', { class: 'mt-4 flex flex-wrap gap-2' });

    project.tags.forEach((tagName) => {
      tags.append(createElement('span', { class: 'rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary', text: tagName }));
    });

    const actions = createElement('div', { class: 'mt-6 flex flex-wrap items-center gap-3' });
    const detailBtn = createElement('button', { class: 'inline-flex items-center justify-center rounded-[16px] border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-900', text: 'Details' });
    detailBtn.addEventListener('click', () => openProjectModal(project));
    const githubBtn = createElement('a', { class: 'inline-flex items-center justify-center rounded-[16px] border border-slate-700 bg-transparent px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-900', text: 'GitHub', href: project.github, target: '_blank', rel: 'noreferrer' });

    actions.append(detailBtn, githubBtn);
    card.append(imageWrapper, title, description, tags, actions);
    projectsGrid.append(card);
  });
};

const renderTimeline = () => {
  timelineContainer.innerHTML = '';
  TIMELINE.forEach((item, index) => {
    const isLast = index === TIMELINE.length - 1;
    
    // Main wrapper holding track and content side-by-side
    const row = createElement('div', { class: 'reveal-item relative flex gap-5 sm:gap-6' });
    
    // Left visual track
    const track = createElement('div', { class: 'relative flex flex-col items-center' });
    const dot = createElement('span', { class: 'relative z-10 mt-8 h-4 w-4 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-slate-950' });
    track.append(dot);
    
    // Connector line stretching down to next item
    if (!isLast) {
      const line = createElement('div', { class: 'absolute top-11 bottom-[-2rem] w-px bg-slate-800' });
      track.append(line);
    }
    
    // Content box
    const content = createElement('article', { class: 'flex-1 mb-8 rounded-[28px] border border-slate-800/70 bg-slate-950/80 p-6 shadow-glow' });
    const title = createElement('h3', { text: item.title });
    title.className = 'text-xl font-semibold text-white';
    const meta = createElement('span', { text: `${item.company} · ${item.duration}` });
    meta.className = 'block mt-2 text-sm text-primary';
    const paragraph = createElement('p', { text: item.description });
    paragraph.className = 'mt-4 text-slate-400 leading-7';
    content.append(title, meta, paragraph);
    
    row.append(track, content);
    timelineContainer.append(row);
  });
};

const renderCertifications = () => {
  CERTIFICATIONS.forEach((cert) => {
    const card = createElement('article', { class: 'reveal-item rounded-[28px] border border-slate-800/70 bg-slate-950/80 p-6 shadow-glow transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30' });
    const imageWrapper = createElement('div', { class: 'overflow-hidden rounded-[24px] bg-slate-900' });
    const certImage = createElement('img', { src: cert.image, alt: `${cert.title} certificate preview` });
    certImage.className = 'aspect-[4/3] w-full object-cover transition duration-200 hover:scale-105';
    imageWrapper.append(certImage);
    const logo = createElement('div', { class: 'flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-primary text-sm font-semibold uppercase tracking-[0.22em]' });
    logo.textContent = cert.issuer
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 3);
    const header = createElement('div', { class: 'flex items-start gap-4 mt-5' });
    header.append(logo, createElement('div', { html: `<p class="text-sm uppercase tracking-[0.22em] text-primary">${cert.issuer}</p><h3 class="text-xl font-semibold text-white">${cert.title}</h3>` }));
    const focus = createElement('p', { text: cert.focus });
    focus.className = 'mt-4 text-slate-300 leading-7';
    const metadata = createElement('p', { html: `<span class="font-semibold text-white">${cert.date}</span> · <span class="text-slate-400">${cert.issuer}</span>` });
    metadata.className = 'mt-4 text-sm text-slate-400';
    const actionRow = createElement('div', { class: 'mt-6 flex flex-wrap items-center gap-3' });
    const viewBtn = createElement('button', { class: 'inline-flex items-center justify-center rounded-[16px] border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-900', text: 'View certificate' });
    viewBtn.addEventListener('click', () => openCertificateModal(cert));
    const link = createElement('a', { href: cert.link, text: 'View credential', target: '_blank', rel: 'noreferrer' });
    link.className = 'inline-flex items-center gap-2 rounded-[16px] border border-slate-700 bg-transparent px-4 py-3 text-sm font-semibold text-primary transition hover:text-white';
    link.innerHTML = '<i class="fa-solid fa-certificate"></i> View credential';
    actionRow.append(viewBtn, link);
    card.append(imageWrapper, header, focus, metadata, actionRow);
    certificationsGrid.append(card);
  });
};

const openProjectModal = (project) => {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = '';
  project.tags.forEach((tagName) => {
    modalTags.append(createElement('span', { class: 'rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary', text: tagName }));
  });
  modalDemo.href = project.demo;
  modalGitHub.href = project.github;
  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
};

const closeProjectModal = () => {
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
};

const openCertificateModal = (cert) => {
  certificateModalTitle.textContent = cert.title;
  certificateModalIssuer.textContent = `${cert.issuer} · ${cert.date}`;
  certificateModalFocus.textContent = cert.focus;
  certificateModalImage.src = cert.image;
  certificateModalImage.className = 'max-h-[60vh] w-full object-contain';
  certificateModalImage.alt = `${cert.title} certificate preview`;
  certificateModalLink.href = cert.link;
  certificateModal.classList.add('open');
  certificateModal.setAttribute('aria-hidden', 'false');
};

const closeCertificateModal = () => {
  certificateModal.classList.remove('open');
  certificateModal.setAttribute('aria-hidden', 'true');
};

const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
};

const initTypewriter = () => {
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const writeSpeed = 90;
  const deleteSpeed = 40;
  const pauseAfterComplete = 1200;

  const type = () => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }
    typewriterText.textContent = currentPhrase.slice(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, pauseAfterComplete);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % TYPEWRITER_PHRASES.length;
      setTimeout(type, writeSpeed);
      return;
    }

    setTimeout(type, isDeleting ? deleteSpeed : writeSpeed);
  };

  type();
};

const initNavHighlight = () => {
  const sections = document.querySelectorAll('main section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const link = document.querySelector(`.site-nav a[href="#${id}"], .mobile-nav a[href="#${id}"]`);
        if (link) {
          link.classList.toggle('active', entry.isIntersecting);
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
};

const initRevealAnimations = () => {
  const revealItems = document.querySelectorAll('.section, .reveal-item');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(18px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(item);
  });
};

const initCursor = () => {
  document.addEventListener('mousemove', (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
  document.querySelectorAll('a, button, .btn').forEach((interactive) => {
    interactive.addEventListener('mouseenter', () => cursor.classList.add('active'));
    interactive.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
};

const initScrollTop = () => {
  if (!scrollTopBtn) return;
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.remove('hidden');
    } else {
      scrollTopBtn.classList.add('hidden');
    }
  };
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', toggleVisibility);
  toggleVisibility();
};

const initButtons = () => {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderProjects(button.dataset.filter);
    });
  });
  mobileMenuBtn.addEventListener('click', () => {
    const expanded = mobileNav.getAttribute('aria-hidden') === 'false';
    mobileNav.setAttribute('aria-hidden', expanded ? 'true' : 'false');
    if (expanded) {
      mobileNav.classList.add('hidden');
      mobileNav.classList.remove('flex');
    } else {
      mobileNav.classList.remove('hidden');
      mobileNav.classList.add('flex');
    }
  });
  document.querySelectorAll('.mobile-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.setAttribute('aria-hidden', 'true');
      mobileNav.classList.add('hidden');
      mobileNav.classList.remove('flex');
    });
  });
  modalClose.addEventListener('click', closeProjectModal);
  projectModal.addEventListener('click', (event) => {
    if (event.target === projectModal) closeProjectModal();
  });
  certificateModalClose.addEventListener('click', closeCertificateModal);
  certificateModal.addEventListener('click', (event) => {
    if (event.target === certificateModal) closeCertificateModal();
  });
};

const initCounters = () => {
  const counters = document.querySelectorAll('[data-target]');
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target);
    let count = 0;
    const speed = 20;
    const step = Math.ceil(target / 30);
    const update = () => {
      count += step;
      if (count > target) count = target;
      counter.textContent = count;
      if (count < target) requestAnimationFrame(update);
    };
    update();
  });
};

const initContactForm = () => {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      formFeedback.textContent = 'Please complete all fields before sending.';
      return;
    }
    formFeedback.textContent = 'Message received. Integration placeholder active.';
    contactForm.reset();
  });
};

const init = () => {
  initTypewriter();
  renderProjects();
  renderTimeline();
  renderCertifications();
  initNavHighlight();
  initRevealAnimations();
  initCursor();
  initButtons();
  initScrollTop();
  initCounters();
  initContactForm();
  updateScrollProgress();
  window.addEventListener('scroll', updateScrollProgress);
  window.addEventListener('load', () => {
    pageOverlay.classList.add('hidden');
    setTimeout(() => pageOverlay.remove(), 600);
  });
};

init();
