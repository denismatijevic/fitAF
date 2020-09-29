const Workout = require("../models/workoutModel");

  exports.getWorkout=(req, res)=>{ 
    Workout.find().sort({}).then(data=>{
      console.log(data)
      res.json(data)
    }).catch(err=>{
      console.log(err)
      res.json(err)
    })
  }
  exports.addWorkout=(req, res)=>{
    Workout.create({}).then(data=>{
      res.json(data)
    }).catch(err=>{
      console.log(err)
      res.json(err)
    });
  }
  exports.updateWorkout=(req, res)=>{
    Workout.findByIdAndUpdate(req.params.id,
      {$push:{exercises: req.body}},
      {new: true, runValidators: true})
      .then(data=>res.json(data))
      .catch(err=>{
        res.json(err)
      });
    
  }

// module.exports = workoutController;