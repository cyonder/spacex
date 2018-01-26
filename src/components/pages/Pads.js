import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../MapContainer';

class Pads extends Component{
    renderPads(){
        const { pads } = this.props;
        let padStatus;

        return Object.keys(pads).map((key, index) => {
            if(pads[key].status === "active"){
                padStatus = <span style={{color: "green"}}>{pads[key].status}</span>;
            }else if(pads[key].status === "retired"){
                padStatus = <span style={{color: "red"}}>{pads[key].status}</span>;
            }else{
                padStatus = <span style={{color: "#839199"}}>{pads[key].status}</span>;
            }

            return (
                <div className="pad-wrapper" key={index}>
                    <div className="pad-name h5">
                        <span>{pads[key].full_name}</span>
                        <span className="h6">{padStatus}</span>
                    </div>
                    <div className="pad-location">{`${pads[key].location.region}, ${pads[key].location.name}`}</div>
                    <div className="pad-desc">{ pads[key].details }</div>
                    <div className="google-maps">
                        <MapContainer
                            latitude={pads[key].location.latitude}
                            longitude={pads[key].location.longitude}
                            name={pads[key].location.name}
                        />
                    </div>
                </div>
            )
        })
    }

    render(){
        // console.log("Pads-props: ", this.props);

        return(
            <div id="pads">
                { this.renderPads() }
            </div>
        )
    }
}

export default Pads;
