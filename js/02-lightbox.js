import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const galleryCreate = 
galleryItems
.map( (item) =>

`<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
)
.join('')

gallery.innerHTML = galleryCreate

/*
    galleryItemsNode[index].addEventListener('click', (event) => {
    event.preventDefault();
    const galleryItemLink = galleryItemsNode[index].querySelector('a').href
*/
let lightbox = new SimpleLightbox('.gallery a', { 
    /* options */ 
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",

});