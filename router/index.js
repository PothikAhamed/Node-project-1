const express = require('express');
const {add_task_controller, getAllProductsController} = require('../controllers/task.controller');
const router = express.Router()

router.post("/add-task", add_task_controller)
router.get("/producs", getAllProductsController)



module.exports = router;