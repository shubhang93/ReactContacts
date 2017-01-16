import React from 'react';
import './css/forms.css'

let makeInput = (valueForPlaceHolder, eventHandlerFunction, identitiy, inputStateValues) => {
     let inputBox =  (<input placeholder = {valueForPlaceHolder}
            type = "text"
            onChange = {eventHandlerFunction}
            id = {identitiy}
            value = {inputStateValues}>
            </input>)
    return inputBox
}

export const Form = ({handlers, inputStates}) => {
          var[stateOfName, stateOfPhone, stateOfEmail, stateOfAddress] = inputStates
          // let onNameChange = (e) => nameHandler(e)
          // let onPhoneChange = (e) => phoneHandler(e)
          // let onEmailChange = (e) => emailHandler(e)
          // let onAddressChange = (e) => addressHandler(e)

          return(
            <div className = "forms">
              {makeInput("Enter your Name", handlers, "name", stateOfName)}
              <br/>
              {makeInput("Enter your Phone", handlers, "phone", stateOfPhone )}
              <br/>
              {makeInput("Enter your email", handlers, "email", stateOfEmail)}
              <br/>
              {makeInput("Enter your address", handlers, "address", stateOfAddress)}
          </div>)
}
