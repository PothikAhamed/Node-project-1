const productModel = require("./model/product.model");

let add_task_controller = async (req, res)=>{
    let add_product = await productModel.insertMany(req.body)

    
    res.status(201).json({
        success:true,
        message:"product created",
        data:add_product})
}

let getAllProductsController = async(req, res)=>{
    let findProducts = await productModel.find({})
    res.status(200).json({success: true, message:"data fetch successfully", data:findProducts})
}



module.exports= {add_task_controller, getAllProductsController};