import React, {useState} from "react";
import './header.css'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {changeTheme, handlerInput} from "../../Redux/actions";
import {Col, Layout, Row, Input, Tooltip, Button, Switch, Form, Menu, Typography, Badge} from "antd";
import 'antd/dist/antd.css';
import { darkThemeSelector} from "../../Redux/selectors";
import './header.css'
import logo from "../../logo.svg";
import { MenuOutlined } from '@ant-design/icons'

export const Header = () => {

    console.log('Render Header')
    const history = useHistory();
    const dispatch = useDispatch();
    const {Header} = Layout;
    const [searchValue, setSearchValue] = useState('');
    const darkTheme = useSelector(darkThemeSelector);
    const favouriteFilms = useSelector(state => state.favouriteFilms.favouriteFilms)
    const onSearch = () => {
        dispatch(handlerInput(searchValue));
        history.push(`/film/${searchValue}`)
    };
    return (
        <Row justify='space-between' style={{ position: 'fixed', zIndex: 145, width: '100%' }}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Header className={!darkTheme && 'headerFixed'}>
                    <Row>

                        <Col xl={12} lg={12} md={12} sm={4} xs={4}>
                            <Menu
                                theme={darkTheme ? 'dark' : 'light'}
                                mode='horizontal'
                                defaultSelectedKeys={["item1"]}
                                overflowedIndicator={<MenuOutlined />}
                            >
                                <Menu.Item key="1">
                                    <Link to="/top100" className="btn btn-primary">100 лучших фильмов</Link>
                                </Menu.Item>
                                <Menu.Item key="2">

                                        <Link to="/favourite" className="btn btn-primary">
                                            <Badge count={favouriteFilms.length} offset={[15, 3]}>
                                              <span className={darkTheme ? 'textBadge textBadgeDark':'textBadge'}>Мои любимые фильмы</span>
                                            </Badge>
                                        </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <label htmlFor={'theme'}
                                           className={darkTheme ? 'textThemeDark' : 'textTheme'}>{!darkTheme ? 'Темная тема:' : 'Светлая тема:'} </label>
                                    <Switch id='theme' size="small" checked={darkTheme}
                                            onChange={() => dispatch(changeTheme())}/>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col xl={12} lg={12} md={12} sm={20} xs={20}>
                            <Form onFinish={onSearch}>
                                <Input  onChange={(e)=>setSearchValue(e.target.value)} placeholder="Введите название фильма"
                                        className={darkTheme ? 'inputSearch inputSearchDark' : 'inputSearch'}/>
                                <div className={darkTheme ? 'search searchDark' : 'search'}></div>
                            </Form>
                        </Col>
                    </Row>
                </Header>
            </Col>
        </Row>
    );
};


