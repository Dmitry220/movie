import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenreAndCountries} from "../../Redux/actions";
import {useHistory} from "react-router-dom";
import filterStyle from './Filter.module.css'
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import {darkThemeSelector} from "../../Redux/selectors";

const Filter = () => {
   let history = useHistory()
   const dispatch = useDispatch()
   const genres = useSelector((state) => state.filter.genres);
   const countries = useSelector((state) => state.filter.countries);
   let currentTime = new Date()
   let currentYear = currentTime.getFullYear();
   const darkTheme = useSelector(darkThemeSelector);

   const [genre, setGenre] = useState()
   const [country, setCountry] = useState()
   const [ratingTo, setRatingTo] = useState()
   const [ratingFrom, setRatingFrom] = useState()
   const [yearTo, setYearTo] = useState()
   const [yearFrom, setYearFrom] = useState()
   const [order, setOrder] = useState()

   const SubmitFilter = () => {
      history.push(`/films/${ratingFrom === undefined ? 0 : ratingFrom}/${ratingTo === undefined ? 10 : ratingTo}/${yearFrom === undefined ? 1950 : yearFrom}/${yearTo === undefined ? currentYear : yearTo}/${genre === undefined ? 19 : genre}/${country === undefined ? 1 : country}/${order === undefined ? "RATING" : order}`)
   }

   const SearchRating = (render, handle, value, un, percent) => {
      setRatingFrom(value[0])
      setRatingTo(value[1])
   }
   const SearchYear = (render, handle, value, un, percent) => {
      setYearFrom(value[0])
      setYearTo(value[1])
   }

   const searchSort = value => setOrder(value.target.value)

   const countryChange = value => setCountry(value.target.value)

   const genreChange = value => setGenre(value.target.value)



   useEffect(() => {
      dispatch(getGenreAndCountries());
   }, [dispatch]);


   return (
     <>
        <div className={filterStyle.filter}>
           <div className="filter__container">
              <div className={filterStyle.filter__body}>
                 <h3 className={darkTheme ? filterStyle.filter__title + ' ' + filterStyle.dark : filterStyle.filter__title}>Фильтр</h3>
                 <div className="filter__genre genre">
                    <div className="genre__container">
                       <select className={filterStyle.genre__item + ' ' + filterStyle.select} onChange={genreChange} name={"Genre"}>
                          <option value="">Жанр</option>
                          {genres.map(genre => <option value={genre.id} key={genre.id}>{genre.genre}</option>)}
                       </select>
                    </div>
                 </div>
                 <div className="filter__country country">
                    <div className="country__container">
                       <select className={filterStyle.country__item + ' ' + filterStyle.select} onChange={countryChange} name={"Country"}>
                          <option value="">Страна</option>
                          {countries.map(country => <option key={country.id} value={country.id}>{country.country}</option>)}
                       </select>
                    </div>
                 </div>
                 <div className="filter__country order">
                    <div className="order__container">
                       <select className={filterStyle.order__item + ' ' + filterStyle.select} onChange={searchSort}>
                          <option value="">Сортировка</option>
                          <option value="RATING">Rating</option>
                          <option value="YEAR">Year</option>
                       </select>
                    </div>
                 </div>
                 <div className={filterStyle.filter__year + ' ' + filterStyle.year}>
                    <div className="year__container">
                       <h3 className={filterStyle.year__title + ' ' + filterStyle.subtitle}>Год</h3>
                       <div className={filterStyle.year__item}>
                          <Nouislider range={{min: 1900, max: currentYear}}
                                      start={[1900, currentYear]}
                                      step={1}
                                      tooltips
                                      connect
                                      onChange={SearchYear}
                          />
                       </div>
                    </div>
                 </div>
                 <div className={filterStyle.filter__rating + ' ' + filterStyle.rating}>
                    <div className="rating__container">
                       <h3 className={ filterStyle.ratting__title + ' ' + filterStyle.subtitle}>Рейтинг</h3>
                       <div className={filterStyle.rating__item}>
                          <Nouislider range={{min: 0, max: 10}}
                                      start={[0, 10]}
                                      step={1}
                                      tooltips
                                      connect
                                      onChange={SearchRating}
                          />
                       </div>
                    </div>
                 </div>
                 <div className={filterStyle.filter__submit}>
                    <button onClick={SubmitFilter}>Применить фильтр</button>
                 </div>
              </div>
           </div>

        </div>

        {/*<div>*/}
        {/*           <div key="sub1" icon={''} title="Жанры">*/}
        {/*               <div*/}
        {/*                   showSearch*/}
        {/*                   style={{width: '100%'}}*/}
        {/*                   placeholder="Выберите жанр"*/}
        {/*                   optionFilterProp="children"*/}
        {/*                   onChange={onGenreChange}*/}
        {/*                   listHeight={500}*/}
        {/*                   filterOption={(input, option) =>*/}
        {/*                       option.children.toLowerCase().indexOf(input.toLowerCase()) === 0*/}
        {/*                   }*/}
        {/*               >*/}
        {/*                   {genres.map((g) => {*/}
        {/*                       return (*/}
        {/*                           <div*/}
        {/*                               key={g.id}*/}

        {/*                           >*/}
        {/*                               {g.genre}*/}
        {/*                           </div>*/}
        {/*                       );*/}
        {/*                   })}*/}
        {/*               </div>*/}
        {/*           </div>*/}
        {/*           <div key="sub2" icon={''} title="Страны">*/}
        {/*               <div*/}
        {/*                   showSearch*/}
        {/*                   style={{width: '100%'}}*/}
        {/*                   listHeight={500}*/}
        {/*                   placeholder="Введите название страны"*/}
        {/*                   optionFilterProp="children"*/}
        {/*                   onChange={onCountryChange}*/}
        {/*                   filterOption={(input, option) =>*/}
        {/*                       option.children.toLowerCase().indexOf(input.toLowerCase()) === 0*/}
        {/*                   }*/}
        {/*               >*/}
        {/*                   {countries.map((c) => {*/}
        {/*                       return (*/}
        {/*                           <div*/}
        {/*                               key={c.id}*/}
        {/*                               value={c.id}*/}
        {/*                           >*/}
        {/*                               {c.country}*/}
        {/*                           </div>*/}
        {/*                       );*/}
        {/*                   })}*/}
        {/*               </div>*/}
        {/*           </div>*/}
        {/*           <div key="sub3" icon={''} title="Год">*/}
        {/*               <div min={1880} max={year}*/}
        {/*                       style={{paddingLeft: 5}}*/}
        {/*                       trackStyle={{backgroundColor: 'red', height: 20}}*/}
        {/*                       handleStyle={{borderColor: 'red', height: 20}}*/}
        {/*                       range={true}*/}
        {/*                       onChange={yearSliderOnChange}*/}
        {/*                       defaultValue={[selectedYear.min, selectedYear.max]}*/}
        {/*                       value={[selectedYear.min, selectedYear.max]}*/}
        {/*               />*/}
        {/*               <div justify="space-around" align="middle" style={{paddingLeft: 5, paddingRight: 5, paddingBottom: 15}}>*/}
        {/*                   <div*/}
        {/*                       className="min-input-main"*/}
        {/*                       min={1880}*/}
        {/*                       max={year}*/}
        {/*                       value={selectedYear.min}*/}
        {/*                       onChange={yearInputMinOnChange}*/}
        {/*                   />*/}
        {/*                   <div> до</div>*/}
        {/*                   <div*/}
        {/*                       className="min-input-main"*/}
        {/*                       min={1880}*/}
        {/*                       max={year}*/}
        {/*                       value={selectedYear.max}*/}
        {/*                       onChange={yearInputMaxOnChange}*/}
        {/*                   />*/}
        {/*               </div>*/}
        {/*           </div>*/}
        {/*           <div key="sub4" icon={''} title="Рейтинг">*/}
        {/*               <div min={0} max={10}*/}
        {/*                       style={{paddingLeft: 5}}*/}
        {/*                       trackStyle={{backgroundColor: 'red', height: 20}}*/}
        {/*                       handleStyle={{borderColor: 'red', height: 20}}*/}
        {/*                       range={true}*/}
        {/*                       onChange={ratingSliderOnChange}*/}
        {/*                       defaultValue={[selectedRating.min, selectedRating.max]}*/}
        {/*                       value={[selectedRating.min, selectedRating.max]}*/}
        {/*               />*/}
        {/*               <div justify="space-around" align="middle" style={{paddingLeft: 5, paddingRight: 5, paddingBottom: 15}}>*/}
        {/*                   <input*/}
        {/*                       className="min-input-main"*/}
        {/*                       min={0}*/}
        {/*                       max={10}*/}
        {/*                       value={selectedRating.min}*/}
        {/*                       onChange={ratingInputMinOnChange}*/}
        {/*                   />*/}
        {/*                   <div> до</div>*/}
        {/*                   <div*/}
        {/*                       className="min-input-main"*/}
        {/*                       min={0}*/}
        {/*                       max={10}*/}
        {/*                       value={selectedRating.max}*/}
        {/*                       onChange={ratingInputMaxOnChange}*/}
        {/*                   />*/}
        {/*               </div>*/}
        {/*           </div>*/}
        {/*           <div key="sub5" icon={''} title="Сортирвока">*/}
        {/*               <seelct style={{width: '100%'}} defaultValue={'По году'} onChange={onSortTypeChange}>*/}
        {/*                   {*/}
        {/*                       listSort.map(el => (*/}
        {/*                           <option key={el}>{el}</option>*/}
        {/*                       ))*/}
        {/*                   }*/}
        {/*               </seelct>*/}
        {/*           </div>*/}
        {/*           <div justify={'center'} style={{marginTop: 10}}>*/}
        {/*               <button type={darkTheme && "primary"} block><Link*/}
        {/*                   to={`/films/${filteredParams.join('')}`}>Отфильтровать</Link></button>*/}
        {/*           </div>*/}
        {/*       </div>*/}

     </>
);


};

export default Filter;

