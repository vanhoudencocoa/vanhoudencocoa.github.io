const img = document.getElementById("hoverImage");
const originalSrc = "../images/snaur1.png";
const hoverSrc = "../images/snaur2.png";

img.addEventListener("mouseenter", () => {
  img.src = hoverSrc;
});

img.addEventListener("mouseleave", () => {
  img.src = originalSrc;
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
