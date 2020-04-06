import React from 'react';
import map from "./img/mapa.png";
import "./Map.css";
import Information from './Information';

class Map extends React.Component{

    state = {
        iteration: 1,
        maxIteration: 5,
        base: []
    }

    changeActive = () => {
        const dots = document.querySelectorAll('.dot');

        dots.forEach(item => {
            item.classList.toggle('active');
        });


    }

    componentDidMount(){
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            setInterval( this.changeActive() , 2000);

            this.setState({
                base: data.devices
            })
        })  
    }

    render(){
        console.log(this.state.base);

        return (
            <div className="polandMap">
    
                <div className="dot wroclaw active"></div>
                <div className="dot szczecin active"></div>
                <img src={map} alt="map"/>
    
                <Information />
            </div>
        )
    }
}

export default Map;