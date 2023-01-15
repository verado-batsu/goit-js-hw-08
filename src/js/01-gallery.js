import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const ulGalleryEl = document.getElementsByClassName('gallery')[0];

const markupGallery = makeMarkupGallery(galleryItems);

ulGalleryEl.innerHTML = markupGallery;

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: `alt`,
	captionDelay: 250,
});


function makeMarkupGallery(data) {
	return data
		.map(({ preview, original, description }) => {
			return `
			<a class="gallery__item" href="${original}">
				<img class="gallery__image" src="${preview}" alt="${description}" />
			</a>`
		})
		.join('');
}