document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", (event) => {
        let input = phoneInput.value.replace(/[^0-9]/g, "");

        if (input.length > 3) {
            input = input.replace(/(\d{3})(?=\d)/g, "$1 - ");
        }

        if (input.length > 15) {
            input = input.slice(0, 15);
        }

        phoneInput.value = input;
    });
});
