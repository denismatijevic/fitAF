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
        type: Number,
        require: true
      },
      set: {
        type: Number,
        require: true
      },
      reps: {
        type: Number,
        require: true
      },
      distance: {
        type: Number,
        required: true
      },
      duration: {
        type: Number
      }
    }
  ]
},
{
  toJSON: {}
}
);
const Workout = model("Workout", workoutSchema)

module.exports = Workout;