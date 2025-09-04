const img = document.getElementById("hoverImage");
//const img = document.getElementsByClassName("hanging");
const originalSrc = "images/0905a.png";
const hoverSrc = "images/0905b.png";

img.addEventListener("mouseenter", () => {
  img.src = hoverSrc;
});

img.addEventListener("mouseleave", () => {
  img.src = originalSrc;
});

img.addEventListener("click", () => {
  img.classList.remove("zoom-animation");
  void img.offsetWidth;
  img.classList.add("zoom-animation");
});
/*let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to the website, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to the website, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};*/
