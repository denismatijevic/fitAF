const { model, Schema } = require("mongoose");

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  //  make an exercises array [{add exercises here}]
  exercises: [
    {
      name: {
        type: String,
        require: true
      },
      type: {
        type: String,
        require: true
      },
      weight: {
        type: String,
        require: true
      },
      set: {
        type: String,
        require: true
      },
      reps: {
        type: String,
        require: true
      },
      duration: {
        type: Number
      }
    }
  ]
})
const Workout = model("Workout", workoutSchema)

module.exports = Workout;