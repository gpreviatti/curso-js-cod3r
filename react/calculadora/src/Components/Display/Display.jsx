import React from 'react';
import './Display.css';

export default props => 
    <div>
        <label>Total: </label>
        <input type="text" placeholder={props.total}/>
    </div>