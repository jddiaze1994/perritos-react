import React from 'react';

const DogsAvatar = ({infoAvatar:{imgUrl, imgAlt, dogBreed }}) => {
    return (
        <div className="Avatar">
           <img src={imgUrl} alt={imgAlt} />  
            <h1 className="h1"> {dogBreed} </h1>
         </div> 
    )
};

export default DogsAvatar;

