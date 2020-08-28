import React from 'react';
import DogsAvatar from './DogsAvatar';
import DogTecnSheet from './DogTecnSheet';
import './../Estilos.css';

const  infoDog = {
    infoAvatar: {
        imgUrl: '/img/BullDogFrances.jpg', 
        imgAlt: 'Imagen Bull Dog Frances',
        dogBreed: 'Bull Dog Frances',
    },
    infoItems: {
        itemVitalidad:   'Vitalidad',
        itemLadrador:    'Ladrador',
        itemVigilancia:  'Instinto de Vigilancia',
        itemProteccion:  'Inst. de protección',
        itemRelaNinos:   'Relación con los niños',
        itemRelaPerros:  'Relación con los perros',
        itemAprendizaje: 'Cap. de aprendizaje',
        itemEjercicio:   'Necesidad ejercicio',
        imgStar :{
            imgStarOnUrl:  '/img/estrella-con-relleno.png',
            imgStarOnAlt:  'Con relleno',
            imgStarOffUrl: '/img/estrella-sin-relleno.png',
            imgStarOffAlt: 'Sin relleno'
        }

    }
  
} 

//arrowfunction
const DogsFather = () =>
(
    <div className="Father"> 
        <DogsAvatar infoAvatar = {infoDog.infoAvatar}></DogsAvatar>
        <DogTecnSheet infoItems = {infoDog.infoItems}></DogTecnSheet>
    </div>
);

export default DogsFather;