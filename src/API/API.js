import * as axios from "axios";
import { API_KEY } from "../Redux/typeAction";

const instance = axios.create({
    baseURL: "https://kinopoiskapiunofficial.tech/api/v2.1/films/",
    headers: {
        "Content-Type": "aplication/json",
        "X-API-KEY": API_KEY,
    },
});

export const filmsAPI = {

    getFilmsTOP100(currentPage=1) {
        return instance.get(`top?type=TOP_100_POPULAR_FILMS&page=${currentPage}`);
    },
    getAwaitFilms(currentPage) {
        return instance.get(`top?type=TOP_AWAIT_FILMS&page=${currentPage}`);

    },
    getFilmsFromSearch(inputText, currentPage) {
        return instance.get(
            `search-by-keyword?keyword=${inputText}&page=${currentPage}`
        );
    },
    getListGenreAndCountry (){
        return instance.get(`filters`);
    },
    getFilteredParams (filteredParams, currentPage){
        return instance.get(`search-by-filters?${filteredParams}&page=${currentPage}`)
    },
    getFilmsById(id){
        return instance.get(`${id}`)
    }
};
