const headerContainer = document.querySelector(".header-container");
const header = document.querySelector(".header")
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerContainer = document.querySelector(".hamburger-container");
const back = document.querySelector(".x");
const allContentContainer = document.querySelector(".all-content-container");


hamburgerBtn.addEventListener("click", hamburger);

function hamburger(){
  if(hamburgerBtn.click){
    hamburgerContainer.style.display = "unset";
    hamburgerContainer.style.display = "flex";
    headerContainer.style.filter = "blur(2px)";
    hamburgerContainer.style.position = "fixed";
    allContentContainer.style.filter = "blur(2px)";
    header.style.filter = "blur(2px)";
  }
}

back.addEventListener("click", backBtn);

function backBtn(){
  if(back.click){
    hamburgerContainer.style.display = "none"
    headerContainer.style.filter = "blur(0px)";
    allContentContainer.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)"
  }
}