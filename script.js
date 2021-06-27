"use strict";
const buttons = document.querySelectorAll(".btn");
const audios = [];
const decode_button = document.querySelector(".decode");
const overlay = document.querySelector(".remove");
const button = document.querySelector("button");
const infopage = document.querySelector(".hidden");
const note = document.querySelector(".info");
const heading = document.querySelector(".heading");
const closemedia =document.querySelector('.closemedia');
//_______---------------------trial-----------------------______
//_______-------------------------------------------------______
// let randomint = (min, max) => {
//   Math.floor(Math.random * (max - min + 1) + min);
// };
// let randomcolor = () => {
//   return `rgb(${randomint(0, 255)},${randomint(0, 255)},${randomint(0, 255)})`;
// };
// let colors = function(){`rgb(
//    Math.trunc(255 * Math.random() + 1),
//    Math.trunc(255 * Math.random() + 1),
//    Math.trunc(255 * Math.random() + 1)
//  )`};MY STYLE ......

for (let i = 0; i < 8; i++) {
  audios[i] = new Audio(`music${i + 1}.mp3`);
}
closemedia.addEventListener("click",function(){
  infopage.classList.remove('hover');
   infopage.classList.add('hidden');
});

decode_button.addEventListener("click", function (e) {
  overlay.classList.add("decoded_page");
  overlay.classList.remove("remove");
});
note.addEventListener("click", function (e) {
  infopage.classList.add("hover");
  infopage.classList.remove("hidden");
});
// for escaping from decoder section
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    // infopage.classList.add("hidden");
    overlay.classList.add("remove");
    infopage.classList.add("hidden");
    infopage.classList.remove("hover");
  }
});
// for playing music

  buttons.forEach( addEventListener("click", function (e) {
    let otarget = e.target;
    otarget.classList.remove("bluecolor"); // worked after trying for atleast 2 hrs
    for (let i = 0; i < 8; i++) {
      if (audios[i].paused) {
        if (otarget.getAttribute("class") === `btn btn_${i}`) {
          audios[i].play();
          // var current =document.querySelector(`.btn_${i}`);
          // console.log(current);
          // current.classList.add('bluecolor');
          otarget.classList.add("bluecolor");
        }
      } else {
        if (otarget.getAttribute("class") === `btn btn_${i}`) {
          // current.classList.remove('bluecolor');
          // if (!audios[i].paused) {
          //   let current = document.querySelector(`.btn_${i}`);
          //   console.log(current);

          //   current.classList.remove("bluecolor");
          // }

          audios[i].pause();
        }
      }
    }
  })
);

note.addEventListener("click", function (e) {
  infopage.classList.add("hover");
  infopage.classList.remove("hidden");
});


