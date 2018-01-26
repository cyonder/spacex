import React, { Component } from 'react';

class Rockets extends Component{
    renderWeights(weights){
        return Object.keys(weights).map((key, index) => {
            return (
                <div key={index}>
                    <span className="section-name">{`${weights[key].name}: `}</span>
                    <span>{`${weights[key].lb} lb / ${weights[key].kg} kg`}</span>
                </div>
            )
        })
    }

    renderRockets(){
        const { rockets } = this.props;
        let payload_weights = [];

        return Object.keys(rockets).map((key, index) => {
            payload_weights = rockets[key].payload_weights;

            return(
                <div className="rocket-wrapper" key={index}>
                    <div className="rocket-name h4">{ rockets[key].name }</div>
                    <div className="rocket-desc">{ rockets[key].description }</div>
                    <div className="section">
                        <span className="weigth-title h5">Technical Overview</span>
                        { this.renderWeights(payload_weights) }
                    </div>
                    <div className="section">
                        <div>
                            <span className="section-name">Height:</span>
                            {` ${rockets[key].height.meters} meters / ${rockets[key].height.feet} feet`}
                        </div>
                        <div>
                            <span className="section-name">Diameter:</span>
                            {` ${rockets[key].diameter.meters} meters / ${rockets[key].diameter.feet} feet`}
                        </div>
                        <div>
                            <span className="section-name">Mass:</span>
                            {` ${rockets[key].mass.lb} lb / ${rockets[key].mass.kg} kg`}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render(){
        // console.log("Rockets-props: ", this.props);

        return(
            <div id="rockets">
                <div className="rocket-imagery">
                    <div className="falcon-9-img"></div>
                    <div className="falcon-heavy-img"></div>
                </div>
                { this.renderRockets() }
            </div>
        )
    }
}

export default Rockets;
