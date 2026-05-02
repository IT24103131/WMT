const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
<<<<<<< HEAD
        required: false,
        default: 'https://via.placeholder.com/300x300?text=No+Image',
    },
    description: {
        type: String
    },
    countInStock: {
        type: Number, default: 0
=======
        required: true,
>>>>>>> fa8606cfae5a9246ecab0a34b5f97cffb6f21ae3
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
