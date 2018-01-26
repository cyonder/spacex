import React, { Component } from 'react';
import moment from 'moment';

class Index extends Component{
    constructor(){
        super();
        this.state = {
            utc: true,
            local: false
        }
        this.toggleUTC = this.toggleUTC.bind(this);
        this.toggleLocal = this.toggleLocal.bind(this);
    }

    toggleUTC(){
        this.setState({
            utc: true,
            local: false
        })
    }

    toggleLocal(){
        this.setState({
            utc: false,
            local: true
        })
    }

    renderCountDown(){
        const { pastLaunches, upcomingLaunches } = this.props;
        let launchArray = pastLaunches.slice(-2).concat(upcomingLaunches.slice(0,3));
        let month, time;

        return Object.keys(launchArray).map((key, index) => {
            if(this.state.utc){
                month = moment(launchArray[key].launch_date_utc).utc().format("MMMM Do, YYYY");
                time = moment(launchArray[key].launch_date_utc).utc().format("HH:mm");
            }else{
                month = moment(launchArray[key].launch_date_utc).format("MMMM Do, YYYY");
                time = moment(launchArray[key].launch_date_utc).format("HH:mm");
            }

            return (
                <div className={`time time-${index}`} key={index}>
                        <span className={`time-icon time-icon-${index}`}></span>
                        <span className="time-text">
                            <span className="time-text-1">
                                { month }
                            </span>
                            <span className="time-text-2">
                                { time }
                            </span>
                        </span>
                </div>
            )
        })
    }


    render(){
        // console.log("Index-props: ", this.props);
        const utcZone = this.state.utc ? "active" : "";
        const localZone = this.state.local ? "active" : "";

        return(
            <div id="index">
                <div className="time-toggle btn-group btn-group-block">
                    <button className={`btn btn-brand ${utcZone}`} onClick={ this.toggleUTC }>UTC</button>
                    <button className={`btn btn-brand ${localZone}`} onClick={ this.toggleLocal }>Local</button>
                </div>
                <section className="timer">
                    <div className="count-down">
                        { this.renderCountDown() }
                    </div>
                </section>
            </div>
        )
    }
}

export default Index;
