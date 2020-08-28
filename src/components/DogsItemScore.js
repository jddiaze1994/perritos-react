import React from 'react';
import PropTypes from 'prop-types';

const DogsItemStar = ({imgStar:[ urlImg, urlAlt]}) =>{

    return (
        <div className="Items-start"> 
            <img className="img-start" src={urlImg} alt={urlAlt} /> 
        </div> 
    )

}

DogsItemStar.propTypes = {
    imgStar: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default DogsItemStar;