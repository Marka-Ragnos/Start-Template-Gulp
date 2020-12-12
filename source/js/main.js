// ---------------- Слайдер на чистом JS ---------------
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector(".slider__container");
const track = document.querySelector(".slider__track");
const btnNext = document.querySelector(".slider__btn-next");
const btnPrev = document.querySelector(".slider__btn-prev");
const items = document.querySelectorAll(".slider__item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
   item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener("click", () => {
   const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

   position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
   setPosition();
   checkButtons();
});

btnPrev.addEventListener("click", () => {
   const itemsLeft = Math.abs(position) / itemWidth;

   position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
   setPosition();
   checkButtons();
});

const setPosition = () => {
   track.style.transform = `translateX(${position}px)`;
};

const checkButtons = () => {
   btnPrev.disabled = position === 0;
   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkButtons();

// ------------------ Слайдер на Jquery -------------------------

// $(document).ready(function () {
//    let position = 0;
//    const slidesToShow = 4;
//    const slidesToScroll = 1;
//    const container = $(".slider__container");
//    const track = $(".slider__track");
//    const item = $(".slider__item");
//    const btnNext = $(".slider__btn-next");
//    const btnPrev = $(".slider__btn-prev");
//    const itemsCount = item.length;
//    const itemWidth = container.width() / slidesToShow;
//    const movePosition = slidesToScroll * itemWidth;

//    item.each(function (index, item) {
//       $(item).css({
//          minWidth: itemWidth,
//       });
//    });

//    btnNext.click(function () {
//       const itemsLeft =
//          itemsCount -
//          (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//       position -=
//          itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//       setPosition();
//       checkButtons();
//    });

//    btnPrev.click(function () {
//       const itemsLeft = Math.abs(position) / itemWidth;

//       position +=
//          itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//       setPosition();
//       checkButtons();
//    });

//    const setPosition = () => {
//       track.css({
//          transform: `translateX(${position}px)`,
//       });
//    };

//    const checkButtons = () => {
//       btnPrev.prop("disabled", position === 0);
//       btnNext.prop(
//          "disabled",
//          position <= -(itemsCount - slidesToShow) * itemWidth
//       );
//    };

//    checkButtons();
// });
