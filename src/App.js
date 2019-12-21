import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import StarRatings from './component/starRatings/StarRatings'

class App extends Component {
  


  render(){
    return (
      <div className="App">
        Review
        <StarRatings/>
      </div>
    );
  }  
}

export default App;
