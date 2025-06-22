
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./js/refs";
import { getImagesByQuery, per_page } from './js/pixabay-api'
import { clearGallery } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { createGallery } from "./js/render-functions";

let page = 1;

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

    // очистка галереї
  clearGallery();

  page = 34;
  // перевірка значення інпуту
  if (!refs.input.value.trim()) {
    iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',

            })
    return
  }


  getImagesByQuery(refs.input.value.trim(), page)
    .then(({ data }) => {

    // рендер галереї

      refs.gallery.innerHTML = createGallery(data.hits);
      const total_pages = Math.ceil(data.total / per_page);

      if (page < total_pages) {
        refs.loadMore.classList.replace('load-more-hidden', 'load-more');
        page++;
      }

      console.log(total_pages)
      console.log(data);



    // якщо не знайшло жодного результату
    if (data.hits.length === 0) {

        // сповіщення для користувачів
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        })
    }})
    .catch(error => {

    // приховання лоадеру якщо виникла помилка
    hideLoader();
    iziToast.error({
      message: `${error.message}`,
      position: 'topRight',
  })

  })


}
