import React, { useState } from 'react'

export default function WorkoutForm() {

    const [title,settitle]=useState('')
    const [load,setload]=useState('')
    const [reps,setreps]=useState('')
    const [error,seterror]=useState(null)

    const handleSubmet=async(e)=>{
        e.preventDefault()
        const workout={title,load,reps}
        const response = await fetch('http://localhost:4000/api/workout',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{'Content-Type':'application/json'}
        })
        
        const json=await response.json()
        if (!response.ok) {
            seterror(json.error)
            
        }
        if (response.ok) {
            seterror(null)
            console.log('new workout added ',json)
            setload('')
            setreps('')
            settitle('')
        }
    }
  return (
    <form className='create' onSubmit={handleSubmet}>
     <h3> add a new workout</h3>
     <label > Exercise title </label>
     <input type="text"
       onChange={(e)=>settitle(e.target.value)}
       value={title}
      />
      <label > load (in kg): </label>
     <input type="number"
       onChange={(e)=>setload(e.target.value)}
       value={load}
      />
      <label > Reps:</label>
     <input type="number"
       onChange={(e)=>setreps(e.target.value)}
       value={reps}
      />
      <button type="submit">add Workout</button>
    </form>
  )
}
