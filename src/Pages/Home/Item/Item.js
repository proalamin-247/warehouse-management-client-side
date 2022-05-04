import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css'

const Item = ({item}) => {
    const { _id, name, img, description, price, quantity, supplierName
} = item;
    const navigate = useNavigate();

    const navigateToItemUpdate = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price} Tk</p>
            <p><small>{description}</small></p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplierName}</p>
            <button onClick={() => navigateToItemUpdate(_id)} className='btn btn-primary'>Update Button</button>
        </div>
    );

};

export default Item;