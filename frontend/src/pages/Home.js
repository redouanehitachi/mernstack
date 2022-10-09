import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

 function Home() {
    const [workouts,setworkouts]=useState(null)

  useEffect(()=>{
    const fetchworkout=async()=>{
        const response=await fetch('http://localhost:4000/api/workout',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        const json=await response.json()
        if(response.ok){
            setworkouts(json)
        }
    }
    fetchworkout()
  },[])
    
   
  return (
    <div className="home">
        <div className="workouts">
            {workouts && workouts.map(workout=>(
                <WorkoutDetails workout={workout} key={workout._id}/>
            ))}
        </div>
        <WorkoutForm/>

    </div>
    
    
  )
}
 export default Home
