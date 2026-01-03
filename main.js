const langSelect = document.getElementById("langSelect");
const langMenu = document.getElementById("langMenu");
const currentFlag = document.getElementById("currentFlag");
const currentLang = document.getElementById("currentLang");

langSelect.addEventListener("click", () => {
  langMenu.classList.toggle("show");
});

// Смена языка
langMenu.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    const flagClass = item.getAttribute("data-flag");
    const langText = item.getAttribute("data-text");

    currentFlag.className = `fi ${flagClass} flag`;
    currentLang.textContent = langText;

    langMenu.classList.remove("show");
  });
});

// Закрытие при клике вне
document.addEventListener("click", (e) => {
  if (!langSelect.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove("show");
  }
});
