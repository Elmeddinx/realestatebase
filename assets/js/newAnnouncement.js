// inputs

document.querySelectorAll('.numeric-input').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", function (e) {
    const input = e.target;
    let value = input.value.replace(/\D/g, "");
    value = value.slice(0, 9);
    const formattedValue = value
      .replace(/(\d{2})(\d{3})?(\d{2})?(\d{2})?/, function (_, g1, g2, g3, g4) {
        return [g1, g2, g3, g4].filter(Boolean).join(" - ");
      });
    input.value = formattedValue;
  });
});

// search

document.addEventListener("DOMContentLoaded", function () {
  const searchContainer = document.getElementById("searchContainer");
  const searchToggle = document.getElementById("searchToggle");
  const searchInput = document.getElementById("searchInput");

  if (searchContainer) {
    searchContainer.classList.remove("active");
  }

  if (searchToggle) {
    searchToggle.addEventListener("click", function (event) {
      if (window.innerWidth < 768) {
        searchContainer.classList.toggle("active");
        searchInput.focus();
        event.stopPropagation();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  document.addEventListener("click", function () {
    if (window.innerWidth < 768 && searchContainer.classList.contains("active")) {
      searchContainer.classList.remove("active");
    }
  });
});



