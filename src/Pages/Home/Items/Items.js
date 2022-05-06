import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAllItems from '../../../hooks/useAllItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items] = useAllItems();

    return (
        <div id="items" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Top Item</h1>
                <div className="items-container">
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
               
            </div>
            <div className='text-center m-3'>
                <Link className='btn btn-primary' to='/allitem'>Show All Item</Link>
            </div>
        </div>
    );
};

export default Items;