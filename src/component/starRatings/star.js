import React from 'react';

function star (props){

  const fir = `${props.fillValue1}%`;
  const secnd = `${100-props.fillValue1}%`;

  return(
   <div style={{maxWidth:'100%'}}>
     {console.log(props.fillValue1, props.starName)}
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="240" viewBox="0 0 51 48">
      <title>{props.starName}</title>
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={0} stopColor="Blue"/>
          <stop offset={props.fillValue1 / 100} stopColor="white"/>
        </linearGradient>
      </defs>
        <path fill="url(#linear)"  stroke="#000" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"/>
      </svg>
   </div> 
  )
}

export default star;