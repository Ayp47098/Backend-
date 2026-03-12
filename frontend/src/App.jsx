import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [rap,setRap]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/rap')
    .then((response)=>{
      setRap(response.data)
    }
  )
  .catch((error)=>{
    console.log(error);
    
  })
  })
  return (
    <>
    <h1>Full stack </h1>
    <p>RAP:{rap.length}</p>
    {
      rap.map((rap,index)=>{
        <div key={rap.id}>
          <h3>{rap.title}</h3>
          <p>{rap.content}</p>
        </div>
      })
    }
    </>
  )
}

export default App
