import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featurePup = puppies.find((pup) => pup.id === featPupId);
  console.log(featurePup)

  return (
    <>
     {
      puppies.map((puppy) => {
        return <p onClick = {()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      })
     }

     {featPupId && (
      <div>
        <h2>{featurePup.name}</h2>
        <ul>
          <li>Age: {featurePup.age}</li>
          <li>Email: {featurePup.email}</li>
        </ul>
      </div>
     )}
    </>
  )
}

export default App