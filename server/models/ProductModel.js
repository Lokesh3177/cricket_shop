import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category:{ type: String, required: true },
    subCategory:{ type: String, required: true },
    sizes:{ type: Array, required: true },
    bestseller:{type:Boolean},
    date:{type:Number, required:true},
})

// ...existing code...
const productModel = mongoose.models.Product || mongoose.model("Product", ProductSchema)
// ...existing code...
export default productModel;