import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const galleryCreate = 
galleryItems
.map( (item) =>

`<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="large-image.jpg"
    alt="${item.description}"
  />
</a>
</div>`
)
.join('')

gallery.innerHTML = galleryCreate

const galleryItemsNode = document.querySelectorAll('.gallery__item')

for (let index = 0; index < galleryItemsNode.length; index++) {

    galleryItemsNode[index].addEventListener('click', (event) => {
    event.preventDefault();
    const galleryItemLink = galleryItemsNode[index].querySelector('a').href
    
    basicLightbox.create(`
    <img src="${galleryItemLink}" width="800" height="600">
`).show()

    })};