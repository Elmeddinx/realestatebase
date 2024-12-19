const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const selectElements = document.querySelectorAll('.dynamic-select');
const mediaQuery = window.matchMedia('(min-width: 768px)');



const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.querySelectorAll('.numeric-input').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});



function updateOptionsVisibility(selectElement) {
    const selectedIndex = selectElement.selectedIndex;
    Array.from(selectElement.options).forEach((option, index) => {
        option.style.display = index === selectedIndex ? 'none' : 'block';
    });
}

function addListeners() {
    selectElements.forEach(selectElement => {
        updateOptionsVisibility(selectElement);
        if (!selectElement.hasAttribute('data-listener-added')) {
            selectElement.addEventListener('change', () => updateOptionsVisibility(selectElement));
            selectElement.setAttribute('data-listener-added', 'true');
        }
    });
}

function resetOptionsVisibility() {
    selectElements.forEach(selectElement => {
        Array.from(selectElement.options).forEach(option => {
            option.style.display = 'block';
        });
    });
}

function handleMediaQueryChange(e) {
    if (e.matches) {
        addListeners();
    } else {
        resetOptionsVisibility();
    }
}

handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQueryChange);




document.getElementById("searchToggle").addEventListener("click", function () {
  const searchContainer = document.getElementById("searchContainer");

  if (window.innerWidth < 768) {
    searchContainer.classList.toggle("active");
  }
});

