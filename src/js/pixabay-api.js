import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from 'axios';

let er;
let images = []; 
let curentPage = 1;
let totalPage;

export const inputValue = () => {
    const input = document.querySelector('.text');
    er = input.value.trim();
    input.value = "";
    return er;
}

export async function fetchData(curentPage) {
    const link = `https://pixabay.com/api/`;
    const myApiKey = "42659935-3ef7103821fe0025c24926046";

    try {
        const response = await axios.get(link, {
            params: {
                key: myApiKey,
                q: er,
                per_page: 15,
                orientation: 'horizontal',
                safesearch: true,
                page: curentPage
            }
        });

        const data = response.data;

        if (data.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again ',
                color: 'red',
                position: "topRight"
            });
        } else {
            images = data.hits; 
            totalPage = data.totalHits;
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

