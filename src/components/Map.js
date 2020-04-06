import React from 'react';
import map from "./img/mapa.png";
import "./Map.css";

function Map(){

    return (
        <div className="polandMap">
            
            <div className="dot"></div>
            <img src={map} alt="map"/>
        </div>
    )
}

export default Map;