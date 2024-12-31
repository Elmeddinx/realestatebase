$(function () {
  var $fotorama = $('#fotorama').fotorama().data('fotorama');


  $('.fotorama').on('click', function () {
    $fotorama.requestFullScreen();
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const fotoramaStage = document.querySelector(".fotorama__stage");
  const fotoramaImages = document.querySelectorAll(".fotorama__img");

  function updateBlurBackground() {
    const activeImage = document.querySelector(".fotorama__stage__frame.fotorama__active .fotorama__img");
    if (activeImage) {
      const imageSrc = activeImage.getAttribute("src");
      fotoramaStage.style.setProperty("--blur-background", `url(${imageSrc})`);
    }
  }

  fotoramaStage.style.setProperty("--blur-background", `url(${fotoramaImages[0].getAttribute("src")})`);
  fotoramaStage.style.backgroundImage = "var(--blur-background)";

  const observer = new MutationObserver(() => {
    updateBlurBackground();
  });

  observer.observe(document.querySelector(".fotorama"), { attributes: true, subtree: true });

  updateBlurBackground();
});





