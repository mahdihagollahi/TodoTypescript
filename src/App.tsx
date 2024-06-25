import React from "react"

type array = number[]
type array2 = string[]
type array4 = (number | String)[]
type user3 = {name:number ,age:string}

function App() {

let array : array = [1,2,3,4,5,]
console.log(array)

let array2 :array2  = ['34']

let array4 :array4  = []

let user3 : user3 = {
name:12,
age:'daf',

}

  return (
    <div>App</div>
  )
}

export default App