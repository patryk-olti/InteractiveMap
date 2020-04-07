import React from 'react';
import map from "./img/mapa.png";
import "./Map.css";
import Information from './Information';

class Map extends React.Component{

    state = {
        iteration: 0,
        maxIteration: 5,
        base: []
    }

    changeActive = () => {
        const dots = [...document.querySelectorAll('.dot')];
        let variable = this.state.iteration;

        if((variable+1) >= this.state.maxIteration){
            variable = 0;
        }else{
            variable += 1;
        }

        dots.forEach((item, index) => {
            item.classList.remove('active');

            if(index === variable){
                item.classList.add('active');
            }
        });

        this.setState({
            iteration: variable
        })

    }

    componentDidMount(){
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            setInterval( this.changeActive() , 2000);

            this.setState({
                base: data.devices,
                maxIteration: [...data.devices].length
            })
        })  
    }

    render(){
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