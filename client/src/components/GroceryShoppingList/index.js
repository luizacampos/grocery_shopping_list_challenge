import { useState, useEffect } from "react";
import axios from "axios";

import PostItem from "../PostItem";
import Item from "../Item";

export default function GroceryShoppingList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        try {
            let res = await axios.get(
                `${process.env.REACT_APP_GROCERY_URL}/list/getAllItems`
            );

            if (res.status === 200) {
                //console.log(res.data);
                setItems(res.data);
            }
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    const deleteItems = async (id) => {
        try {
            let res = await axios.delete(
                `${process.env.REACT_APP_GROCERY_URL}/list/deleteItem/${id}`
            );

            if (res.status === 200) {
                getItems();
            }
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    const updateItems = async (id, itemName, quantity, priority, category) => {
        try {
            const res = await axios.put(
                `${process.env.REACT_APP_GROCERY_URL}/list/updateItem/${id}`,
                {
                    item_name: itemName,
                    quantity: quantity,
                    priority: priority,
                    category: category,
                }
            );

            if (res.status === 200) {
                getItems();
            }
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };

    return (
        <>
            <header className="header">
                <h1>Grocery List</h1>
            </header>
            <PostItem onAdd={getItems} />
            <section>
                {items.map((item) => (
                    <Item
                        key={item._id}
                        item={item}
                        onDelete={deleteItems}
                        onUpdate={updateItems}
                    />
                ))}
            </section>
        </>
    );
}
