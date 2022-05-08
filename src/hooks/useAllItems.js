import { useEffect, useState } from "react";

const useAllItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-coast-49929.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems]
}

export default useAllItems;