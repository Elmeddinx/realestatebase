const fileInput = document.getElementById("file-input");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imageAddBox = document.getElementById("imageAddBox");
const uploadHint = document.querySelector(".upload-hint"); // upload-hint elementini seçiyoruz

let uploadedImages = [];

fileInput.addEventListener("change", function () {
    const files = Array.from(fileInput.files);
  
    files.forEach((file) => {
        if (uploadedImages.length < 4) {
            const reader = new FileReader();
    
            reader.onload = (e) => {
                const imagePreview = document.createElement("div");
                imagePreview.classList.add("image-preview");
    
                imagePreview.innerHTML = `
                    <img src="${e.target.result}" alt="Yüklenen Şəkil">
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

                    const zoomedImage = document.getElementById('zoomedImage');
                    zoomedImage.style.transform = `rotate(${rotation}deg)`;
                });
    
                imagePreview.querySelector(".zoom").addEventListener("click", () => {
                    const zoomedImage = document.getElementById('zoomedImage');
                    zoomedImage.src = e.target.result;
    
                    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
                    imageModal.show();
                });
    
                uploadedImages.push(imagePreview);
                imagePreviewContainer.insertBefore(imagePreview, imageAddBox);
                checkImageLimit();
            };
    
            reader.readAsDataURL(file);
        }
    });
  
    fileInput.value = "";
});

function checkImageLimit() {
    if (uploadedImages.length > 0) {
        imageAddBox.classList.remove("large");
        imageAddBox.classList.add("small");

        uploadHint.style.display = "none";
    } else {
        imageAddBox.classList.remove("small");
        imageAddBox.classList.add("large");

        uploadHint.style.display = "block";
    }
}
