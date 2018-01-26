import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { GOOGLE_API_KEY } from '../constants';

export class MapContainer extends Component {
    render() {

        return (
            <Map google={this.props.google}
                 initialCenter={{
                     lat: this.props.latitude,
                     lng: this.props.longitude
                 }}
                 zoom={15}>
                 <Marker name={this.props.name} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(MapContainer)
