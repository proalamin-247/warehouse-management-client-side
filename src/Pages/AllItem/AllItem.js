import React from 'react';
import useAllItems from '../../hooks/useAllItems';
import Item from '../Home/Item/Item';

const ManageItem = () => {
    const [items] = useAllItems();
    return (
        <div className='container'>
            <h1>Our all Item</h1>
            <div className="items-container ">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    >
                    </Item>)
                }
            </div>
        </div>
    );
};

export default ManageItem;