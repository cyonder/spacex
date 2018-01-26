import React, { Component } from 'react';

class About extends Component{
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
        // console.log("About-props: ", this.props);

        return(
            <div id="about">
                <section>{ this.renderFacts() }</section>

                <div className="about-wrapper">
                    { this.props.companyInfo.summary }
                </div>
            </div>
        )
    }
}

export default About;
