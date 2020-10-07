const router = require("express").Router();
const workoutController = require("../controller/workoutController");
// database 
router.get("/workouts", workoutController.getWorkout);

router.post ("/workouts", workoutController.addWorkout);

router.put("/workouts/:id", workoutController.updateWorkout);

module.exports = router;