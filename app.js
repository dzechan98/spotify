const closeBtn = document.querySelector(".close");
const bars = document.querySelector(".bars");
const headerList = document.querySelector(".header__list");
const navigation = document.querySelector(".navigation");
bars.addEventListener("click", () => {
  navigation.style.right = "0";
  navigation.style.opacity = 1;
});
closeBtn.addEventListener("click", () => {
  navigation.style.right = "-100%";
  navigation.style.opacity = 0;
});
