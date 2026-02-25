const body = document.body;
const hexa = document.getElementById("hexCode");
const copyButton = document.getElementById("copyBtn");

function makeRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color = color + letters[randomNumber];
  }

  return color;
}

// function updateTextTheme(color) {
//   let red = parseInt(color.substring(1, 3), 16);
//   let green = parseInt(color.substring(3, 5), 16);
//   let blue = parseInt(color.substring(5, 7), 16);
//   let total = red + green + blue;

//   if (total > 382) {
//     body.classList.add("light-ui");
//   } else {
//     body.classList.remove("light-ui");
//   }
// }

function changeColor() {
  let newColor = makeRandomColor();
  body.style.backgroundColor = newColor;
  hexa.innerText = newColor;
  updateTextTheme(newColor);
}

function copyColorCode() {
  let textToCopy = hexa.innerText;

  navigator.clipboard.writeText(textToCopy).then(function () {
    copyButton.innerText = "Copied!";
    setTimeout(function () {
      copyButton.innerText = "Copy";
    }, 1000);
  });
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    changeColor();
  }
});

copyButton.addEventListener("click", copyColorCode);

changeColor();

