/* =======================================
    Creating A Portfolio Tabbed Component
   ======================================= */

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_click = e.target;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_click.classList.add("p-btn-active");
  console.log(p_btn_click);

  const btn_num = p_btn_click.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active"),
  );
});

/* =======================================
    SWIPER ANIMATION
   ======================================= */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* =======================================
    SCROLL TO TOP FUNCTIONALITY
   ======================================= */
const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

function scrollTop() {
  heroSection.scrollIntoView({ behavior: "smooth" });
}

scrollElement.addEventListener("click", scrollTop);
