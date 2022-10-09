const express=require('express')
const { getAll,postworkout, singleworkout, updatpost, deleteworkout} = require('../controllers/workoutController')

const route=express.Router()


route.get('/',getAll)
route.get('/:id',singleworkout)
route.patch('/:id',updatpost)
route.post('/',postworkout)
route.delete('/:id',deleteworkout)


module.exports = route