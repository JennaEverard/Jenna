document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.createElement("div");
  overlay.className = "multiverse-popup-overlay";

  overlay.innerHTML = `
    <div class="multiverse-popup">
      <span class="multiverse-close">×</span>
      <img src="" alt="">
    </div>
  `;

  document.body.appendChild(overlay);

  const popupImg = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".multiverse-close");

  document.querySelectorAll(".multiverse-scope .thumbnail").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      popupImg.src = this.getAttribute("href");
      overlay.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
});
