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
