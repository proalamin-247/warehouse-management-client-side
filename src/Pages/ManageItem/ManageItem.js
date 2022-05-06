import React from 'react';
import useAllItems from '../../hooks/useAllItems';
import './ManageItem.css';

const ManageItem = () => {
    const [items] = useAllItems();
    

    return (
        <div className='container'>
            <h1>This is ManageItem area</h1>
            <div className="items-container p-2">
                {
                    items.map(item => 
                    <div className='item' key={item._id} item={item}>
                            <img className='w-100' src={item.img} alt="" />
                            <h4>{item.name}</h4>
                            <h4>Quantity: {item.quantity}</h4>
                            <p>Price: {item.price} Tk</p>
                            <p>Supplier: {item.supplierName}</p>
                            <button className='btn btn-danger'>Delete Item</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageItem;