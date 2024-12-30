let chingachung_left = document.querySelector(".chingachung_left");
let chingachung_right = document.querySelector(".chingachung_right");

let container = document.querySelector(".container");

let animLeft = document.querySelector(".anim_left");
let animRight = document.querySelector(".anim_right");

const qar = document.querySelector(".qar");
const tuxt = document.querySelector(".tuxt");
const mkrat = document.querySelector(".mkrat");

const player = document.querySelector(".player-patern");
const computer = document.querySelector(".computer-patern");

const playerPoint = document.querySelector(".point_1");
const computerPoint = document.querySelector(".point_2");

let PlayerCurentPoint = 0;
let ComputerCurentPoint = 0;

//img
const compurtImg = document.querySelector(".compurt_img");
const playerImg = document.querySelector(".player_img");

// box background
const playerBox = document.querySelector(".player_box");
const computerBox = document.querySelector(".computer_box");

let img = ["img/rock.png", "img/paper.png", "img/scissors.png"];
let imgAnim = [
  "img/rock_left.png",
  "img/rock_right.png",
  "img/peper_left.png",
  "img/peper_right.png",
  "img/mkrat_left.png",
  "img/mkrat_right.png",
];

const nshanArray = ["ՔԱՐ", "ԹՈՒՂԹ", "ՄԿՐԱՏ"];
const randomNshan = Math.floor(Math.random() * nshanArray.length);

//clicks;
qar.addEventListener("click", () => {
  const nshanArray = ["ՔԱՐ", "ԹՈՒՂԹ", "ՄԿՐԱՏ"];
  const randomNshan = Math.floor(Math.random() * nshanArray.length);
  chingachung_left.style.animation =
    "slide-bottom 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6 alternate both";
  chingachung_right.style.animation =
    "slide-bottom 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6 alternate both";
  animLeft.setAttribute("src", imgAnim[0]);
  animRight.setAttribute("src", imgAnim[1]);
  setTimeout(() => {
    player.textContent = nshanArray[0];
    computer.textContent = nshanArray[randomNshan];
    if (
      player.textContent == nshanArray[0] &&
      computer.textContent == nshanArray[1]
    ) {
      playerImg.setAttribute("src", img[0]);
      compurtImg.setAttribute("src", img[1]);

      animLeft.setAttribute("src", imgAnim[0]);
      animRight.setAttribute("src", imgAnim[3]);
      computerPoint.textContent = ComputerCurentPoint += 1;
      container.style.backgroundColor = "#EB5353";
    } else if (
      player.textContent == nshanArray[0] &&
      computer.textContent == nshanArray[2]
    ) {
      playerImg.setAttribute("src", img[0]);
      compurtImg.setAttribute("src", img[2]);
      animLeft.setAttribute("src", imgAnim[0]);
      animRight.setAttribute("src", imgAnim[5]);
      playerPoint.textContent = PlayerCurentPoint += 1;
      container.style.backgroundColor = "#36AE7C";
    } else if (
      player.textContent == nshanArray[0] &&
      computer.textContent == nshanArray[0]
    ) {
      playerImg.setAttribute("src", img[0]);
      compurtImg.setAttribute("src", img[0]);
      container.style.backgroundColor = "#F9D923";
    }
    chingachung_left.style.animation = "";
    chingachung_right.style.animation = "";
  }, 1600);
});

tuxt.addEventListener("click", () => {
  const nshanArray = ["ՔԱՐ", "ԹՈՒՂԹ", "ՄԿՐԱՏ"];
  const randomNshan = Math.floor(Math.random() * nshanArray.length);
  chingachung_left.style.animation =
    "slide-bottom 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6 alternate both";
  chingachung_right.style.animation =
    "slide-bottom 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6 alternate both";
  animLeft.setAttribute("src", imgAnim[0]);
  animRight.setAttribute("src", imgAnim[1]);

  setTimeout(() => {
    player.textContent = nshanArray[1];
    computer.textContent = nshanArray[randomNshan];
    if (
      player.textContent == nshanArray[1] &&
      computer.textContent == nshanArray[0]
    ) {
      playerImg.setAttribute("src", img[1]);
      compurtImg.setAttribute("src", img[0]);
      animLeft.setAttribute("src", imgAnim[2]);
      animRight.setAttribute("src", imgAnim[1]);
      playerPoint.textContent = PlayerCurentPoint += 1;
      container.style.backgroundColor = "#36AE7C";
    } else if (
      player.textContent == nshanArray[1] &&
      computer.textContent == nshanArray[1]
    ) {
      playerImg.setAttribute("src", img[1]);
      compurtImg.setAttribute("src", img[1]);
      animLeft.setAttribute("src", imgAnim[2]);
      animRight.setAttribute("src", imgAnim[3]);
      container.style.backgroundColor = "#F9D923";
    } else if (
      player.textContent == nshanArray[1] &&
      computer.textContent == nshanArray[2]
    ) {
      playerImg.setAttribute("src", img[1]);
      compurtImg.setAttribute("src", img[2]);
      animLeft.setAttribute("src", imgAnim[2]);
      animRight.setAttribute("src", imgAnim[5]);
      computerPoint.textContent = ComputerCurentPoint += 1;
      container.style.backgroundColor = "#EB5353";
    }
    chingachung_left.style.animation = "";
    chingachung_right.style.animation = "";
  }, 1600);
});

mkrat.addEventListener("click", () => {
  const nshanArray = ["ՔԱՐ", "ԹՈՒՂԹ", "ՄԿՐԱՏ"];
  const randomNshan = Math.floor(Math.random() * nshanArray.length);
  chingachung_left.style.animation =
    "slide-bottom 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6 alternate both";
  chingachung_right.style.animation =
    "slide-bottom 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6 alternate both";
  animLeft.setAttribute("src", imgAnim[0]);
  animRight.setAttribute("src", imgAnim[1]);

  setTimeout(() => {
    player.textContent = nshanArray[2];
    computer.textContent = nshanArray[randomNshan];

    if (
      player.textContent == nshanArray[2] &&
      computer.textContent == nshanArray[0]
    ) {
      playerImg.setAttribute("src", img[2]);
      compurtImg.setAttribute("src", img[0]);
      animLeft.setAttribute("src", imgAnim[4]);
      animRight.setAttribute("src", imgAnim[1]);
      computerPoint.textContent = ComputerCurentPoint += 1;
      container.style.backgroundColor = "#EB5353";
    } else if (
      player.textContent == nshanArray[2] &&
      computer.textContent == nshanArray[1]
    ) {
      playerImg.setAttribute("src", img[2]);
      compurtImg.setAttribute("src", img[1]);
      animLeft.setAttribute("src", imgAnim[4]);
      animRight.setAttribute("src", imgAnim[3]);
      playerPoint.textContent = PlayerCurentPoint += 1;
      container.style.backgroundColor = "#36AE7C";
    } else if (
      player.textContent == nshanArray[2] &&
      computer.textContent == nshanArray[2]
    ) {
      playerImg.setAttribute("src", img[2]);
      compurtImg.setAttribute("src", img[2]);
      animLeft.setAttribute("src", imgAnim[4]);
      animRight.setAttribute("src", imgAnim[5]);
      container.style.backgroundColor = "#F9D923";
    }
    chingachung_left.style.animation = "";
    chingachung_right.style.animation = "";
  }, 1600);
});