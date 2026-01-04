import React from 'react'
type GreetType = {
    name:string;
    age:number;
    isMonitor:boolean;
}

function Props(prop: GreetType) {
  return (
    <div>
      <h1>{prop.name}</h1>
      <h2>{prop.age}</h2>
      <h3>{prop.isMonitor ? "welcome to class":"out of class"}</h3>
    </div>
  )
}

export default Props
