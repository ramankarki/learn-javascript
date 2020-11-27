const switchBtn = document.querySelector(".switch-btn");
const switchBtnTrack = document.querySelector(".switch-track");

const dayIcon = document.querySelector(".switch-iconDay");
const nightIcon = document.querySelector(".switch-iconNight");
let activeIcon = {
  day: "image/day-active.svg",
  night: "image/night.svg"
};

let switchActiveIcon = () => {
  if (activeIcon["day"] === "image/day-active.svg") {
    activeIcon["day"] = "image/day.svg";
  } else {
    activeIcon["day"] = "image/day-active.svg";
  }
  if (activeIcon["night"] === "image/night.svg") {
    activeIcon["night"] = "image/night-active.svg";
  } else {
    activeIcon["night"] = "image/night.svg";
  }
}

switchBtn.addEventListener("click", () => {
  switchBtn.classList.toggle("switch-btnActive");
  switchBtnTrack.classList.toggle("switch-trackActive");
  switchActiveIcon();
  dayIcon.src = activeIcon["day"];
  nightIcon.src = activeIcon["night"];
});
