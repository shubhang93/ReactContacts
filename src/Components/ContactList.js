import React from 'react';
import './css/contact-list.css';

export const ContactList = ({dataToShow, index}) => {
  return (<li className = "contact-list"
          key = {index}>
            {dataToShow.name}
          </li>)
}
