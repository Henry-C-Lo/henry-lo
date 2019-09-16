import React from 'react';
import {Route, Switch} from "react-router";
import './App.css';
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Home from './pages/Home';
import Resume from './pages/Resume';
import AllRightReserved from "./components/AllRightsReserved";

export default function App() {
    const routes = (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/resume' exact component={Resume} />
            <Route path='/linkedIn' component={() => {
                window.location.href = 'https://www.linkedin.com/in/henry-lo-0621/';
                return null;
            }}/>
            <Route path='/gitHub' component={() => {
                window.location.href = 'https://github.com/Henry-C-Lo/';
                return null;
            }}/>
        </Switch>
    )

    return (
    <div className="App">
        <NavBar />
        <Intro/>
        <main>
            {routes}
        </main>
        <AllRightReserved/>
    </div>
  );
}

