const translations = {
    en: {
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact Me",
        themeToggle: "Switch Theme",
        about1: "About Me",
        langAboutText: "Hi, I'm Andrew, a novice web developer with a passion for creating beautiful and functional websites.",
        langSkills1: "Skills",
        langpProjects1: "Projects",
        langContact1: "Contact Me",
        langContact2: 'If you have any questions or suggestions about the work, you can contact me.',
        langContactForm1: 'Name:',
        langContactForm2: 'Message:',
        langContactFormButton: 'Sand Message'
    },
    
    ua: {
        about: "Про мене",
        skills: "Навички",
        projects: "Проекти",
        contact: "Зв'язатися зі мною",
        themeToggle: "Темна тема",
        about1: "Про мене",
        langAboutText: "Привіт я Андрій, початківець веб-розробник із пристрастю до створення красивих і функціональних веб-сайтів.",
        langSkills1: "Навички",
        langpProjects1: "Проекти",
        langContact1: "Звязатись зі мною",
        langContact2: 'Якщо у вас є запитання або пропозиції що до роботи, ви можите звязатись зі мною.',
        langContactForm1: 'Імя:',
        langContactForm2: 'Повідомлення:',
        langContactFormButton: 'Відправити повідомлення'
    }
};

// Функція для зміни тексту
function changeLanguage(lang) {
    document.getElementById('lang-about').textContent = translations[lang].about;
    document.getElementById('lang-skills').textContent = translations[lang].skills;
    document.getElementById('lang-projects').textContent = translations[lang].projects;
    document.getElementById('lang-contact').textContent = translations[lang].contact;

    document.getElementById('lang-about1').textContent = translations[lang].about1;
    document.getElementById('lang-about-text').textContent = translations[lang].langAboutText;
    document.getElementById('lang-skills1').textContent = translations[lang].langSkills1;
    document.getElementById('lang-projects1').textContent = translations[lang].langpProjects1;

    document.getElementById('lang-contact1').textContent = translations[lang].langContact1;
    document.getElementById('lang-contact2').textContent = translations[lang].langContact2;
    document.getElementById('lang-contact-form1').textContent = translations[lang].langContactForm1;
    document.getElementById('lang-contact-form2').textContent = translations[lang].langContactForm2;

    document.getElementById('lang-contact-form-button').textContent = translations[lang].langContactFormButton;
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-ua').classList.remove('active');
    if (lang === 'en') {
        document.getElementById('lang-en').classList.add('active');
    } else if (lang === 'ua') {
        document.getElementById('lang-ua').classList.add('active');
    }
}
// Додаємо слухач події для кнопок мов
document.getElementById('en').addEventListener('click', function() {
    changeLanguage('en');
});


document.getElementById('ua').addEventListener('click', function() {
    changeLanguage('ua');
});

