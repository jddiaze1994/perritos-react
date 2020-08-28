import React from 'react';

const DogsItemStar = (props) =>{

    const {imgStar} = props;
    const {allStart} = props;

    return (
        <div className="Items-start"> 
            <img className="img-start" src={imgStar} alt={allStart} /> 
        </div> 
    )

}

export default DogsItemStar;