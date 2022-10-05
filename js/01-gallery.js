import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);

const gallery = document.querySelector('.gallery')

console.log(gallery)

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

console.log(galleryItemsNode)

for (let index = 0; index < galleryItemsNode.length; index++) {

    galleryItemsNode[index].addEventListener('click', (event) => {
    event.preventDefault();
    console.log('widzisz mnie?')
    })};