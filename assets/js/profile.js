// dropdown

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.custom-dropdown');

    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     // Burada .dropdown-item'ları seçip event ekleyin
//     document.querySelectorAll('.dropdown-menu .dropdown-item')
//       .forEach(item => {
//         item.addEventListener('click', (e) => {
//           e.stopPropagation();
//         });
//       });
//   });
  
  

// input

document.querySelectorAll('.numeric-input').forEach(input => {
    input.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});


