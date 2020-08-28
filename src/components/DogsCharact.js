import React from 'react';
import DogsItemStar from './DogsItemStar';

const DogsCharact = (props) =>{

        const { infoItems:{ itemVitalidad, itemLadrador, itemVigilancia, itemProteccion,
                            itemRelaNinos, itemRelaPerros, itemAprendizaje, itemEjercicio } }  = props;
        //Doble destructuring
        const { infoItems:{ imgStar:{ imgStarOnUrl,  imgStarOnAlt, imgStarOffUrl, imgStarOffAlt } } } = props;

        return (<div>
            <div className="Items-title"> 
                 <p className="P-title">{itemVitalidad}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
            <div className="Items-title"> 
                 <p className="P-title">{itemLadrador}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
            <div className="Items-title"> 
                 <p className="P-title">{itemVigilancia}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
            <div className="Items-title"> 
                 <p className="P-title">{itemProteccion}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
            <div className="Items-title"> 
                 <p className="P-title">{itemRelaNinos}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
            <div className="Items-title"> 
                 <p className="P-title">{itemRelaPerros}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
            <div className="Items-title"> 
                 <p className="P-title">{itemAprendizaje}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
            <div className="Items-title"> 
                 <p className="P-title">{itemEjercicio}</p>
            </div>    
            <div className="Items-title">      
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOnUrl}  allStart={ imgStarOnAlt} ></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
                <DogsItemStar imgStar= {imgStarOffUrl} allStart={ imgStarOffAlt}></DogsItemStar>
            </div>
         </div>)
};

export default DogsCharact;