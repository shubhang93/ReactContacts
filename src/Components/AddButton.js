import React from 'react';
import './css/addbutton.css';

export const AddButton = ({clickHandler}) => {
  return (<button className = "add-bt"
   onClick = {clickHandler}>
   {"ADD CONTACT"}
   </button>)
}
