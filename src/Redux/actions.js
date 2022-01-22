import {filmsAPI} from "../API/API";
import {
    SHOW_FILMS,
    GET_GENRES,
    HANDLER_INPUT,
    HIDE_LOADING,
    SHOW_LOADING,
    SET_FAVOURITE_FILMS,
    DELETE_FAVOURITE_FILMS,
    SET_SELECTED_FILM_ID,
    GET_VIDEO,
    DELETE_SELECTED_FILM_ID, CHANGE_THEME,
} from "./typeAction";


export const showLoading = () => ({type: SHOW_LOADING});
export const hideLoading = () => ({type: HIDE_LOADING});

export const handlerInput = (text) => ({type: HANDLER_INPUT, text});

export const setGenresAndCountries = (genres, countries) => ({
    type: GET_GENRES,
    genres: genres,
    countries: countries
});

export const setFilms = (films, pagesCount, currentPage) => ({
    type: SHOW_FILMS,
    payload: {
        films,
        pagesCount,
        currentPage
    }
})

export const getTop100Films = (currentPage) => (dispatch) => {
    dispatch(showLoading())
    filmsAPI
        .getFilmsTOP100(currentPage)
        .then((response) => {
            dispatch(setFilms(response.data.films, response.data.pagesCount, currentPage))
            dispatch(hideLoading())
        })
        .catch(() => {
            console.log("Error");
        });
};

export const getAwaitFilms = (currentPage) => (dispatch) => {
    dispatch(showLoading())
    filmsAPI
        .getAwaitFilms(currentPage)
        .then((response) => {
            dispatch(setFilms(response.data.films, response.data.pagesCount, currentPage))
            dispatch(hideLoading())
        })
        .catch(() => {
            console.log("Error");
        });
};

export const getFilmsFromSearch = (query, currentPage) => (dispatch) => {
    dispatch(showLoading())
    filmsAPI
        .getFilmsFromSearch(query, currentPage)
        .then((response) => {
            dispatch(setFilms(response.data.films, response.data.pagesCount, currentPage))
            dispatch(hideLoading())
        })
        .catch(() => {
            console.log("Error");
        });
};

export const getGenreAndCountries  = () => (dispatch) => {
    filmsAPI.getListGenreAndCountry().then((response) => {
        dispatch(setGenresAndCountries(response.data.genres, response.data.countries));
    });
};

export const setFilteredParams = (filteredParams, currentPage = 1) => (dispatch) => {
    dispatch(showLoading())
    filmsAPI
        .getFilteredParams(filteredParams, currentPage)
        .then((response) => {
            if (response.status === 200) {
                dispatch(setFilms(response.data.films, response.data.pagesCount, currentPage))
                dispatch(hideLoading())
            }
        })
        .catch(() => {
            dispatch(setFilms([]))
            dispatch(hideLoading())
    });
};

export const setFavouritesFilms = (payload) => ({type: SET_FAVOURITE_FILMS, payload})

export const deleteFavouritesFilms = (payload) => ({type: DELETE_FAVOURITE_FILMS, payload})

export const setSelectedFilmById = (id) => (dispatch)=> {
    dispatch(showLoading())
    filmsAPI.getFilmsById(id).then((response) => {
        dispatch(setSelectedFilmByIdAC(response.data.data));
        dispatch(hideLoading())
    });
}

export const setSelectedFilmByIdAC = (payload) => ({type: SET_SELECTED_FILM_ID, payload})

export const deleteSelectedFilmById = () => ({type: DELETE_SELECTED_FILM_ID})

export const changeTheme = () => ({type: CHANGE_THEME})


