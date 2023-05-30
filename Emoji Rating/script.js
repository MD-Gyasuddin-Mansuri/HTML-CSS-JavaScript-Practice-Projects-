// const starsEl = document.querySelectorAll(".fa-star");
// const emojisEl = document.querySelectorAll(".far");
// const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

// updateRating(0);

// starsEl.forEach((starsEl, index) => {
//   starsEl.addEventListener("click", () => {
//     updateRating(index);
//   });
// });

// function updateRating(index) {
//   starsEl.forEach((starsEl, i) => {
//     if (i <= index) {
//       starsEl.classList.add("active");
//     } else {
//       starsEl.classList.remove("active");
//     }
//   });

//   emojisEl.forEach((emojiEl) => {
//     emojiEl.style.transform = `translateX(-${index * 50}px)`;
//     emojiEl.style.color = colorsArray[index];
//   });
// }

// -------------------------------------------------------------------------------------

const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsEl.forEach((starsEl, index) => {
  starsEl.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((starsEl, i) => {
    if (i <= index) {
      starsEl.classList.add("active");
    } else {
      starsEl.classList.remove("active");
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorArray[index];
  });
}

// ------------------------------------------------------------------------------------------

// const starsEl = document.querySelectorAll(".fa-star");
// const emojisEl = document.querySelectorAll(".far");
// const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

// updateRating(0);

// starsEl.foreach((starsEl, index) => {
//   starsEl.addEventlistener("click", () => {
//     updateRating(index);
//   });
// });

// function updateRating(index) {
//   starsEl.forEach((starsEl, i) => {
//     if (i <= index) {
//       starsEl.classList.add("active");
//     } else {
//       starsEl.classList.remove("active");
//     }
//   });

//   emojisEl.forEach((emojiEl) => {
//     emojiEl.style.transform = `translateX(-${index * 50}px)`;
//     emojiEl.style.color = colorsArray[index];
//   });
// }
