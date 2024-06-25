import React from 'react'

function Todos(props:{name:string , age:number , hasChiled:boolean}) {
  return (
    <div>
        <h2>{props.age}</h2>
        <h2>{props.hasChiled}</h2>
        <h2>{props.name}</h2>
    </div>
  )
}

export default Todos