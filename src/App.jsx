
import React from 'react'
import { useState } from 'react'
import "./style.css"


export default function App() {
    const[count,Setcount]=useState(0)
    function handleClickup(){
     
    Setcount(count+1)
    }
    function handleClickdown(){
        if(count>0){
        Setcount(count-1)
        }
    }
   
  return (
    <div className="count-num">
        <h1 className='num'>{count}</h1>
      <div className="btns">
     <button className='add-btn'onClick={handleClickup}>UP</button>
     <button className="sub-btn" onClick={handleClickdown}>DOWN</button>
     </div> 
    </div>
  )
}
