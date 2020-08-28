import React, {Component} from 'react';

class DogsAvatar extends Component {

    constructor( ){
        super();

        //Estado inicial del componente avatar
         this.state ={
            imgUrl: '/img/BullDogFrances.jpg', 
            imgAlt: 'Imagen Bull Dog Frances',
            dogBreed: 'Bull Dog Frances',
        }
    };

    handleUdtDog = () =>{
        this.setState({
            imgUrl: '/img/Schnauzer.jpg', 
            imgAlt: 'Imagen Schnauzer',
            dogBreed: 'Schnauzers',
        }
        );
    };

    render(){
        const { imgUrl, imgAlt, dogBreed } = this.state;
        return(
            <div className="Avatar">
                <img src={imgUrl} alt={imgAlt} /> 
                <h1 className="h1"> {dogBreed} </h1>
                <button onClick={this.handleUdtDog}>Cambiar Perro</button>
           
            </div>
        ) 
    }

};

export default DogsAvatar;