import { useEffect, useState } from "react";

const useItemUpdate = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://cryptic-coast-49929.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId]);
    return [item]
}

export default useItemUpdate;