import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createLi } from "./js/render-functions";
import { fetchData } from "./js/pixabay-api";

const galleryUl = document.querySelector(".gallery");
const submit = document.querySelector(".form");
const loader = document.querySelector(".loader");
const BtMorePage = document.querySelector(".load-more");

let currentPage = 1;
let maxPages = Infinity;
let inputValue = '';
let cardHeight; 


function getCardHeight() {
    const card = document.querySelector('.gallery a');
    const cardRect = card.getBoundingClientRect();
    return cardRect.height;
}

submit.addEventListener("submit", async function (event) {
    event.preventDefault();
    loader.classList.remove("is-hiden");

    galleryUl.innerHTML = "";

    const input = document.querySelector('.text');
    inputValue = input.value.trim();
    if (inputValue === '') {
        iziToast.show({
            message: 'Please, write your request ',
            color: 'red',
            position: "topRight"
        });
        loader.classList.add("is-hiden");
        return;
    }

    try {
        const data = await fetchData(inputValue, 1);
        currentPage = 1;
        galleryUl.innerHTML = '';
        galleryUl.insertAdjacentHTML("afterbegin", createLi(data.hits));
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
        });
        lightbox.refresh();
        maxPages = Math.ceil(data.totalHits / 15)
        if (data.hits.length === 0) {
            BtMorePage.classList.add("is-hiden")
        } else{BtMorePage.classList.remove("is-hiden")}
    } catch (error) {
        console.error('Error:', error);
        iziToast.show({
            message: 'An error occurred while fetching data. Please try again.',
            color: 'red',
            position: "topRight"
        });
    } finally {
        loader.classList.add("is-hiden");
    }
    

});

BtMorePage.addEventListener("click", async event => {
    if (currentPage >= maxPages) {
        BtMorePage.style.display = "none";
        iziToast.show({
            message: 'No more images to load',
            color: 'blue',
            position: "topRight"
        });
        return;
    }

    loader.classList.remove("is-hiden");
    try {
        currentPage++
        const data = await fetchData(currentPage);
        console.log(data)
        galleryUl.insertAdjacentHTML("beforeend", createLi(data.hits));
        const lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250
        });
        lightbox.refresh();
        if (!cardHeight) {
            cardHeight = getCardHeight(); 
        }
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });
    } catch (error) {
        console.error('Error:', error);
        iziToast.show({
            message: 'An error occurred while fetching data. Please try again.',
            color: 'red',
            position: "topRight"
        });

    } finally {
        loader.classList.add("is-hiden");
    }

})