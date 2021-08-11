const ListItem = require("../models/ListItem");

exports.createListItem = async (req, res) => {
    try {
        const listItem = await ListItem.create({
            item_name: req.body.item_name,
            quantity: req.body.quantity,
            priority: req.body.priority,
            category: req.body.category,
            bought: req.body.bought,
        });

        //console.log(listItem);
        res.status(200).json({ listItem });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const listItems = await ListItem.find().sort({ priority: 1, _id: -1 });
        res.status(200).json(listItems);
    } catch (error) {
        res.status(400).json({ message: "Something wrong", error });
    }
};

exports.getItemsByCategory = async (req, res) => {
    try {
        const listItems = await ListItem.find({
            category: req.params.category,
        });

        if (listItems == null) {
            res.status(404).json("Item not found");
            return;
        }

        res.status(200).json({ listItems });
    } catch (error) {
        res.status(400).json({ message: "Something wrong", error });
    }
};

exports.deleteListItem = async (req, res) => {
    try {
        const listItem = await ListItem.findByIdAndDelete({
            _id: req.params.id,
        });

        if (listItem === null) {
            res.status(404).json({
                message: "Item not found",
            });
            return;
        }

        res.status(200).json({
            message: "Item was deleted",
            deletedItem: listItem,
        });
    } catch (error) {
        res.status(400).json({ message: "Something wrong", error });
        console.log(error);
    }
};

exports.updateListItem = async (req, res) => {
    const listItem = await ListItem.findByIdAndUpdate(
        req.params.id,
        {
            item_name: req.body.item_name,
            quantity: req.body.quantity,
            priority: req.body.priority,
            category: req.body.category,
            bought: false,
        },
        { new: true }
    );

    if (!listItem) {
        res.status(404).json("Item not found");
        return;
    }
    res.status(200).json({
        message: " Item was updated",
        updatedItem: listItem,
    });
};
