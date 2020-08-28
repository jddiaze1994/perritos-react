import React from 'react';
import useChangeDogs from './../hooks/useChangeDogs';
import DogsAvatarClass from './DogsAvatarClass';
import DogsAvatar from './DogsAvatar';
import DogTecnSheet from './DogTecnSheet';
import './../Estilos.css';
import { SCOREBULLDOG, SCORESCHNAUZER} from './../constants/dogs';

const infoDog ={
        imgUrl: '/img/BullDogFrances.jpg', 
        imgAlt: 'Imagen Bull Dog Frances',
        dogBreed: 'Bull Dog Frances',
        idDog: 1
    };

//const dogBreedFran = 'Bull Dog Frances';
//const dogBreedSna = 'Schnauzer';

const infoDogSchnauzer = {
        imgUrl: '/img/Schnauzer.JPG', 
        imgAlt: 'Imagen Schnauzer',
        dogBreed: 'Schnauzer',
        idDog: 2,
} 

/*const useChangeDogs = (infoDog, infoScore) => {

    const [obBreed, setDog] = useState(infoDog);
    const [arScore, setScore] = useState(infoScore);

    //Despues del renderizado haga lo siguiente
    useEffect(() =>{
        console.log('usseEfect');
        document.title = obBreed.dogBreed;
        
    },[obBreed]);

    return [obBreed, arScore, setDog, setScore]
} */


//arrowfunction
const DogsFather = () =>{

    const[ obBreed, arScore, setDog, setScore ] = useChangeDogs(infoDog, SCOREBULLDOG);
   
    const handleUpdateClick = () =>{
        console.log('Aumentar conteo');
        if( obBreed.idDog == 1 ){
            setDog( infoDogSchnauzer );
            setScore( SCORESCHNAUZER );
        }else{
            setDog( infoDog );
            setScore( SCOREBULLDOG );
        }    

        console.log(obBreed.dogBreed);
    }

    return(
        <div className="Father">  
        <button onClick={handleUpdateClick}>Cambiar Perro</button>
        <DogsAvatar infoAvatar={obBreed}></DogsAvatar>
        <DogTecnSheet infoScore={ arScore} breed={obBreed.dogBreed}></DogTecnSheet>

        
    </div>)
};

export default DogsFather;