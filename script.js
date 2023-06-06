// const slider = document.querySelector('.slider');
// const sliderItem = document.querySelectorAll('.slider li');
// const leftArrow = document.querySelector('.left');
// const rightArrow = document.querySelector('.right');
// const sliderControls = document.querySelectorAll('.slider-control li');

// let sectionIndex = 0;

// sliderControls.forEach((sliderControl, indx) => {
//   sliderControl.addEventListener('click', (e) => {
//     sectionIndex = indx;
//     sliderControls.forEach((sliderControl) => {
//       sliderControl.classList.remove('active');
//     });
//     sliderControl.classList.add('active');
//     slider.style.transform = 'translateX(' + sectionIndex * -600 + 'px)';
//   });
// });

// rightArrow.addEventListener('click', (e) => {
//   sectionIndex =
//     sectionIndex < sliderItem.length - 1
//       ? sectionIndex + 1
//       : sliderItem.length - 1;

//   sliderControls.forEach((sliderControl) => {
//     sliderControl.classList.remove('active');
//   });

//   sliderControls[sectionIndex].classList.add('active');
//   slider.style.transform = 'translateX(' + sectionIndex * -600 + 'px)';
// });

// leftArrow.addEventListener('click', (e) => {
//   sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;

//   sliderControls.forEach((sliderControl) => {
//     sliderControl.classList.remove('active');
//   });

//   sliderControls[sectionIndex].classList.add('active');
//   slider.style.transform = 'translateX(' + sectionIndex * -600 + 'px)';
// });

(function (window) {
  const slider = document.querySelector('.slider');
  const sliderItem = document.querySelectorAll('.slider li');
  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');
  const sliderControls = document.querySelectorAll('.slider-control li');

  let sectionIndex = 0;

  sliderControls.forEach((sliderControl, indx) => {
    sliderControl.addEventListener('click', (e) => {
      sectionIndex = indx;
      sliderControls.forEach((sliderControl) => {
        sliderControl.classList.remove('active');
      });
      sliderControl.classList.add('active');
      slider.style.transform = 'translateX(' + sectionIndex * -600 + 'px)';
    });
  });

  rightArrow.addEventListener('click', (e) => {
    sectionIndex =
      sectionIndex < sliderItem.length - 1
        ? sectionIndex + 1
        : sliderItem.length - 1;

    sliderControls.forEach((sliderControl) => {
      sliderControl.classList.remove('active');
    });

    sliderControls[sectionIndex].classList.add('active');
    slider.style.transform = 'translateX(' + sectionIndex * -600 + 'px)';
  });

  leftArrow.addEventListener('click', (e) => {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;

    sliderControls.forEach((sliderControl) => {
      sliderControl.classList.remove('active');
    });

    sliderControls[sectionIndex].classList.add('active');
    slider.style.transform = 'translateX(' + sectionIndex * -600 + 'px)';
  });
})(window);
