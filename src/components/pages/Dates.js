import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Dates extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id){
        this.props.history.push(`/launch/${id}`)
    }

    renderLaunches(){
        const { pastLaunches, upcomingLaunches } = this.props;
        let launchArray = pastLaunches.concat(upcomingLaunches);
        let launch_success;
        let date;

        return Object.keys(launchArray).map((key, index) => {
            date = moment(launchArray[key].launch_date_utc).utc().format("YYYY, MMMM Do");

            if(launchArray[key].launch_success){
                launch_success = <span style={{color: "green"}}>√</span>;
            }else if(launchArray[key].launch_success === null){
                launch_success = <span style={{color: "white"}}>-</span>;
            }else{
                launch_success = <span style={{color: "red"}}>X</span>;
            }

            return (
                <tr className="table-data" key={key} onClick={ () => this.handleClick(launchArray[key].flight_number) }>
                    <td>{ launchArray[key].flight_number }</td>
                    <td>{ date }</td>
                    <td>{ launchArray[key].rocket.rocket_name }</td>
                    <td>{ launchArray[key].rocket.second_stage.payloads[0].payload_type }</td>
                    <td>{ launchArray[key].rocket.second_stage.payloads[0].customers[0] }</td>
                    <td style={{textAlign: "center"}}>{ launch_success }</td>
                    <td>{ launchArray[key].launch_site.site_name }</td>
                </tr>
            )
        })
    }

    render(){
        // console.log("Dates-props: ", this.props);

        return(
            <div id="dates">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{width: "10%"}}>Flight NO</th>
                            <th>Launch Date</th>
                            <th style={{width: "15%"}}>Rocket</th>
                            <th style={{width: "20%"}}>Payload</th>
                            <th>Customer</th>
                            <th style={{width: "10%", textAlign: "center"}}>Succes</th>
                            <th style={{width: "15%"}}>Launch Site</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderLaunches() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dates;
