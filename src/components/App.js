import React, { Component } from 'react';
import { Route, Switch, NavLink, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Index from './pages/Index';
import About from './pages/About';
import Dates from './pages/Dates';
import Rockets from './pages/Rockets';
import Pads from './pages/Pads';
import Launch from './pages/Launch';

import {
    fetchCompanyInfo,
    fetchPastLaunches,
    fetchUpcomingLaunches,
    fetchRockets,
    fetchPads
} from '../actions';

const NoMatch = () => {
    return <span>Page Not Found</span>
}

const Loading = () => {
    return <span>Loading...</span>
}

const Links = () => {
    return [
        <NavLink to="/about"   activeClassName="selected" key={1}>About</NavLink>,
        <NavLink to="/dates"   activeClassName="selected" key={2}>Launches</NavLink>,
        <NavLink to="/rockets" activeClassName="selected" key={3}>Rockets</NavLink>,
        <NavLink to="/pads"    activeClassName="selected" key={4}>Launch Pads</NavLink>,
    ]
}

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/" exact      render={ () => <Index   { ...props } /> } key={1}/>,
            <Route path="/about"       render={ () => <About   { ...props } /> } key={2}/>,
            <Route path="/dates"       render={ () => <Dates   { ...props } /> } key={3}/>,
            <Route path="/rockets"     render={ () => <Rockets { ...props } /> } key={4}/>,
            <Route path="/pads"        render={ () => <Pads    { ...props } /> } key={5}/>,
            <Route path="/launch/:id"  render={ () => <Launch  { ...props } /> } key={6}/>,
            <Route component={NoMatch} />
        </Switch>
    )
}

class App extends Component{
    constructor(){
        super();

        this.state = {
            toggleNav: false,
            loading: true
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount(){
        this.props.fetchCompanyInfo(() => {
            this.props.fetchPastLaunches(() => {
                this.props.fetchUpcomingLaunches(() => {
                    this.props.fetchRockets(() => {
                        this.props.fetchPads(() => {
                            this.setState({ loading: false })
                        })
                    })
                });
            });
        });
    }

    toggleNav(){
        this.setState({ toggleNav: !this.state.toggleNav })
    }

    render(){
        console.log("App-props: ", this.props);

        const { loading } = this.state;
        const isOpen = this.state.toggleNav ? "is-open" : "";
        const activeClass = this.props.location.pathname === "/" ? "home-page" : "";

        return(
            <div className={`app ${activeClass}`}>
                <header>
                    <div className="header wrapper">
                        <div className="logo text-hide">
                            <Link to="/">logo</Link>
                        </div>
                        <nav className="web-nav stroke">
                            <Links />
                        </nav>
                        <nav className={`mobile-nav-toggle ${isOpen}`} onClick={ this.toggleNav }>
                            <span></span>
                        </nav>
                    </div>
                </header>
                <div className={`mobile-nav ${isOpen}`}>
                    <Links />
                </div>
                <main>
                    <div className="main wrapper">
                        { !loading ? <Routes { ...this.props } /> : <Loading /> }
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companyInfo: state.companyInfo,
        pastLaunches: state.launches.pastLaunches,
        upcomingLaunches: state.launches.upcomingLaunches,
        rockets: state.rockets,
        pads: state.pads
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchCompanyInfo,
        fetchPastLaunches,
        fetchUpcomingLaunches,
        fetchRockets,
        fetchPads
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
