/* ===============================
   Dubai Events Guide - JavaScript
   =============================== */

/* ========== 1. Contact information Checking ========== */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const alertPlaceholder = document.getElementById('alertPlaceholder');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showAlert('الرجاء تعبئة جميع الحقول المطلوبة.', 'danger');
      } else if (!validateEmail(email)) {
        showAlert('الرجاء إدخال بريد إلكتروني صالح.', 'warning');
      } else {
        showAlert('تم إرسال رسالتك بنجاح! سنعاود التواصل قريباً.', 'success');
        form.reset();
      }
    });
  }

    function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showAlert(message, type) {
    if (!alertPlaceholder) return;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>`;
    alertPlaceholder.innerHTML = '';
    alertPlaceholder.append(wrapper);
  }
});

/* ================== 2. Filter events =================== */
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(
    ".btn-outline-primary, .btn-outline-success, .btn-outline-warning, .btn-outline-danger, .btn-outline-info"
  );
  const eventColumns = document.querySelectorAll("[data-category]");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.textContent.trim();

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      eventColumns.forEach((col) => {
        const eventCategory = col.dataset.category.trim();

        if (category === "الكل" || eventCategory === category) {
          col.style.display = "block";
        } else {
          col.style.display = "none";
        }
      });
    });
  });
});


/* ========== 3. Back to top button ============ */

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "⬆";
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    display: none;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    z-index: 1000;
  `;
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

/* ========== 4. Add to Calendar Button ========== */
document.addEventListener("DOMContentLoaded", () => {
  const calendarBtn = document.getElementById("addToCalendar");

  if (calendarBtn) {
    calendarBtn.addEventListener("click", () => {
      const icsContent = `BEGIN:VCALENDAR
       VERSION:2.0
       BEGIN:VEVENT
       SUMMARY:عرض النافورة الراقصة - القرية العالمية
       DTSTART:20251025T180000Z
       DTEND:20251025T190000Z
       LOCATION:القرية العالمية - دبي
       DESCRIPTION:عرض موسيقي مائي مذهل ضمن فعاليات القرية العالمية.
       END:VEVENT
       END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: "text/calendar" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "event.ics";
      link.click();
    });
  }
});

/* ========== 5. translation selection list ============ */

const translations =
 {

  ar :
  {
      header_title:"دليل فعاليات دبي",
      title1: "تصنيفات الفعاليات",
      Home: "الرئيسية",
      Events:"الفعاليات",
      Event_details:"تفاصيل الفعالية",
      About:"عن الدليل",
      Contact_us:"اتصل بنا",

      slide1_title: "عرض الألعاب النارية",
      slide1_par: "ليالي ساحرة في القرية العالمية",
      slide2_title: "عرض النافورة الراقصة",
      slide2_par: "مزيج من الموسيقى والماء والضوء",
      slide3_title: "المسرح العالمي",
      slide3_par: "عروض موسيقية وثقافية من حول العالم",


      bt_All: "الكل",
      bt_Food: "طعام",
      bt_Culture: "ثقافة",
      bt_Music: "موسيقى",
      bt_Families: "عائلي",


      title2: "أحدث الفعاليات في القرية العالمية",


      event1: "سوق العالم",
      event1_par: "تجربة تسوق فريدة من ثقافات متعددة حول العالم.",
      event1_bt: "التفاصيل",
      event2: "مهرجان الأطعمة",
      event2_par: "نكهات عالمية في أجواء احتفالية ممتعة لجميع الزوار.",
      event2_bt: "التفاصيل",
      event3: "عرض السيرك العالمي",
      event3_par: "أداء مبهر من فنانين عالميين يجمع الإثارة والمرح.",
      event3_bt: "التفاصيل",
      event4:"القرية ليلاً",
      event4_par:"أجواء مبهجة وإضاءة ساحرة تجعل كل ليلة لا تُنسى.",
      event4_bt:"التفاصيل",


      partners: "المشاركون في المشروع",


      footer_info: "© 2025 دليل فعاليات دبي | جميع الحقوق محفوظة",
      insta: "إنستغرام",
      X :"منصة ايكس",
      facebook:"فيسبوك",



      header_title2:"فعاليات القرية العالمية",
      header_par2:"استكشف جميع الفعاليات المميزة في دبي",
      card1_details:"24 أكتوبر - 15 أبريل | المسرح الرئيسي",
      card1_par:"مزيج ساحر من الموسيقى والماء والضوء يأسر الحضور.",
      card_bt:"التفاصيل",
      card2_details:"يوميًا طوال الموسم | المنطقة التجارية",
      card2_par:"تجربة تسوق فريدة من ثقافات متعددة حول العالم.",
      card3:"مهرجان الأطعمة العالمية",
      card3_details:"كل خميس وجمعة | ساحة الأطعمة",
      card3_par:"نكهات عالمية في أجواء احتفالية ممتعة لجميع الزوار.",
      card4_details:"كل سبت | الساحة الكبرى",
      card4_par:"أداء مبهر من فنانين عالميين يجمع الإثارة والمرح.",
      card5_details:"كل خميس وسبت | الساعة 9 مساءً",
      card5_par:"أضواء مذهلة تزين سماء دبي في أجمل ليالي الموسم.",
      card6_details:"طوال الموسم | موقع القرية",
      card6_par:"أجواء مبهجة وإضاءة ساحرة تجعل كل ليلة لا تُنسى.",



  } ,


 en: { 
        header_title: "Dubai Events Guide",

        Home: "Home",
        Events:"Events",
        Event_details:"Event details",
        About:"About",
        Contact_us:"Contact us",
        
        title1: "Events categories ",
        
        slide1_title: "Fireworks Show",
        slide1_par: "Magical nights at Global Village",
        slide2_title: "Dancing Fountain Show",
        slide2_par: "A blend of music, water, and light", 
        slide3_title: "Global Stage", 
        slide3_par: "Musical and cultural performances from around the world", 
        bt_All: "All", 
        bt_Food: "Food", 
        bt_Culture: "Culture", 
        bt_Music: "Music", 
        bt_Families: "Family", 
        title2: "Latest Events at Global Village", 
        event1: "World Market", 
        event1_par: "A unique shopping experience from diverse cultures around the world.", 
        event1_bt: "Details", 
        event2: "Food Festival", 
        event2_par: "Global flavors in a festive and joyful atmosphere for all visitors.", 
        event2_bt: "Details", 
        event3: "Global Circus Show", 
        event3_par: "An amazing performance by international artists combining thrill and fun.", 
        event3_bt: "Details", 
        event4: "Village by Night", 
        event4_par: "Joyful vibes and magical lighting that make every night unforgettable.", 
        event4_bt: "Details", 
        
        
        header_title2: "Global Village Events",
        header_par2: "Explore all the special events in Dubai",
        card1_details: "October 24 - April 15 | Main Stage",
        card1_par: "A magical combination of music, water, and light captivates audiences.",
        card_bt: "Details",
        card2_details: "Daily throughout the season | Retail District",
        card2_par: "A unique shopping experience spanning cultures from around the world.",
        card3: "International Food Festival",
        card3_details: "Every Thursday and Friday | Food Court",
        card3_par: "Global flavors in a festive atmosphere for all visitors.",
        card4_details: "Every Saturday | Grand Court",
        card4_par: "A dazzling performance by international artists that combines excitement and fun.",
        card5_details: "Every Thursday and Saturday | 9 PM",
        card5_par: "Stunning lights decorate the sky Dubai on the most beautiful nights of the season.",
        
        card6_details: "All season long | Village location.",
        
        card6_par: "A joyful atmosphere and magical lighting make every night unforgettable.",
        
        partners: "Project Partners", 
        footer_info: "© 2025 Dubai Events Guide | All rights reserved", 
        insta: "Instagram", 
        X: "X ", facebook: "Facebook",
      }
      
    }
      
      // ===============================
      // 🌍 Language Switcher with Flags
// ===============================

function changeLang(lang) {
  // حفظ اللغة بالـ localStorage
  localStorage.setItem("lang", lang);

  // تحديث اتجاه الصفحة ولغة الوسم
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  // ترجمة العناصر حسب data-translate 
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];


    }
  });

  // تحديث زر اللغة بالأعلام
  const button = document.getElementById("langDropdown");
  if (button) {
    if (lang === "ar") {
      button.innerHTML = '<span class="fi fi-ae"></span> العربية';
    } else {
      button.innerHTML = '<span class="fi fi-us"></span> English';
    }
  }
}

// تحميل اللغة المحفوظة عند فتح الصفحة
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  changeLang(savedLang);
});
