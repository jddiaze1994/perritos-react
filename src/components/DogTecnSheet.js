import React from 'react';
import DogsCharact from './DogsCharact';

const DogTecnSheet = (props) =>{

    return( <div className="TecnSheet" > 
        <h2 className="h2-Tecn"> Ficha técnica Bull Dog Frances </h2>
        <DogsCharact infoItems = {props.infoItems}></DogsCharact>
    </div>
    )
};

export default DogTecnSheet;