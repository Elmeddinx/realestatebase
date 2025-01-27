// input
document.querySelectorAll('.numeric-input').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});


$(document).ready(function() {
  $('.js-example-basic-multiple').select2({
    templateResult: function (data) {
      if (data.loading) return data.text;
      if (!data.element) return data.text;
  
      const $element = $(data.element);
      const isSelected = $element.prop('selected');
  
      const $label = $('<span>').text(data.text);

      if (isSelected) {
        $label.css({
          display: 'inline-block',
          width: '100%',
          position: 'relative'
        });
        
        const $tick = $('<span>').text('◉').css({
          float: 'right',
          color: 'black'
        });

        $label.append($tick);
      }
      
      return $label;
    }
  });
});





