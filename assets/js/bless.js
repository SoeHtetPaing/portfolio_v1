let pj = document.querySelector('#pj-content');

const pj_link = [
    [
      'Sample Button Design',
      'ရိုးရှင်းသော Button Design တစ်ခုဖြစ်ပြီး HTML CSS Testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_button/',
      'project-1.png',
      ['CSS', 'HTML'],
      '7 May 2024',
    ],
    [
      'Rotate Animation',
      'ဘော်လုံးကို 360ဒီဂရီ Rotate လုပ်ထားတာဖြစ်ပြီး CSS animation testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_rotate/',
      'project-2.png',
      ['CSS', 'HTML'],
      '7 May 2024',
    ],
    [
      'CSS Box & Load Aimation',
      'Sample page loading နှင့် CSS box animation ကို CSS animation testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_animate/',
      'project-3.png',
      ['CSS', 'HTML'],
      '9 May 2024',
    ],
    [
      'Pageload Animation',
      'Page loading animation ကို CSS animation testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_pageload/',
      'project-4.png',
      ['CSS'],
      '7 May 2024',
    ],
    [
      'Marketing Item Card',
      'Shopping website တွေမှာတွေ့ရတဲ့ item card design ကို HTML CSS testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_card/',
      'project-5.png',
      ['CSS', 'HTML'],
      '7 May 2024',
    ],
    [
      'Marketing Item Card v1',
      'Shopping website တွေမှာတွေ့ရတဲ့ item card design ကို HTML CSS testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_card_v1/',
      'project-6.png',
      ['CSS', 'HTML'],
      '7 May 2024',
    ],
    [
      'Blog Place Card',
      'Personal blogs တွေမှာတွေ့ရတဲ့ place card design ကို HTML CSS testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_place_card/',
      'project-7.png',
      ['CSS', 'HTML'],
      '7 May 2024',
    ],
    [
      'Restaurant Menu Card',
      'Restaurants တွေမှာတွေ့ရတဲ့ menu card design ကို HTML CSS testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_menu_card/',
      'project-8.png',
      ['CSS', 'HTML'],
      '8 May 2024',
    ],
    [
      'Image Details Card',
      'Advisor blogs တွေမှာတွေ့ရတဲ့ image details card design ကို HTML CSS testing အနေနဲ့ coding လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_assign_img_card/',
      'project-9.png',
      ['CSS', 'HTML'],
      '8 May 2024',
    ],
    [
      'Login Design',
      'Page Authenication တွေမှာတွေ့ရတဲ့ login page ကို ကျွန်တော့်စိတ်ကြိုက် design လုပ်ထားတာဖြစ်ပါတယ်။',
      'https://soehtetpaing.github.io/softguide_test_login/',
      'project-10.png',
      ['CSS', 'HTML'],
      '10 May 2024',
    ],
    [
      'My Portfolio',
      'ကျွန်တော့်ရဲ့ Personal portfolio page မှာ HTML, CSS, Bootstrap, JavaScript, animate.css, scrollreavel.js တို့ကို အသုံးပြုပြီး designing & coding လုပ်ထားပါတယ်။',
      'https://soehtetpaing.github.io/portfolio_v1/',
      'project-11.png',
      ['JS', 'BS', 'CSS', 'HTML'],
      '12 May 2024',
    ],
];
let pj_content = '';

for (let index = pj_link.length - 1; index >= 0; index--) {
    const title = pj_link[index][0];
    const desc = pj_link[index][1];
    const link = pj_link[index][2];
    const img = pj_link[index][3];
    const tools = pj_link[index][4];
    let tools_btn = '';
    for (let tool = 0; tool < tools.length; tool++) {
      tools_btn += `
        <button class="monospace">${tools[tool]}</button>
      `;  
    }
    const upload_date = pj_link[index][5]

    pj_content += `
        <div class="pj-card animate__animated animate__zoomIn">
              <div class="pj-card-header">
                <img src="./assets/project/${img}" alt="${img}">
                <p class="tool-bars">
                  ${tools_btn}
                </p>
                <h5 class="serif">${title}</h5>
              </div>
              <div class="pj-card-content serif">
                <address><i class="bi bi-calendar-plus"></i>&emsp;${upload_date}</address>
                <p>
                  ${desc}
                </p>
                <a href="${link}"><button class="sans-serif">VIEW PROJECT</button></a>
              </div>
        </div>
    `;
}

pj.innerHTML = pj_content;


//scroll move sticky icon change
const heroHeader = document.querySelector('.hero__icon--container');

const moveBtn = (e) => {
  const heroIcon = document.querySelector('.hero__icon');
  if (!e[0].isIntersecting) {
    heroIcon.classList.add('flying__icon');
  }
  if (e[0].isIntersecting) {
    heroIcon.classList.remove('flying__icon');
  }
}

const moveBtnIntersectionObs = new IntersectionObserver(moveBtn);
moveBtnIntersectionObs.observe(heroHeader);


//use scroll reveal
ScrollReveal().reveal('#skill-profile', { delay: 500 });
ScrollReveal().reveal('#skill-experience', { delay: 1000 });
ScrollReveal().reveal('#projects', { delay: 1500 });
ScrollReveal().reveal('#contact', { delay: 1700 });
