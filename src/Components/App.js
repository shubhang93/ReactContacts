import React from 'react';
import {LeftPane} from './LeftPane';
import {RightPane} from './RightPane';
import './css/app.css'

export class App extends React.Component {
  render() {
    // console.log(this.props)
    const {clickHandler, contactData, inputEventHandler, inputStates, indexToShow} = this.props
    return(
      <div className = "app">
        <LeftPane formData = {contactData}
          addClickHandler = {clickHandler}
          indexToShow = {indexToShow}/>
        <RightPane handlers = {inputEventHandler} 
          inputStates = {inputStates}/>
      </div>
    )
  }
}
