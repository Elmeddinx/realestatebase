const links = document.querySelectorAll('.user-role a');

    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        links.forEach(item => item.classList.remove('active'));

        link.classList.add('active');
      });
    });