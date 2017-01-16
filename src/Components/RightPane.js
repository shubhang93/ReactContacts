import React from 'react';
import './css/rightpane.css';
import {Form} from './Form';

export const RightPane = ({handlers, inputStates}) => {
  return (<div className = "right-pane">
            <Form handlers = {handlers} 
            inputStates = {inputStates}/>
          </div>)
}
