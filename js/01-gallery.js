import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup)
function createGalleryMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
         </a>
        </div>
        `;
    })
    .join("");
}
galleryContainer.addEventListener("click", onFullSizeImage)

function onFullSizeImage (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    const fullImage = event.target.dataset.source;
    openFullImage(fullImage)
    
}

function openFullImage(image) {
    const fullImageModal = basicLightbox.create(`
    <img src="${image}">
`, {
    onShow: (fullImageModal) => {
        document.addEventListener("keydown", onKeyboardClose)
    },
    onClose: (fullImageModal) => {
        document.removeEventListener("keydown", onKeyboardClose)
    }
 })
  function onKeyboardClose(event) {
    if (event.code === "Escape") {
        fullImageModal.close()
    }
}
 fullImageModal.show()
}

