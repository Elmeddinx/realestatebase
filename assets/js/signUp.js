document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
  
    phoneInput.addEventListener("input", function (e) {
      const input = e.target;
      const value = input.value.replace(/\D/g, "");
      const formattedValue = value
        .replace(/(\d{3})(\d{3})?(\d{3})?(\d{3})?/, function (_, g1, g2, g3, g4) {
          return [g1, g2, g3, g4].filter(Boolean).join(" - ");
        });
      input.value = formattedValue;
    });
  });
  

  document.getElementById("searchToggle").addEventListener("click", function () {
    const searchContainer = document.getElementById("searchContainer");
  
    if (window.innerWidth < 768) {
      searchContainer.classList.toggle("active");
    }
  });