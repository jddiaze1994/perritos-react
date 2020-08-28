import React from 'react';
import DogsCharact from './DogsCharact';
import { VITALIDAD,  LADRADOR,   VIGILANCIA,  PROTECCION, 
         RELACIONNI, RELACIONPE, APRENDIZAJE, EJERCICIO } from './../constants/dogs';

const DogTecnSheet = ( props ) =>{

    const [ SCOREVITALIDAD, SCORELADRADOR,   SCOREVIGILANCIA,  SCOREPROTECCION, 
            SCORERELACIONNI, SCORERELACIONPE, SCOREAPRENDIZAJE, SCOREEJERCICIO ] = props.infoScore;
        

    console.log(props.breed);
    return( <div className="TecnSheet" > 
        <h2 className="h2-Tecn"> Ficha técnica {props.breed}</h2>
        <DogsCharact item={ VITALIDAD   } score={ SCOREVITALIDAD   } />
        <DogsCharact item={ LADRADOR    } score={ SCORELADRADOR    } />
        <DogsCharact item={ VIGILANCIA  } score={ SCOREVIGILANCIA  } />
        <DogsCharact item={ PROTECCION  } score={ SCOREPROTECCION  } />
        <DogsCharact item={ RELACIONNI  } score={ SCORERELACIONNI  } />
        <DogsCharact item={ RELACIONPE  } score={ SCORERELACIONPE  } />
        <DogsCharact item={ APRENDIZAJE } score={ SCOREAPRENDIZAJE } />
        <DogsCharact item={ EJERCICIO   } score={ SCOREEJERCICIO   } />
    </div>
    )
};

export default DogTecnSheet;