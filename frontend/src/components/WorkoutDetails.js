import React from 'react'

export default function WorkoutDetails(workout) {
  
    return (
        <div className="workout-details">
          <h4>{workout.workout.title}</h4>
          <p><strong>Load (kg): </strong>{workout.workout.load}</p>
          <p><strong>Number of reps: </strong>{workout.workout.reps}</p>
          <p>{workout.workout.createdAt}</p>
        </div>
      )
    
  
}
