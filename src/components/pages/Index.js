import React, { Component } from 'react';
import moment from 'moment';

class Index extends Component{

    renderCountDown(){
        const { pastLaunches, upcomingLaunches } = this.props;
        let launchArray = pastLaunches.slice(-2).concat(upcomingLaunches.slice(0,3));



        return Object.keys(launchArray).map((key, index) => {
            return (
                <div className={`time time-${index}`} key={index}>
                        <span className={`time-icon time-icon-${index}`}></span>
                        <span className="time-text">
                            <span className="time-text-1">
                                { moment(launchArray[key].launch_date_utc).format("MMMM Do, YYYY") }
                            </span>
                            <span className="time-text-2">
                                { moment(launchArray[key].launch_date_utc).format("HH:mm") }
                            </span>
                        </span>
                </div>
            )
        })
    }
    renderFacts(){
        const { founded, founder, headquarters, employees, valuation } = this.props.companyInfo;
        const { pastLaunches, upcomingLaunches } = this.props;
        const valuationAsText = valuation.toString().substring(0, 2);

        return(
            <div className="facts">
                <div className="fact">
                    <div className="fact-title">Founded</div>
                    <div className="fact-detail">{ founded }</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Founder</div>
                    <div className="fact-detail">{ founder }</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Where</div>
                    <div className="fact-detail">{ headquarters.city }</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Launches</div>
                    <div className="fact-detail">{`${pastLaunches.length} + ${upcomingLaunches.length}`}</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Employees</div>
                    <div className="fact-detail">{`${employees}+`}</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Valuation</div>
                    <div className="fact-detail">{`${valuationAsText} Billion`}</div>
                </div>
            </div>
        )
    }

    render(){
        console.log("Index-props: ", this.props);

        return(
            <div id="index">
                <section>{ this.renderFacts() }</section>
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
