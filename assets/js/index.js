const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const selectElements = document.querySelectorAll('.dynamic-select');


const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.querySelectorAll('.numeric-input').forEach(input => {
  input.addEventListener('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
  });
});


selectElements.forEach(selectElement => {
    function updateOptionsVisibility() {
        const selectedIndex = selectElement.selectedIndex;
        Array.from(selectElement.options).forEach((option, index) => {
            option.style.display = index === selectedIndex ? 'none' : 'block';
        });
    }

    updateOptionsVisibility();

    selectElement.addEventListener('change', updateOptionsVisibility);
});



