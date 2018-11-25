import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';




const Router = (props) => (
    <BrowserRouter>
        <Switch>
            <Route path="/:themeId" exact component={App} />
            <Route path="/" exact component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


export default Router;