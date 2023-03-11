/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";
import "../styles/section.scss";
import "../styles/summary-box.scss";
import "../styles/summary-text.scss";
import "../styles/summary-plan.scss";
import "../styles/loader.scss";

const btn = document.getElementById("proceed-btn");
const loader = document.getElementById("loader");
const percent = document.getElementById("percent");
const progress = document.getElementById("progress");

let count = 4;
let per = 8;
let loading;

const animate = () => {
  if (count === 100) {
    clearInterval(loading);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } else {
    per += 3;
    count += 1;
    progress.style.width = per + "px";
    percent.textContent = count + "%";
  }
};

btn.addEventListener("click", () => {
  btn.classList.add("c-summary-box__payment-btn--hide");
  loader.classList.add("c-loader--active");
  loading = setInterval(animate, 20);
});
