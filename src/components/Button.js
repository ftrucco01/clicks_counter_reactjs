import React from "react";
import '../css/button.css';

function Button( {text, isClickButton, clickHandler} )
{
    return (
        <button
         className={ (isClickButton) ? 'boton-clic': 'boton-reiniciar' }
         onClick={clickHandler}>
            {text}
        </button>
    );
}

export default Button;