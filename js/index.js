// BACEKNDLI QISM
const wrapperEL = document.querySelector(".cards__wrapper");
const lovebtn1El = document.querySelector(".lovebtn1");
const lovebtn2El = document.querySelector(".lovebtn2");

fetchProducts();
async function fetchProducts() {
  console.log("Iltimos kuting!");

  try {
    const result = await fetch("http://localhost:5000/products");
    const res = await result.json();

    console.log("Muvaffaqiyatli yakunlandi");

    const products = res.data;
    console.log(products);

    products.forEach((product) => {
      wrapperEL.appendChild(
        createCard(product.image, product.name, product.price)
      );
    });
  } catch (err) {
    console.log(err);
  }
}

function createCard(img, name, price) {
  const newElement = document.createElement("div");
  newElement.classList.add("cards__card");

  newElement.innerHTML = `
              <div class="cards__img"><img src="${img}" alt="" /></div>
              <p class="cards__card-title">${name}</p>
              <div class="card-price">
                <p class="cards__price">${price} $</p>
                <p class="cards__nas-price">462 000 so'm x 12 oy</p>
              </div>

              <div class="cards__btn-wrap">
                <a class="cards__card-btn" href=""><img class="icon" src="./assets/icons/icon.svg" alt=""></a>
                <a class="cards__card-btn1" href="">Muddatli to'lov</a>
              </div>
`;

  return newElement;
}

lovebtn1El.addEventListener("click", () => {
  if (lovebtn1El) {
    lovebtn2El.style.display = "block";
    lovebtn1El.style.display = "none";
  }
});

lovebtn2El.addEventListener("click", () => {
  if (lovebtn2El) {
    lovebtn2El.style.display = "none";
    lovebtn1El.style.display = "block";
  }
});

// OZIM

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");
  let autoDelay = 3000;
  let autoSlideInterval;

  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  function nextItem() {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextItem, autoDelay);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  document.querySelector(".prev").addEventListener("click", () => {
    stopAutoSlide();
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
    startAutoSlide();
  });

  document.querySelector(".next").addEventListener("click", () => {
    stopAutoSlide();
    nextItem();
    startAutoSlide();
  });

  startAutoSlide();
});

// TIME CARD
function startTimer(duration, hour, min, sec) {
  var timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveHours = 60 * 60 * 5;
  var hour = document.querySelector("#hour");
  var min = document.querySelector("#min");
  var sec = document.querySelector("#sec");

  startTimer(fiveHours, hour, min, sec);
};

// CORUSEL SECTION
document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".carousel-slide");
  const slides = document.querySelectorAll(".carousel-item");
  const leftArrow = document.querySelector(".leftArrow");
  const rightArrow = document.querySelector(".rightArrow");
  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }

  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 10;
    }
    updateSlidePosition();
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex < slides.length - 10) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlidePosition();
  });

  updateSlidePosition();
});

// CORUSEL_RED

document.addEventListener("DOMContentLoaded", function () {
  const slideContainerRed = document.querySelector(".carousel-slide-red");
  const slidesRed = document.querySelectorAll(".carousel-item-red");
  const leftArrowRed = document.querySelector(".leftArrow-red");
  const rightArrowRed = document.querySelector(".rightArrow-red");
  let currentIndex = 0;
  const slideWidth = slidesRed[0].clientWidth;

  function updateSlidePosition() {
    slideContainerRed.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }

  leftArrowRed.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slidesRed.length - 10; 
    }
    updateSlidePosition();
  });

  rightArrowRed.addEventListener("click", () => {
    if (currentIndex < slidesRed.length - 10) {
      currentIndex++;
    } else {
      currentIndex = 0; // Carousel'ning boshiga qaytish
    }
    updateSlidePosition();
  });

  updateSlidePosition(); // Sahifa yuklanganda slaydni yangilash
});

//TIMER SLIDER
// let startX;
// let currentIndex = 0;
// const cards = document.querySelectorAll(".card-wrapper");
// const totalCards = cards.length;

// function updateSliderPosition() {
//   const offset = -currentIndex * 100; // Move to the current card
//   cards.forEach((card) => {
//     card.style.transform = `translateX(${offset}%)`;
//   });
// }

// function handleTouchStart(event) {
//   startX = event.touches[0].clientX;
// }

// function handleTouchMove(event) {
//   const moveX = event.touches[0].clientX;
//   const diffX = startX - moveX;

//   if (diffX > 50) {
//     // Swipe left
//     if (currentIndex < totalCards - 1) {
//       currentIndex++;
//       updateSliderPosition();
//     }
//   } else if (diffX < -50) {
//     // Swipe right
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateSliderPosition();
//     }
//   }
// }

