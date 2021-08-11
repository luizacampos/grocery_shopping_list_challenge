//import { Context } from "../../App";
import { useState } from "react";
import axios from "axios";

export default function PostItem({ onAdd }) {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("Dairy");
    const [quantity, setQuantity] = useState(1);
    const [priority, setPriority] = useState(5);

    const itemToPost = {
        item_name: itemName,
        quantity: quantity,
        priority: priority,
        category: category,
    };

    const handlePostItem = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/list/createListItem", itemToPost);

            if (res.status === 200) {
                console.log("Message created");
                onAdd();
                setItemName("");
                setCategory("");
                setQuantity(1);
                setPriority(5);
            }
        } catch (error) {
            console.log("Something went wrong", error.response);
        }
    };

    return (
        <form className="add-form" onSubmit={handlePostItem}>
            <div className="form-control">
                <label>Grocery Item</label>
                <input
                    type="text"
                    placeholder="Add item"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </div>
            <div className="form-control" id="form-select">
                <div>
                    <label>Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Personal care">Personal care</option>
                        <option value="Cleaners">Cleaners</option>
                        <option value="Fruit/Vegetables">
                            Fruit/Vegetables
                        </option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div>
                    <label>Quantity</label>
                    <select
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4 </option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                </div>
                <div>
                    <label>Priority</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4 </option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
            <input
                type="submit"
                value="Save Grocery Item"
                className="btn btn-block"
            />
        </form>
    );
}
