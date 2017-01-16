import React from 'react';
import './css/leftpane.css';
import { AddButton } from './AddButton'
import { ContactList } from './ContactList'
import './css/details.css'

export const LeftPane = ({formData, addClickHandler, indexToShow}) => {
  return(
    <div className = "left-pane">
        {formData.map((dataToDisplay, i) => <ContactList
        dataToShow = {dataToDisplay} index = {i} key = {i}
        />)}
        <br/>
        <DetailsBox/>
        <br/>
      <AddButton clickHandler = {addClickHandler}/>
    </div>

  )
}

const DetailsBox = () => {
  return(
    <div className = "details-box">
      <p>Close</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}
