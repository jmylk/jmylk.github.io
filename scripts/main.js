const ListItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

ListItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/立绘_林_1.png") {
    myImage.setAttribute("src", "images/立绘_林_2.png");
  } else {
    myImage.setAttribute("src", "images/立绘_林_1.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is lk's waifu Lin, ${myName},you son of bitch.`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `This is lk's waifu Lin, ${storedName},you son of bitch.`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
