import React from 'react';
import ClearButton from './clearButton';
import './clearButton.css';

function Clear(){
    return <div className="row">
    <ClearButton handleClear = {()=>{this.setState({input: ''})}} />

    </div>
}

export default Clear;


