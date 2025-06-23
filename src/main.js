import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./js/refs";
import { getImagesByQuery, per_page } from './js/pixabay-api'
import { createGallery, clearGallery, hideLoader, showLoader, showLoadMoreButton, hideLoadMoreButton, showPaginationLoader, hidePaginationLoader, refreshLightBox } from "./js/render-functions";

let page = 30;
let searchValue = '';

refs.form.addEventListener('submit', handleSubmit);
refs.loadMore.addEventListener('click', handleClick);

async function handleSubmit(e) {
  e.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  searchValue = refs.input.value.trim();

  page = 1;

  if (!searchValue) {
    return iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',

    })
  }


  try {
    const data = await getImagesByQuery(searchValue, page);

    showLoadMoreButton();

    refs.gallery.innerHTML = createGallery(data.hits);
    refreshLightBox();


    if (data.hits.length === 0) {

      hideLoadMoreButton();

      // сповіщення для користувачів
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      })

    }


  } catch (error) {

    hideLoader();

    iziToast.error({
      message: `${error.message}`,
      position: 'topRight',
    })
  }

}

async function handleClick() {
  page++;
  hideLoadMoreButton();
  showPaginationLoader();
  refs.loadMore.disabled = true;

  try {
    const data = await getImagesByQuery(searchValue, page);
    const total_pages = Math.ceil(data.totalHits / per_page);

    refs.gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
    refreshLightBox();

    hidePaginationLoader();
    showLoadMoreButton();

    if (page >= total_pages) {

      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight'
      })

    }

    const cardHeight = refs.gallery.firstElementChild.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      left: 0,
      behavior: "smooth"
    });

  } catch (error) {
    iziToast.error({
      message: `${error.message}`,
      position: 'topRight',
    })
  } finally {
    refs.loadMore.disabled = false;
  }
}