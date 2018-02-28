import React from "react";
import PropTypes from "prop-types";

import { convertTimestamp } from './utils';
import images from './images'; 

const CurrentWeather = props => {
    return ( 
        <section>
            <div className="container">
            <div className="temperature">{props.temperature}&deg;F</div>
           <div className="time">{convertTimestamp(props.time)}</div>
           <div className="summary">{props.summary}</div>
           <div> <img src={images(props.time)} className="images" alt={props.icon}/></div>
           </div>
        </section>
    );
}

CurrentWeather.propTyoes ={
    time: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
}

export default CurrentWeather;