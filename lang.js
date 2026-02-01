const languages = {
  en: {
    navProjects: "Projects",
    navSkills: "Skills",
    navAbout: "About me",
    contactBtn: "Contact me",
    heroTitle: "Hello, I am Mohamed",
    heroDev: "Front-End Developer",
    heroDesc: "I am a beginner in Front-End Developing websites using HTML, CSS, JavaScript",
    moreBtn: "More..",
    skillsTitle: "Skills :",
    htmlDesc: "Beginner web developer with basic knowledge of HTML.",
    cssDesc: "Beginner web developer with basic knowledge of CSS.",
    jsDesc: "Beginner web developer with basic knowledge of JavaScript.",
    checkBtn1: "Check out",
    checkBtn2: "Check out",
    checkBtn3: "Check out",
    footerText: "All rights reserved © 2026"
  },

  ar: {
    navProjects: "المشاريع",
    navSkills: "المهارات",
    navAbout: "عني",
    contactBtn: "تواصل معي",
    heroTitle: "مرحباً، أنا محمد",
    heroDev: "مطور واجهات أمامية",
    heroDesc: "أنا مبتدئ في تطوير الواجهات الأمامية باستخدام HTML و CSS و JavaScript",
    moreBtn: "المزيد",
    skillsTitle: "المهارات :",
    htmlDesc: "مطور مبتدئ لديه معرفة أساسية بـ HTML.",
    cssDesc: "مطور مبتدئ لديه معرفة أساسية بـ CSS.",
    jsDesc: "مطور مبتدئ لديه معرفة أساسية بـ JavaScript.",
    checkBtn1: "عرض",
    checkBtn2: "عرض",
    checkBtn3: "عرض",
    footerText: "جميع الحقوق محفوظة © 2026"
  }
};

function setLanguage(lang) {
  if(!languages[lang]) return;
  for (let key in languages[lang]) {
    const el = document.getElementById(key)
    if(el)
    {
        el.textContent = languages[lang][key];
    }
    }
  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
}

