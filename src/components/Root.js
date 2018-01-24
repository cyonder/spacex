import React from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

const NoMatch = () => {
    return <span>Page Not Found</span>
}

const AppLayout = () => {
    return(
        <div className="app">
            <header>
                <div className="header wrapper">
                    <div className="logo"></div>
                    <nav>
                        <Link to="">About SpaceX</Link>
                        <Link to="">Launch Dates</Link>
                        <Link to="">Rockets</Link>
                        <Link to="">Launch Pads</Link>
                    </nav>
                </div>
            </header>
            <main>
                <div className="wrapper">

                </div>
            </main>
        </div>
    );
}

const Root = ({store}) => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;
