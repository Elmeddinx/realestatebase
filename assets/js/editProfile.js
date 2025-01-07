document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {

            document.querySelector(".image img").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const passwordInputs = document.querySelectorAll('.password-input');

    passwordInputs.forEach(function(input) {
        const inputGroup = input.parentElement;
        if (!inputGroup) return;

        const toggleSpan = inputGroup.querySelector('.input-group-text');
        if (!toggleSpan) return;

        const toggleIcon = toggleSpan.querySelector('img');
        if (!toggleIcon) return;

        input.type = 'password';
        toggleIcon.src = './assets/icons/eye-off-icon.svg';
        toggleIcon.alt = 'Şifreyi göster';

        toggleSpan.style.cursor = 'pointer';

        toggleSpan.addEventListener('click', function () {
            if (input.type === 'password') {
                input.type = 'text';
                toggleIcon.src = './assets/icons/eye-on-icon.png';
                toggleIcon.alt = 'Şifreyi gizle';
            } else {
                input.type = 'password';
                toggleIcon.src = './assets/icons/eye-off-icon.svg';
                toggleIcon.alt = 'Şifreyi göster';
            }
        });
    });
});
