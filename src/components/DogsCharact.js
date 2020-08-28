import React from 'react';
import DogsItemScore from './DogsItemScore';
import PropTypes from 'prop-types';

const DogsCharact = ({item, score:[img1, img2, img3, img4, img5 ]}) =>{
     
        return (<div>
            <div className="Items-title"> 
                 <p className="P-title">{ item }</p>  
            </div>    
            <div className="Items-title">  
                    <DogsItemScore imgStar={ img1 }/>
                    <DogsItemScore imgStar={ img2 }/>
                    <DogsItemScore imgStar={ img3 }/>
                    <DogsItemScore imgStar={ img4 }/>
                    <DogsItemScore imgStar={ img5 }/>
            </div>
         </div>)
};

DogsCharact.propTypes = {
        item: PropTypes.string.isRequired, 
        score: PropTypes.arrayOf(PropTypes.array),
       
}



export default DogsCharact;