// input
document.querySelectorAll('.numeric-input').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});






