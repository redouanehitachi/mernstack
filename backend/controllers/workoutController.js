
const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')


// get all workout

const getAll=async(req,res)=>{

    const workouts = await Workout.find({}).sort({createdAt: -1})

     res.status(200).json(workouts)
   
}
// get single workout

const singleworkout=async(req,res)=>{
    const{id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({msg:'no such workout found'})
        
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        res.status(404).json({msg:'no such workout found'})
    }
    res.status(200).json(workout)

  
}

//  post a workout
const postworkout=async(req,res)=>{
    const {title, load, reps} = req.body

    // add to the database
    try {
      const workout = await Workout.create({ title, load, reps })
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
const updatpost=async(req,res)=>{
    const{id}=req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({msg:'no such workout found'})
        
    }
    const workout = await Workout.findByIdAndUpdate({_id:id},{...req.body})
    if (!workout) {
        res.status(404).json({msg:'no such workout found'})
    }
    res.status(200).json(workout)

}
 const deleteworkout=async(req,res)=>{
    const{id}=req.params
    

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
 }

  
 






module.exports={getAll,postworkout,singleworkout,updatpost,deleteworkout}