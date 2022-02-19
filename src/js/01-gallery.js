import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href=${item.original}>
          <img
            class="gallery__image"
            src=${item.preview}
            alt=${item.description}
          />
        </a>`,
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);
console.log(galleryList);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
