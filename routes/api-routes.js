const router = require("express").Router();
const workoutController = require("../controller/workoutController");

router.get("/", workoutController.getWorkout);

module.exports = router;