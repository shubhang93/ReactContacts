import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {App} from './Components/App';
import {Header} from './Components/Header';
import './index.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      data:[],
      id: 0,
      nameInputState:"",
      phoneInputState:"",
      emailInputState:"",
      addressInputState:"",
      showIndex: false,
      indexToShow: null

    }
  }
  clearInputValues() {
    this.setState((prevState) => {
      return {nameInputState:"",
              phoneInputState:"",
              emailInputState:"",
              addressInputState:""
            }
    })
  }
  showDetailsPane = (index) => {
    this.setState({showIndex: true,
                   indexToShow: index  
                })
  }
  // nameHandler = (e) => {
  //   e.preventDefault()
  //   // console.log(e.target.value)
  //   this.setState((prevState) => {
  //     return {nameInputState: e.target.value}
  //   })
  // }
  // emailHandler = (e) => {
  //   // console.log(e.target.value)
  //   e.preventDefault()
  //   this.emailInputState = e.target.value
  // }
  // phoneHandler = (e) => {
  //   // console.log(e.target.value)
  //   e.preventDefault()
  //   this.phoneInputState = e.target.value
  // }
  // addressHandler = (e) => {
  //   // console.log(e.target.value)
  //   e.preventDefault()
  //   this.addressInputState = e.target.value
  // }

inputEventHandler = (e) => {
  switch(e.target.id){
      case "name":
        console.log(e.target.value)
        this.setState({nameInputState: e.target.value})
        break
      case "phone":
      console.log(e.target.value)
        this.setState({phoneInputState: e.target.value})
        break
      case "email":
      console.log(e.target.value)
        this.setState({emailInputState: e.target.value})
        break
      case "address":
        console.log(e.target.value)
        this.setState({addressInputState: e.target.value})
        break
      default:
          return false
      }
}

  buttonClickHandler = () => {
    console.log("Called")
    if(this.state.nameInputState == "" || this.state.phoneInputState == "" 
    || this.state.emailInputState == "" || this.state.addressInputState == "") 
      return false
     var tempDataObject = {
      name: this.state.nameInputState,
      address: this.state.addressInputState,
      phoneNumber: this.state.phoneInputState,
      email: this.state.emailInputState,
      id: this.state.id
    };
    console.log(tempDataObject)
    this.setState((prevState) => {
      return {data: this.state.data.concat(tempDataObject),
              id: this.state.id + 1
            }
    })
    this.clearInputValues();

  }

  render() {
    const props = {
      // formHandlers: [this.nameHandler, this.emailHandler, this.phoneHandler, this.addressHandler],
      inputEventHandler: this.inputEventHandler,
      clickHandler: this.buttonClickHandler,
      contactData: this.state.data,
      inputStates:[this.state.nameInputState, this.state.phoneInputState, 
      this.state.emailInputState, this.state.addressInputState],
      // inputValues: [state.nameInputState, state.phoneInputState, state.emailInputState, state.addressInputState]
      indexToShow: this.state.indexToShow
    }
    return(
      <div className = "main">
        <Header/>
        <App {...props}/>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'))
