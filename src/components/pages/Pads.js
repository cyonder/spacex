import React, { Component } from 'react';

class Pads extends Component{
    render(){
        console.log("Pads-props: ", this.props);

        return(
            <div id="pads">Pads Page</div>
        )
    }
}

export default Pads;
