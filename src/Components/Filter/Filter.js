import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenreAndCountries} from "../../Redux/actions";
import {FilterOutlined, StarOutlined, CalendarOutlined, RocketOutlined, UpSquareOutlined} from '@ant-design/icons';
import {Slider, InputNumber, Row, Menu, Select, Button, Col} from 'antd';
import {Link} from "react-router-dom";
import {darkThemeSelector} from "../../Redux/selectors";
const {Option} = Select;
const {SubMenu} = Menu;

const Filter = () => {

    const dispatch = useDispatch()
    const genres = useSelector((state) => state.filter.genres);
    const countries = useSelector((state) => state.filter.countries);
    let currentTime = new Date()
    let year = currentTime.getFullYear();
    const darkTheme = useSelector(darkThemeSelector);
    const [filteredParams, setFilteredParams] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedYear, setSelectedYear] = useState({min: 1880, max: year})
    const [selectedRating, setSelectedRating] = useState({min: 0, max: 10})
    const [order, setOrder] = useState()
    const listSort = ['По году', 'По рейтингу']


    const yearSliderOnChange = value => {
        if (value[0] < value[1]) {
            setSelectedYear({min: value[0], max: value[1]});
        }
    }
    const yearInputMaxOnChange = value => {
        if (selectedRating.min < value) {
            setSelectedYear({...selectedYear, max: value});
        }
    }
    const yearInputMinOnChange = value => {
        if (selectedRating.max > value) {
            setSelectedYear({...selectedYear, min: value});
        }
    }
    const ratingSliderOnChange = value => {
        if (value[0] < value[1]) {
            setSelectedRating({min: value[0], max: value[1]});
        }
    }
    const ratingInputMaxOnChange = value => {
        if (selectedRating.min < value) {
            setSelectedRating({...selectedRating, max: value});
        }
    }
    const ratingInputMinOnChange = value => {
        if (selectedRating.max > value) {
            setSelectedRating({...selectedRating, min: value});
        }
    }
    const onSortTypeChange = value => {
        if (value === 'По году') setOrder('YEAR')
        else if (value === 'По рейтингу') setOrder('RATING');
    }
    const onCountryChange = value => {
        setSelectedCountry(value)
    }
    const onGenreChange = value => {
        setSelectedGenre(value)
    }


    useEffect(() => {
        dispatch(getGenreAndCountries());
    }, [dispatch]);

    useEffect(() => {
        setFilteredParams(prev => [...prev,
            order && `order=${order}`,
            selectedGenre && `&genre=${selectedGenre}`,
            selectedCountry && `&country=${selectedCountry}`,
            `&ratingFrom=${selectedRating.min}`,
            `&ratingTo=${selectedRating.max}`,
            `&yearFrom=${selectedYear.min}`,
            `&yearTo=${selectedYear.max}`,
        ])
        return () => {
            setFilteredParams([]);
        }
    }, [selectedGenre, selectedCountry, selectedRating, selectedYear, order])

    return (
        <>
 <Menu
            mode="inline"
            theme={darkTheme ? 'dark' : 'light'}
            style={{height: '100%'}}
        >
            <SubMenu key="sub1" icon={<FilterOutlined/>} title="Жанры">
                <Select
                    showSearch
                    style={{width: '100%'}}
                    placeholder="Выберите жанр"
                    optionFilterProp="children"
                    onChange={onGenreChange}
                    listHeight={500}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) === 0
                    }
                >
                    {genres.map((g) => {
                        return (
                            <Option
                                key={g.id}

                            >
                                {g.genre}
                            </Option>
                        );
                    })}
                </Select>
            </SubMenu>
            <SubMenu key="sub2" icon={<RocketOutlined/>} title="Страны">
                <Select
                    showSearch
                    style={{width: '100%'}}
                    listHeight={500}
                    placeholder="Введите название страны"
                    optionFilterProp="children"
                    onChange={onCountryChange}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) === 0
                    }
                >
                    {countries.map((c) => {
                        return (
                            <Option
                                key={c.id}
                                value={c.id}
                            >
                                {c.country}
                            </Option>
                        );
                    })}
                </Select>
            </SubMenu>
            <SubMenu key="sub3" icon={<CalendarOutlined/>} title="Год">
                <Slider min={1880} max={year}
                        style={{paddingLeft: 5}}
                        trackStyle={{backgroundColor: 'red', height: 20}}
                        handleStyle={{borderColor: 'red', height: 20}}
                        range={true}
                        onChange={yearSliderOnChange}
                        defaultValue={[selectedYear.min, selectedYear.max]}
                        value={[selectedYear.min, selectedYear.max]}
                />
                <Row justify="space-around" align="middle" style={{paddingLeft: 5, paddingRight: 5, paddingBottom: 15}}>
                    <InputNumber
                        className="min-input-main"
                        min={1880}
                        max={year}
                        value={selectedYear.min}
                        onChange={yearInputMinOnChange}
                    />
                    <div> до</div>
                    <InputNumber
                        className="min-input-main"
                        min={1880}
                        max={year}
                        value={selectedYear.max}
                        onChange={yearInputMaxOnChange}
                    />
                </Row>
            </SubMenu>
            <SubMenu key="sub4" icon={<StarOutlined/>} title="Рейтинг">
                <Slider min={0} max={10}
                        style={{paddingLeft: 5}}
                        trackStyle={{backgroundColor: 'red', height: 20}}
                        handleStyle={{borderColor: 'red', height: 20}}
                        range={true}
                        onChange={ratingSliderOnChange}
                        defaultValue={[selectedRating.min, selectedRating.max]}
                        value={[selectedRating.min, selectedRating.max]}
                />
                <Row justify="space-around" align="middle" style={{paddingLeft: 5, paddingRight: 5, paddingBottom: 15}}>
                    <InputNumber
                        className="min-input-main"
                        min={0}
                        max={10}
                        value={selectedRating.min}
                        onChange={ratingInputMinOnChange}
                    />
                    <div> до</div>
                    <InputNumber
                        className="min-input-main"
                        min={0}
                        max={10}
                        value={selectedRating.max}
                        onChange={ratingInputMaxOnChange}
                    />
                </Row>
            </SubMenu>
            <SubMenu key="sub5" icon={<UpSquareOutlined/>} title="Сортирвока">
                <Select style={{width: '100%'}} defaultValue={'По году'} onChange={onSortTypeChange}>
                    {
                        listSort.map(el => (
                            <Option key={el}>{el}</Option>
                        ))
                    }
                </Select>
            </SubMenu>
            <Row justify={'center'} style={{marginTop: 10}}>
                <Button type={darkTheme && "primary"} block><Link
                    to={`/films/${filteredParams.join('')}`}>Отфильтровать</Link></Button>
            </Row>
        </Menu>

    </>
    );


};

export default Filter;

