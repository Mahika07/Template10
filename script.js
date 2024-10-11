window.addEventListener('load', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
})
// Project Onclick function
function readmore(event) {
    const projectContent = event.target.closest('.project_content');

    const projectPara = projectContent.querySelector('.project_para');
    if (projectPara.style.display === 'block') {
        projectPara.style.display = 'none';
        projectContent.style.height = '370px'
    } else {
        projectPara.style.display = 'block';
        projectContent.style.height = 'auto'
    }
}
// Service Onclick function
function service_read_more(event) {
    const service_content = event.target.closest('.service_content');

    const service_para = service_content.querySelector('.service_para');
    if (service_para.style.display === 'block') {
        service_para.style.display = 'none';

    } else {
        service_para.style.display = 'block';

    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const section1 = document.getElementById('section01');
    const section2 = document.getElementById('section02');


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust as needed to trigger when 50% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'section01' || entry.target.id === 'section02') {
                    section1.classList.add('transparent-bg');
                    section1.classList.remove('white-bg');

                } else {
                    section1.classList.add('white-bg');
                    section1.classList.remove('transparent-bg');

                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(section1);
    observer.observe(section2);

    // Optional: Observe additional sections if needed
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarSupportedContent li a')

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    current = "#" + current
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute("href") === current) {
            a.classList.add('active')
        }
    })
})