// const slider = document.querySelector(".slider");
// slider.addEventListener("touchstart", handleTouchStart);
// slider.addEventListener("touchmove", handleTouchMove);

// CORUSEL RED

// CARD AYLANISHI
const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;
let index = 0;
const totalSlides = document.querySelectorAll(".card-wrapper").length;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  snapToSlide();
  slider.style.cursor = "grab";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;

  const walk = (startX - x) * 1.5;
  slider.scrollLeft = scrollLeft + walk;
});

function snapToSlide() {
  let closestIndex = Math.round(slider.scrollLeft / 275);
  closestIndex = Math.max(0, Math.min(totalSlides - 1, closestIndex));
  console.log(closestIndex);

  slider.scrollTo({
    left: closestIndex * 275,

    behavior: "smooth",
  });
}

// slider.addEventListener("touchstart", (e) => {
//   isDown = true;
//   startX = e.touches[0].pageX;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("touchend", () => {
//   isDown = false;
//   snapToSlide();
// });

// slider.addEventListener("touchmove", (e) => {
//   if (!isDown) return;
//   const x = e.touches[0].pageX;
//   const walk = (startX - x) * 1.5;
//   slider.scrollLeft = scrollLeft + walk;
// });

// CHAT BOSGANDA CHIQISHI

document.getElementById("chat-icon").addEventListener("click", function () {
  document.getElementById("chat-window").style.display = "block";
});

document
  .getElementById("message-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    if (message) {
      const messageElement = document.createElement("div");
      messageElement.textContent = message;
      document.getElementById("chat-messages").appendChild(messageElement);
      messageInput.value = ""; // Inputni tozalash
      messageElement.scrollIntoView(); // Eng yangi xabarni ko'rsatish
    }
  });

function closeChat() {
  document.getElementById("chat-window").style.display = "none";
}

window.addEventListener("click", function (e) {
  const chatWindow = document.getElementById("chat-window");
  const chatIcon = document.getElementById("chat-icon");
  if (
    !chatWindow.contains(e.target) &&
    !chatIcon.contains(e.target) &&
    chatWindow.style.display === "block"
  ) {
    closeChat();
  }
});

///
const wrapperElemnt = document.querySelector(".famous__wrapper");
async function fetchProducts() {
  try {
    const result = await fetch("http://localhost:5000/products");
    const res = await result.json();
    const products = res.data;
    products.forEach((product) => {
      let become1 = product.price / 12;
      let become = become1.toFixed(3);
      let som = product.price * 2;
      let som1 = som.toFixed(3);
      wrapperElemnt.appendChild(
        createCard(product.image, product.name, become, product.price)
      );
    });
  } catch (err) {
    console.log(err);
  }
}
fetchProducts();
let newElement;
function createCard(img, name, become, price) {
  newElement = document.createElement("div");
  newElement.classList.add("card2");
  newElement.innerHTML = `
            <div class="img">
                <i class="fa-regular fa-heart"></i>
                <svg class="comparison" data-v-eb40fcb7="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="none"
                                fill="grey" class="icon icon__comparison">
                                <rect data-v-eb40fcb7="" x="3.25" y="15" width="2.5" height="7" rx="1.25"></rect>
                                <rect data-v-eb40fcb7="" x="8.25" y="3" width="2.5" height="19" rx="1.25"></rect>
                                <rect data-v-eb40fcb7="" x="13.25" y="11" width="2.5" height="11" rx="1.25"></rect>
                                <rect data-v-eb40fcb7="" x="18.25" y="7" width="2.5" height="15" rx="1.25"></rect>
                </svg>
                <img src="${img}" alt="">
            </div>
            <div class="all">
                <h4 class="name">${name}</h4>
                <h5 class="price">${price}$</h5>
                <h6 class="become">${become}$ x 12oyiga</h6>
                <div class="shop">
            
              
                </div>
            </div>`;
  const heartIcon = newElement.querySelector(".fa-heart");
  heartIcon.addEventListener("click", function () {
    if (heartIcon.classList.contains("fa-regular")) {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
      heartIcon.style.transition = "transform 0.2s ease";
    } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
    }
  });
  const comparisonIcon = newElement.querySelector(".comparison");
  console.log(comparisonIcon);
  comparisonIcon.addEventListener("click", function () {
    let currentFill = comparisonIcon.style.fill;
    if (currentFill === "gray") {
      comparisonIcon.style.fill = "red"; // Agar fill grey bo'lsa, red qil
    } else {
      comparisonIcon.style.fill = "gray"; // Aks holda green qil
    }
  });
  return newElement;
}
