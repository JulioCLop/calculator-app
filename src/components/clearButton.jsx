import React from 'react';
import './clearButton.css';


function ClearButton(props){

return <div className="clearButton" onclick={props.handleClear}>clear
{props.children}

</div>



}

export default ClearButton;

