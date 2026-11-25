// js/engine.js

// ==========================================
// POPULATE HERO SECTION
// ==========================================
document.getElementById('user-name').textContent = PortfolioData.profile.name;
document.getElementById('user-title').textContent = `${PortfolioData.profile.title} · ${PortfolioData.profile.location}`;
document.getElementById('user-status').textContent = PortfolioData.profile.status;

// ==========================================
// RENDER PROJECTS GRID
// ==========================================
const grid = document.getElementById('project-grid');
grid.innerHTML = PortfolioData.projects.map((proj, idx) => `
    <a href="${proj.link}" target="_blank" class="project-card ${proj.highlight ? 'project-highlight' : ''}" style="animation-delay: ${idx * 0.08}s">
        <div class="project-header">
            <div class="project-title">${proj.title}</div>
            <div class="project-link">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </div>
        </div>
        <div class="project-desc">${proj.desc}</div>
        <div class="tech-tags">
            ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
    </a>
`).join('');

// ==========================================
// RENDER SKILLS SECTION
// ==========================================
const skillsGrid = document.getElementById('skills-grid');
const categories = [...new Set(PortfolioData.skills.map(s => s.category))];

skillsGrid.innerHTML = categories.map((cat, catIdx) => {
    const catSkills = PortfolioData.skills.filter(s => s.category === cat);
    return `
        <div class="skill-category" style="animation-delay: ${catIdx * 0.1}s">
            <h4 class="skill-category-title">${cat}</h4>
            <div class="skill-tags">
                ${catSkills.map(skill => `<span class="skill-tag">${skill.name}</span>`).join('')}
            </div>
        </div>
    `;
}).join('');

// ==========================================
// RENDER ABOUT SECTION
// ==========================================
const aboutText = document.getElementById('about-text');
aboutText.innerHTML = `
    <p class="about-paragraph">${PortfolioData.about.bio}</p>
    <p class="about-paragraph">${PortfolioData.about.description}</p>
    <p class="about-paragraph about-focus">${PortfolioData.about.focus}</p>
`;

const aboutStats = document.getElementById('about-stats');
aboutStats.innerHTML = PortfolioData.stats.map((stat, idx) => `
    <div class="stat-card" style="animation-delay: ${idx * 0.1}s">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
    </div>
`).join('');

// ==========================================
// RENDER ACHIEVEMENTS GRID
// ==========================================
const achievementsGrid = document.getElementById('achievements-grid');
achievementsGrid.innerHTML = PortfolioData.achievements.map((achievement, idx) => `
    <div class="achievement-card" style="animation-delay: ${idx * 0.08}s">
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-content">
            <h3 class="achievement-title">${achievement.title}</h3>
            <span class="achievement-category">${achievement.category}</span>
            <p class="achievement-desc">${achievement.description}</p>
            <span class="achievement-year">${achievement.year}</span>
        </div>
    </div>
`).join('');

// ==========================================
// RENDER ACTIVITY STREAM
// ==========================================
const stream = document.getElementById('activity-stream');
const baseDelay = PortfolioData.projects.length * 0.08 + PortfolioData.achievements.length * 0.08;

stream.innerHTML = PortfolioData.logs.map((log, idx) => `
    <li class="log-item" style="animation-delay: ${baseDelay + (idx * 0.06)}s">
        <span class="log-date">${log.date}</span>
        <span class="log-event">${log.event}</span>
    </li>
`).join('');

// ==========================================
// RENDER SOCIAL LINKS
// ==========================================
const socialLinks = document.getElementById('social-links');

const socialData = [
    { 
        name: "GitHub", 
        url: "https://github.com/mostahidx", 
        icon: '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>'
    },
    { 
        name: "LinkedIn", 
        url: "https://linkedin.com/in/mostahidx", 
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.555s.047-8.842 0-9.769h3.555v1.381c.421-.651 1.175-1.576 2.857-1.576 2.087 0 3.653 1.36 3.653 4.281v5.683zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.958-1.715 1.187 0 1.914.76 1.938 1.715 0 .953-.751 1.715-1.981 1.715zm1.946 11.597H3.392V9.142h3.891v11.31zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>'
    },
    { 
        name: "X", 
        url: "https://x.com/mostahidx", 
        icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 002.856-3.915 9.958 9.958 0 01-2.836.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>'
    }
];

socialLinks.innerHTML = socialData.map(social => `
    <a href="${social.url}" target="_blank" class="social-link" title="${social.name}">
        ${social.icon}
    </a>
`).join('');

// ==========================================
// SMOOTH SCROLL ENHANCEMENT
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe achievement cards for animation
document.querySelectorAll('.achievement-card').forEach((item, idx) => {
    item.style.animationDelay = `${idx * 0.08}s`;
    observer.observe(item);
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.borderBottomColor = 'var(--border-color-light)';
    } else {
        navbar.style.borderBottomColor = 'var(--border-color)';
    }

    lastScroll = currentScroll;
});

// ==========================================
// PAGE LOAD ANIMATION
// ==========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Fade in on load
window.addEventListener('DOMContentLoaded', () => {
    // Any additional initialization can go here
});
