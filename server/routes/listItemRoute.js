const express = require("express");

const {
    createListItem,
    getAllItems,
    getItemsByCategory,
    deleteListItem,
    updateListItem,
} = require("../controllers/listItemControllers");

const router = express.Router();

// Endpoints
router.post("/createListItem", createListItem);
router.get("/getAllItems", getAllItems);
router.get("/getItemsByCategory/:category", getItemsByCategory);
router.delete("/deleteItem/:id", deleteListItem);
router.put("/updateItem/:id", updateListItem);

module.exports = router;
