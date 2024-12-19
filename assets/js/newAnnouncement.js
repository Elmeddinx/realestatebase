const fileInput = document.getElementById("file-input");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imageAddBox = document.getElementById("imageAddBox");

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
              <img src="./assets/icons/turn-icon.svg" alt="Turn">
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
        });

        let zoomed = false;
        imagePreview.querySelector(".zoom").addEventListener("click", () => {
          const img = imagePreview.querySelector("img");
          if (!zoomed) {
            img.style.transform = "scale(1.5)";
            zoomed = true;
          } else {
            img.style.transform = "scale(1)";
            zoomed = false;
          }
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
  } else {
    imageAddBox.classList.remove("small");
    imageAddBox.classList.add("large");
  }
}


document.querySelectorAll('.numeric-input').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", function (e) {
    const input = e.target;
    const value = input.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{3})(\d{3})?(\d{3})?(\d{3})?/, function (_, g1, g2, g3, g4) {
        return [g1, g2, g3, g4].filter(Boolean).join(" - ");
      });
    input.value = formattedValue;
  });
});