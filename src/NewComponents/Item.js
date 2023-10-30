// Date: 2021/8/14

import React from "react";

const Item = ({ item, index, items, setItems }) => {
    const handleDelete = () => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <div className="item">
            <span>{item}</span>
            <button onClick={handleDelete}>X</button>
        </div>
    );
};

export default Item;
