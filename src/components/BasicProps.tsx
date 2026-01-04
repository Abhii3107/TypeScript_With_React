import React from 'react'
type Greet ={
    name:{
        first:string;
        second:string;
    };
    counting:number[];
}

function BasicProps(props:Greet) {

  return (
    <div>
      <h2>{props.name.first}</h2>
      <h2>{props.name.second}</h2>
    {props.counting.map((num) => (
        <h3 key={num}>{num}</h3>
      ))}
      
    </div>
  )
}

export default BasicProps
