import React, { Component } from 'react';

class Rockets extends Component{
    render(){
        console.log("Rockets-props: ", this.props);

        return(
            <div id="rockets">Rockets Page</div>
        )
    }
}

export default Rockets;
