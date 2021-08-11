import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item";

export default function GetAllItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        try {
            let res = await axios.get("http://localhost:3001/list/getAllItems");

            if (res.status === 200) {
                //console.log(res.data);
                setItems(res.data);
            }
        } catch (error) {
            console.log("Something went wrong", error);
        }
    };
    return (
        <div>
            {items.map((item) => (
                <Item key={item._id} item={item} />
            ))}
        </div>
    );
}
