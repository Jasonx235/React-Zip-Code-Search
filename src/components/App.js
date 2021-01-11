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
    axios.get(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
    .then(res => { this.setState({zipData: res.data})
       console.log(this.state.zipData);
    })
    .catch(err => console.log("No Zip found"));
  }

  render(){
  return (
    <div className="App">
      <div className="container">
        <h1>Zip Code Search</h1>
        <Search findZipData = {this.findZipData}/>
        <DisplayData zipData={this.state.zipData}/>
      </div>
      
    </div>
  );
  }
}

export default App;
