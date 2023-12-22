// document.addEventListener("click", (event) => {
//   const clickButton = event.target.matches("[data-show-button]");
//   if (!clickButton && event.target.closest("[data-show]") != null) return;

//   let currentShow;
//   if (clickButton) {
//     currentShow = event.target.closest("[data-show]");
//     currentShow.classList.toggle("active");
//   }

//   document.querySelectorAll("[data-show].active").forEach((ele) => {
//     if (ele === currentShow) return;
//     ele.classList.remove("active");
//   });
// });

(() => {
  let slideIndex = 1;
  const NumberOfSlide = 3;
  function changeIndex(number) {
    if (slideIndex + number > NumberOfSlide) {
      slideIndex = 1;
    } else if (slideIndex + number < 1) {
      slideIndex = NumberOfSlide;
    } else {
      slideIndex += number;
    }
  }

  let currentSlide;
  let currentNav;
  function showSlide(slideIndex) {
    currentSlide = document.querySelector(`[data-slide='${slideIndex}'].slide`);
    currentSlide.classList.add("active");
    currentNav = document.querySelector(`[data-slide='${slideIndex}'].nav`);
    currentNav.classList.add("active");
  }

  function hideSlide() {
    currentSlide.classList.remove("active");
    currentNav.classList.remove("active");
  }

  document.querySelector(".next").addEventListener("click", () => {
    hideSlide();
    changeIndex(1);
    showSlide(slideIndex);
  });

  document.querySelector(".pre").addEventListener("click", () => {
    hideSlide();
    changeIndex(-1);
    showSlide(slideIndex);
  });

  document.querySelectorAll(".nav").forEach((nav) => {
    nav.addEventListener("click", () => {
      hideSlide();
      slideIndex = Number(nav.dataset.slide);
      showSlide(slideIndex);
    });
  });

  showSlide(slideIndex);
  setInterval(() => {
    hideSlide();
    changeIndex(1);
    showSlide(slideIndex);
  }, 5000);
})();
