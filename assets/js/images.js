const fileInput = document.getElementById("file-input");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imageAddBox = document.getElementById("imageAddBox");
const uploadHint = document.querySelector(".upload-hint");

let uploadedImages = [];

fileInput.addEventListener("change", function () {
    const files = Array.from(fileInput.files);

    files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const imagePreview = document.createElement("div");
            imagePreview.classList.add("image-preview");

            imagePreview.innerHTML = `
                <img src="${e.target.result}" alt="Yüklənən Şəkil">
                <div class="image-actions">
                    <button class="delete">
                        <img src="./assets/icons/delete-icon.svg" alt="Delete">
                    </button>
                    <button class="turn">
                        <img class="turn-img" src="./assets/icons/turn-icon.svg" alt="Turn">
                    </button>
                    <button class="zoom">
                        <img src="./assets/icons/zoom-icon.svg" alt="Zoom">
                    </button>
                </div>
            `;

            imagePreview.querySelector(".delete").addEventListener("click", () => {
                imagePreview.remove();
                uploadedImages = uploadedImages.filter((img) => img !== imagePreview);
                checkImageLimit();
            });

            let rotation = 0;
            imagePreview.querySelector(".turn").addEventListener("click", () => {
                rotation += 90;
                imagePreview.querySelector("img").style.transform = `rotate(${rotation}deg)`;

                const zoomedImage = document.getElementById("zoomedImage");
                zoomedImage.style.transform = `rotate(${rotation}deg)`;
            });

            imagePreview.querySelector(".zoom").addEventListener("click", () => {
                const previewImg = imagePreview.querySelector("img");
                const zoomedImage = document.getElementById("zoomedImage");
                
                zoomedImage.src = previewImg.src;

                zoomedImage.style.transform = previewImg.style.transform;

                const imageModal = new bootstrap.Modal(
                    document.getElementById("imageModal")
                );
                imageModal.show();
            });

            uploadedImages.push(imagePreview);
            imagePreviewContainer.insertBefore(imagePreview, imageAddBox);

            checkImageLimit();
        };

        reader.readAsDataURL(file);
    });

    fileInput.value = "";
});

function checkImageLimit() {
    if (uploadedImages.length >= 4) {
        uploadHint.style.display = "none";
    } else {
        uploadHint.style.display = "block";
    }

    if (uploadedImages.length > 0) {
        imageAddBox.classList.remove("large");
        imageAddBox.classList.add("small");
    } else {
        imageAddBox.classList.remove("small");
        imageAddBox.classList.add("large");
    }
}
