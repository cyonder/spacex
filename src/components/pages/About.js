import React, { Component } from 'react';

class About extends Component{
    render(){
        console.log("About-props: ", this.props);

        return(
            <div id="about">About Page</div>
        )
    }
}

export default About;
