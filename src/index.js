import React from "react";
import ReactDOM from "react-dom";
// react-dom (what we'll use here)
import { Route, Switch, HashRouter } from 'react-router-dom';

import Meta from './js/base/Meta';
import Header from './js/base/Header';
import Footer from "./js/base/Footer";

import Homepage from './js/pages/Homepage';
import Contact from "./js/pages/Contact";
import About from "./js/pages/About";
import PageNotFound from "./js/pages/PageNotFound";

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
        <div>
            <Meta />
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/about-us" component={About} />
                <Route path="/contact-us" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </div>
    </HashRouter>,
    app
);