const Workout = require("../models/workoutModel");
const workoutController = {
  getWorkout(req, res){
    Workout.find().sort({}).then(data=>{
      res.json(data)
    }).catch(err=>{
      console.log(err)
      res.json(err)
    })
  }
}
module.exports = workoutController;