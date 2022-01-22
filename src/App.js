import React, {memo, useEffect, useState} from "react";
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";
import Filter from "./Components/Filter/Filter";
import SortFilmsOnGenre from "./Components/ShowFilms/SortFilmsOnGenre";
import {ShowOnSearchFilms} from "./Components/ShowFilms/ShowOnSearchFilms";
import { FilterOutlined } from '@ant-design/icons';
import {FilmsAwaitFilms} from "./Components/ShowFilms/FilmsAwaitFilms";
import {FilmsTop100} from "./Components/ShowFilms/FilmsTop100";
import DescriptionFilm from "./Components/DescriptionFilm/DescriptionFilm";
import {FavouriteFilms} from "./Components/ShowFilms/FavoutiteFilms";
import {Layout, Menu, Breadcrumb, Col, Row} from 'antd';
import {useSelector} from "react-redux";
import {darkThemeSelector} from "./Redux/selectors";
import './Dark.css'
import {Header} from "./Components/Header/Header";
import {Proba} from "./Components/ShowFilms/proba"

const MemoShowOnSearchFilms = memo(ShowOnSearchFilms);
const MemoFilmsTop100 = memo(FilmsTop100)
const MemoFilmsAwaitFilms= memo(FilmsAwaitFilms)
const MemoFavouriteFilms = memo(FavouriteFilms)
const MemoDescriptionFilm = memo(DescriptionFilm)
const MemoSortFilmsOnGenre = memo(SortFilmsOnGenre)


const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;


const App = () => {
  const darkTheme = useSelector(darkThemeSelector);
    const [matchesMedia, setMatchesMedia] = useState(window.matchMedia("(min-width: 992px)").matches);
    useEffect(()=>{
        const handler = e => setMatchesMedia(e.matches);
        window.matchMedia("(min-width: 992px)").addEventListener('change', handler);
    }, [matchesMedia])

  console.log("Render App")
  return (
      <Router>
        <Layout style={{minHeight: '100vh' }}>
            <Header />

          <Content style={{}} className={darkTheme && 'layout_content_dark'} >
            {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
            {/*    <Breadcrumb.Item><Link to={'/'}>Главная</Link></Breadcrumb.Item>*/}
            {/*  /!*<Breadcrumb.Item>App</Breadcrumb.Item>*!/*/}
            {/*</Breadcrumb>*/}
              <Row >
                <Col xs={1} sm={1} md={1} lg={6} xl={6} style={{zIndex: 9}}>
                    <Layout style={{
                        background: 'transparent',
                        position: 'sticky',
                        top: 0,
                        left: 0,
                    }}>
                        <Sider
                            style={{
                                height: '100vh',
                                position: 'absolute',
                                left: 0,
                                top: 64,
                                zIndex: 2,

                            }}
                              className="site-layout-background" width={matchesMedia ? '100%': 300} trigger={<FilterOutlined />}
                               breakpoint="lg"
                               collapsedWidth="0">
                            <Filter />
                        </Sider>
                    </Layout>
                </Col>
                <Col xs={23} sm={23} md={23} lg={18} xl={18}>
                    <Layout className="site-layout-background" >

                        <Content style={{ minHeight: 280 }} className={darkTheme && 'contentDark'}>
                            <Switch>
                                <Route exact path={"/"} component={MemoFilmsAwaitFilms} />
                                <Route path={"/favourite"} component={MemoFavouriteFilms} />
                                <Route path={"/cinemaInfo/:id"} render={() => <MemoDescriptionFilm/>} />
                                <Route path="/film/:name" component={MemoShowOnSearchFilms}/>
                                <Route path="/films/:filteredParams" component={MemoSortFilmsOnGenre} />
                                <Route path="/top100" render={() => <MemoFilmsTop100/>} />
                                <Route path="/proba" render={() => <Proba />} />
                            </Switch>
                        </Content>
                    </Layout>
                </Col>
            </Row>


          </Content>
        </Layout>
      </Router>

  );
};

export default App;
