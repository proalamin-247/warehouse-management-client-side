import React from 'react';
import { useParams } from 'react-router-dom';
import useItemUpdate from '../../hooks/useItemUpdate';

const UpdateItem = () => {
    const {itemId} = useParams();
    const [item] = useItemUpdate(itemId);

    return (
        <div className='container'>
            <h1>This is  UpdateItem area: {item.price}</h1>
        </div>
    );
};

export default UpdateItem;