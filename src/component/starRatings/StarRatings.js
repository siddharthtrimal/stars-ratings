import React,{Component} from 'react';

import Star from './star';

const starDivStyle = {
  border:'1px solid black',
  height:'auto',
  width:'auto',
  justifyContent: 'center',
  display:'flex'
}

class StarRatings extends Component {
  
  state={
    coords: 0
  }

  showCoords = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    console.log(x, y, event);
    // var coords = "X coords: " + x + ", Y coords: " + y;
    // // console.log(document.getElementById("star1" ).offsetWidth);
    // // console.log(document.getElementById("star1" ).offsetLeft);
    // const cords = ((x-(document.getElementById("star1" ).offsetLeft))/(document.getElementById("star5" ).offsetWidth))
    // // console.log(window.getComputedStyle(test,null).getPropertyValue('left'))
    // const cords2 = (Math.ceil(cords / 0.1) * 0.1).toFixed(1)
    // this.setState({coords: cords2})
    // console.log(cords2)
  }
  render(){
    return (
      <div style={{width:'80%',paddingLeft:'10%'}}>
        Ratings
        <div>{this.state.coords}</div>
        <div  id="test" style={starDivStyle} onClick={(event)=>this.showCoords(event)} onMouseMove={(event)=>this.showCoords(event)}>
          {[1, 2, 3, 4, 5].map(starId => {
            const value = `star${starId}`;
            return (
              <div  style={{width:'20%'}} id={value}>
                <Star key={value} starName={value} fillValue1={Math.random()} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }  
}

export default StarRatings;