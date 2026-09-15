const productModel = require("./model/product.model");

let add_task_controller = async (req, res) => {
  let add_product = await productModel.insertMany(req.body);

  res.status(201).json({
    success: true,
    message: "product created",
    data: add_product,
  });
};

let getAllProductsController = async (req, res) => {
  let findProducts = await productModel.find({});
  res
    .status(200)
    .json({
      success: true,
      message: "data fetch successfully",
      data: findProducts,
    });
};

let update_product_controller = async (req, res) => {
  let products = await productModel.find({});

  let updateProduct = await productModel.bulkWrite(
    req.body.map((product, index) => ({
      updateOne: {
        filter: { _id: products[index]._id },
        update: {
          $set: {
            title: product.title,
            description: product.description,
            category: product.category,
            brand: product.brand,
            price: product.price,
          },
        },
      },
    })),
  );

  res.status(200).json({
    success: true,
    message: "data update successfully",
    data: updateProduct,
  });
};

module.exports = {
  add_task_controller,
  getAllProductsController,
  update_product_controller,
};
