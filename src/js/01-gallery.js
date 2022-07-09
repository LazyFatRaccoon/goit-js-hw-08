// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line



const galeryRef = document.querySelector('.gallery')

const galleryMarkUp = galleryItems.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" title="${description}" />
</a>`, '')

galeryRef.insertAdjacentHTML('afterbegin', galleryMarkUp)

new SimpleLightbox(
    '.gallery a', 
    { 
        overlay: true,
        overlayOpacity: 0.95, 
        widthRatio: 1.0, 
        heightRatio: 1.0, 
        captionDelay: 250,
    });


