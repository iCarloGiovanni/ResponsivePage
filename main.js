let slideIndex = 0;

window.onload = function () {
  openTab("mountain1");
  showSlides();
};

function openTab(tabName) {
  var i, tabcontent, tabs;
  tabcontent = document.getElementsByClassName("tabcontent");
  tabs = document
    .getElementsByClassName("tabs")[0]
    .getElementsByTagName("button");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  document
    .querySelector(`.tabs button[onclick="openTab('${tabName}')"]`)
    .classList.add("active");
}

function showSlides() {
  let i;
  if (window.innerWidth <= 768) {
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000);
  }
}
