import React, { Component } from 'react';
import List from './components/List';
import Search from './components/Search';
import './App.css';
import vanCityLogo from '../src/vanCityLogo.png';

class App extends Component {
  constructor(props) {
  	super(props);
  	const data = require('./data.json');
  	this.state = {
  		data: data
  	}
 

  }
  render() {
    return (
      <div className="App">
      <img src={vanCityLogo} alt="logo" width={200} height={100}/>
        
      
      
        <div className="col-xs-7 form-container">
        <div className="title">FIDO FINDER</div>
        <div className="blurb"> Dog gone missing? Check our database to see if they are with us! Please enter the date your dog went missing in the format "yyyy-mm-dd" below. </div>
        <div className="blurb"> <b> Call us at 604-333-333 to reunite with your loved one! </b></div>
       </div>
       
       

        <div className="title2">
        <List data = {this.state.data} />
        </div>
     
      </div>
    
    
    );
  }
};



export default App;
