// input
document.querySelectorAll('.numeric-input').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});

// multiple select



$(document).ready(function() {
  $('.js-example-basic-multiple').select2({
    closeOnSelect: false,
    templateResult: function (data) {
      if (data.loading) return data.text;
      if (!data.element) return data.text;

      return data.text;
    },
    templateSelection: function () {
      return "";
    }
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.select2-container').length) {
      $('.js-example-basic-multiple').select2('close');
    }
  });
});







