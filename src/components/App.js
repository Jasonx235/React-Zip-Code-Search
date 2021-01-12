import React from 'react';
import './../App.css';
import Search from './Search';
import DisplayData from './DisplayData'
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      zipData: []
      
    }
    
  }


  //Retriving Data 
  findZipData = (zipcode) => {
    //console.log(zipcode);
    axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
    .then(res => { this.setState({zipData: res.data});
       this.goodRes();
    })
    .catch(err => {this.setState({zipData: []});
      this.badRes();
    })
  }

  goodRes= () =>{
    console.log(this.state.cityData);
    document.getElementById("error").style.display = "none";
  }

  badRes = () =>{
    document.getElementById("error").style.display = "block";
    setTimeout(this.goodRes, 2000);
  }

  render(){
  return (
    <div className="App">
      <div className="container">
        <img src="icons8-search-64.png"/>
        <h1>Zip Code Search</h1>
        <p>Enter a Zip Code to find more info!</p>
        <Search findZipData = {this.findZipData}/>
        <p id="error">Zip Code Not Found!</p>
        <DisplayData zipData={this.state.zipData}/>
      </div>
      
    </div>
  );
  }
}

export default App;


