import React from 'react';
import './BuildControl.css'

const buildControl = (props) => (
<div  className="BuildControl">
    <div className="Label">
        {props.label}
    </div>
    <button className="Less" onClick={props.less}>Less</button>
    <button className="More" onClick={props.added}>Add</button>
</div>
);

export default buildControl;