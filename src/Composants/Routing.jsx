import React from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import {Header} from './Header';
import {Home} from './Home';
import {Favoris} from './Favoris';
import '../App.css';
import { SearchBar } from './SearchBar';


export const Routing = () => {
    return (
        <>
        <Router>
        <Header/>
        <SearchBar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="./Favoris" exact component={Favoris}/>
            </Switch>
        </Router> 
        </>
    )
}


