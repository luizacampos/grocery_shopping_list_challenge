const { Schema, model } = require("mongoose");

const ListItemSchema = new Schema({
    item_name: { required: true, type: String },
    quantity: {
        type: Number,
        default: 1,
        min: 0,
    },
    priority: {
        type: Number,
        default: 5,
        enum: [1, 2, 3, 4, 5],
    },
    category: {
        type: String,
        enum: [
            "Dairy",
            "Bakery",
            "Fruit/Vegetables",
            "Personal Care",
            "Cleaners",
            "Beverages",
            "Others",
        ],
    },
    bought: { type: Boolean, default: false },
});

const ListItem = model("list-item", ListItemSchema);

module.exports = ListItem;
