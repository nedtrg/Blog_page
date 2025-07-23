document.getElementById('toggleBtn').addEventListener('click', function() {
    document.getElementById('fullStory').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('hideBtn').addEventListener('click', function() {
    document.getElementById('fullStory').style.display = 'none';
    document.getElementById('toggleBtn').style.display = 'inline-block';
});

const blogPosts = [
    {
        image: '/Assets/images/blog_5.jpg',
        title: 'Breaking Hunger Cycles: 5 Proven Methods',
        summary: 'Explore strategies transforming nutrition access for rural women.',
        link: '/article/rack.html'
    },
    {
        image: '/Assets/images/project_santa.jpg',
        title: 'Giving to those in need',
        summary: 'Surprise festive food packs delivered before holidays.',
        link: '/article/santa.html'
    },
    {
        image: '/Assets/images/santa_5.jpg',
        title: 'Project-Santa',
        summary: 'Bringing Festive Joy to Women-Led Homes.',
        link: '/article/santa.html'
    },
    {
        image: '/Assets/images/amina_1.png',
        title: 'Small Business, Big Change: Women Entrepreneurs',
        summary: 'Stories of women who launched successful micro-businesses.',
        link: '/article/rack.html'
    }
];

const postsContainer = document.getElementById('blogPosts');

blogPosts.forEach(post => {
    postsContainer.innerHTML += `
    <div class="blog-card">
        <div class="card-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="card-content">
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            <a href="${post.link}" class="read-more">Read More →</a>
        </div>
    </div>`;
});



const animateElements = document.querySelectorAll('.animate');

const revealOnScroll = () => {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


const voicesSection = document.querySelector('.community-voices');

window.addEventListener('scroll', () => {
  const rect = voicesSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    voicesSection.classList.add('show');
  }
});


