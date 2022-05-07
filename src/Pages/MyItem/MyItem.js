import React, { useEffect, useState } from 'react';
import './MyItem.css';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/myItem`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setMyItems(data));

    }, []);
    // const [myItems, setMyItems] = useState([])

    return (
        <div>
            <h1>This is my item area: {myItems.length}</h1>
        </div>
    );
};

export default MyItem;