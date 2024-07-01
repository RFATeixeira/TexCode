const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
//Adicionar um Event Listener
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
