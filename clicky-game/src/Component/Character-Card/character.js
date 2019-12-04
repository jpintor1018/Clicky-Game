import React from 'react';
import "./style.css"
const Character = props=>{
    return(
        <img 
        className="img-responsive m-3" 
        id={props.id}
        width="150" 
        height="150" 
        alt={props.name} 
        src={props.image}
        onClick={(e) => props.selected(e)}
    />
    );
}

export default Character;