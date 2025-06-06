import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const query = e.target.elements['search-text'].value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term!',
            position: 'topRight',
        });
    return;
    }

    clearGallery();
    showLoader();

    try {
    const data = await getImagesByQuery(query);
    hideLoader();
    if (!data.hits.length) {
        iziToast.error({
            title: 'No Results',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
        return;
    }

    createGallery(data.hits);
} catch (error) {
    iziToast.error({
        title: 'Error',
        message: 'Something went wrong.',
        position: 'topRight',
    });
    console.error(error);
    } finally {
        hideLoader();
    }
});
