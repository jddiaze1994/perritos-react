import React, {useState, useEffect} from 'react';

const useChangeDogs = (infoDog, infoScore) => {

    const [obBreed, setDog] = useState(infoDog);
    const [arScore, setScore] = useState(infoScore);

    //Despues del renderizado haga lo siguiente
    useEffect(() =>{
        console.log('usseEfect');
        document.title = obBreed.dogBreed;
        
    },[obBreed]);

    return [obBreed, arScore, setDog, setScore]
}

export default useChangeDogs;