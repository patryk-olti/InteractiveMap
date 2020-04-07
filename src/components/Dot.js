import React from 'react';
import './Dot.css';

function Dot(props){

    let classN = 'dot '+ props.extendsClass;

    return(
        <div className={classN}></div>
    )
}

export default Dot;