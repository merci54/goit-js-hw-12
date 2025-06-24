import { refs } from "./refs";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let galleryBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

// рендер списку зображень
export function createGallery(images) {
    const renderedImages = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="img-card">
            <div class="img-block">
                <a class="big-image" href="${largeImageURL}">
                    <img class="image" src="${webformatURL}" alt="${tags}" />
                </a>
            </div>

            <div class="info-block">
                <div>
                    <h2>Likes</h2>
                    <p>${likes}</p>
                </div>
                <div>
                    <h2>Views</h2>
                    <p>${views}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>${comments}</p>
                </div>
                <div>
                    <h2>Downloads</h2>
                    <p>${downloads}</p>
                </div>
            </div>
        </li>
        `).join("");

    refs.gallery.insertAdjacentHTML('beforeend', renderedImages)
}

export function refreshLightBox() {
    if (galleryBox) {
        galleryBox.refresh();
    }

}

// очистка галереї
export function clearGallery() {
    refs.gallery.innerHTML = '';
}

export function showLoader() {
    refs.loader.classList.remove('hidden');
}

export function hideLoader() {
    refs.loader.classList.add('hidden');
}

export function showLoadMoreButton() {
    refs.loadMore.classList.remove('load-more-hidden');
}

export function hideLoadMoreButton() {
    refs.loadMore.classList.add('load-more-hidden');
}

export function showPaginationLoader() {
    refs.paginationLoader.classList.remove('hidden');
}
export function hidePaginationLoader() {
    refs.paginationLoader.classList.add('hidden');
}
