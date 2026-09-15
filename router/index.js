const express = require('express');
const {add_task_controller, getAllProductsController, update_product_controller} = require('../controllers/task.controller');
const router = express.Router()

router.post("/add-task", add_task_controller)
router.get("/producs", getAllProductsController)
router.put("/productTwo", update_product_controller)



module.exports = router;