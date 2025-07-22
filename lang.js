
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    products: "Products",
    news: "News",
    contact: "Contact Us",
    headline: "Welcome to CAIS",
    subtext: "We create chemistry for a sustainable future.",
    footer: "© 2025 CAIS. All rights reserved.",
    about_header: "About Us",
    about_text: "CAIS is a global chemical company focused on innovation, sustainability, and partnerships.",
    products_header: "Our Products",
    products_text: "We offer a wide range of chemical solutions across industries."
  },
  zh: {
    home: "首页",
    about: "关于我们",
    products: "产品",
    news: "新闻",
    contact: "联系我们",
    headline: "欢迎来到中农国际",
    subtext: "我们创造化学，为可持续未来而努力。",
    footer: "© 2025 中农国际CAIS 版权所有。",
    about_header: "关于我们",
    about_text: "中农国际是一家致力于创新、可持续发展和合作的全球化工公司。",
    products_header: "我们的产品",
    products_text: "我们为各个行业提供多样化的化学解决方案。"
  }
};

function setLang(lang) {
  localStorage.setItem('language', lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key] || key;
  });
}

function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
}

window.onload = function () {
  const lang = localStorage.getItem('language') || 'en';
  setLang(lang);
};