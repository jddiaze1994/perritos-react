import React from 'react';

const DogsAvatar = (props) => {
    return (
        <div className="Avatar">
            <img src={props.infoAvatar.imgUrl} alt={props.infoAvatar.imgAlt} /> 
            <h1 className="h1"> {props.infoAvatar.dogBreed} </h1>
         </div> 
    )
};

export default DogsAvatar;