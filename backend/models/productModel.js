import { stringifyStyle } from '@vue/shared';
import mongoose from 'mongoose';

const productScheme = new mongoose.Schema (
    {
        name: {type: String, required: true, unique:true},
        slug: {type: String, required: true, unique:true},
        image: {type: String, required: true},
        brand: {type: String, required: true},
        cateogry: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        countInStock: {type: Number, required: true},
        rating: {type: Number, required: true},
        numReviews: {type: Number, required: true},

    },
    {
        timestamps: true
    }
);
const Product = mongoose.model('Product',productScheme);
export default Product;