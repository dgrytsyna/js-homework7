//Задание 1
let $ = document;
let inputDiv = document.getElementById("input-div");
let userName = inputDiv.querySelector(".inputEnterName");
let result = document.getElementById("result");

userName.addEventListener("input", control, false);

function control(ev) {
  if (
    ev.data === "1" ||
    ev.data === "2" ||
    ev.data === "3" ||
    ev.data === "4" ||
    ev.data === "5" ||
    ev.data === "6" ||
    ev.data === "7" ||
    ev.data === "8" ||
    ev.data === "9" ||
    ev.data === "0"
  ) {
    let arr = Array.from(userName.value).slice(0, -1);
    userName.value = arr.join("");
    result.innerHTML = `You entered ${ev.data}. Name can't contain digits!`;
  }
}
// Задание 3
field.onclick = function(event) {
  let fieldCoords = this.getBoundingClientRect();
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
  };
  if (ballCoords.top < 0) ballCoords.top = 0;
  if (ballCoords.left < 0) ballCoords.left = 0;
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
};
//Задание 4
let btn = document.getElementById("buttonNext");
let activeLight = document.querySelector(".active");
let startFunction = "next";

btn.onclick = function() {
  if (startFunction === "next") {
    next();
  } else {
    back();
  }
};

function next() {
  let activeLight = document.querySelector(".active");
  if (activeLight.nextElementSibling !== null) {
    activeLight.classList.remove("active");
    activeLight.nextElementSibling.classList.add("active");
  }
  if (activeLight.nextElementSibling === null) {
    startFunction = "back";
    back();
  }
}

function back() {
  activeLight = document.querySelector(".active");
  if (activeLight.previousElementSibling !== null) {
    activeLight.classList.remove("active");
    activeLight.previousElementSibling.classList.add("active");
  }
  if (activeLight.previousElementSibling.previousElementSibling === null) {
    startFunction = "next";
  }
}
//Задание 6
let listBooks = document.querySelector("#list-books-div .list-of-books");

listBooks.addEventListener("click", chooseBook);

function chooseBook(el) {
  if (el.target.matches(".list-book")) {
    if (el.target.matches(".bg-info")) {
      return el.target.classList.toggle("bg-info");
    }
    if (listBooks.querySelector(".bg-info") !== null) {
      listBooks.querySelector(".bg-info").classList.remove("bg-info");
    }
    el.target.classList.add("bg-info");
  }
}
