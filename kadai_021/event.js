const changeBtn = document.getElementById("btn");
const text = document.getElementById("text");

changeBtn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000)
});