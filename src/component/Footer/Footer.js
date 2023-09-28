import React,{ useState } from 'react';
import './Footer.css'
import axios from 'axios'

function Footer() {
  const [State,setState]=useState([])
  return (
    <div className='footer'>
        <button className='but' onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data)
            setState(response.data)
        })
    } } > play </button>
    {
      State.map((obj,index)=>{
        return(
          <div>
            <h4>{index}</h4>
            <h1>{obj.body}</h1>
          </div>
        )
      })
    }</div>
  )
}

export default Footer