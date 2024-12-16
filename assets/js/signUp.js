document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
  
    phoneInput.addEventListener("input", function (e) {
      const input = e.target;
      const value = input.value.replace(/\D/g, "");
      const formattedValue = value
        .replace(/(\d{2})(\d{3})?(\d{2})?(\d{2})?/, function (_, g1, g2, g3, g4) {
          return [g1, g2, g3, g4].filter(Boolean).join(" - ");
        });
      input.value = formattedValue;
    });
  });
  