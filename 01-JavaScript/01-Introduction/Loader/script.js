// window.addEventListener("load", () => {
//   const loader = document.getElementById("loader");
//   const content = document.getElementById("content");

//   setTimeout(() => {
//     loader.style.opacity = "0";
//     loader.style.transition = "opacity 0.5s ease";

//     setTimeout(() => {
//       loader.style.display = "none";
//       content.style.display = "block";
//     }, 500);
//   }, 2000);
// });

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000);
});