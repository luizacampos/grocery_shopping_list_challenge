import { useState } from "react";

export default function Item({ item, onDelete, onUpdate }) {
    const [itemName, setItemName] = useState(item.item_name);
    const [category, setCategory] = useState(item.category);
    const [quantity, setQuantity] = useState(item.quantity);
    const [priority, setPriority] = useState(item.priority);

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(item._id);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdate(item._id, itemName, quantity, priority, category);
        window.location.reload();
    };

    return (
        <section className="task-section">
            <div className="task">
                <h3>
                    {item.item_name} ({item.quantity})
                </h3>
                <button className="btn" onClick={handleDelete}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>

            <details>
                <summary>Update</summary>
                <form className="add-form" onSubmit={handleUpdate}>
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
                                <option value="Personal care">
                                    Personal care
                                </option>
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
                        value="Update Grocery Item"
                        className="btn btn-block"
                    />
                </form>
            </details>
        </section>
    );
}
