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