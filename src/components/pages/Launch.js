import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Launch extends Component{
    renderFacts(launch){
        let firstStage = launch.rocket.first_stage.cores[0].reused ? "Reused" : "New";
        let secondStage = launch.rocket.second_stage.payloads[0].reused ? "Reused" : "New";

        return(
            <div className="facts">
                <div className="fact">
                    <div className="fact-title">Rocket</div>
                    <div className="fact-detail">{ launch.rocket.rocket_name }</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Customer</div>
                    <div className="fact-detail">{ launch.rocket.second_stage.payloads[0].customers[0] }</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Mass</div>
                    <div className="fact-detail">{`${launch.rocket.second_stage.payloads[0].payload_mass_lbs} lbs`}</div>
                </div>
                <div className="fact">
                    <div className="fact-title">Site Name</div>
                    <div className="fact-detail">{ launch.launch_site.site_name }</div>
                </div>
                <div className="fact">
                    <div className="fact-title">1st Stage</div>
                    <div className="fact-detail">{ firstStage }</div>
                </div>
                <div className="fact">
                    <div className="fact-title">2nd Stage</div>
                    <div className="fact-detail">{ secondStage }</div>
                </div>
            </div>
        )
    }

    render(){
        console.log("Launch-props: ", this.props);

        const { pastLaunches, upcomingLaunches, match: { params } } = this.props;
        let launchArray = pastLaunches.concat(upcomingLaunches);

        let launch = Object.keys(launchArray)
                        .filter(key => launchArray[key].flight_number === parseInt(params.id))
                        .map(key => launchArray[key])[0];
        let youtubeLink;

        if(launch.links.video_link){
            youtubeLink = launch.links.video_link.replace("/watch?v=", "/embed/");
        }

        return(
            <div id="launch">
                { this.renderFacts(launch) }
                <div className="launch-wrapper">
                    <div className="video">
                        <iframe width="420" height="315" frameBorder="0" allowFullScreen src={ youtubeLink }></iframe>
                    </div>
                    <div className="launch-details">{ launch.details }</div>
                </div>
            </div>
        )
    }
}

export default withRouter(Launch);
