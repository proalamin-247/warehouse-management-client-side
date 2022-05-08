import React from 'react';
import { Link } from 'react-router-dom';
import useAllItems from '../../hooks/useAllItems';
import './ManageItem.css';

const ManageItem = () => {
    const [items, setItems] = useAllItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you over sure!!');
        if (proceed) {
            const url = `https://cryptic-coast-49929.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainig = items.filter(item => item._id !== id);
                    setItems(remainig);
                })
        }
    }
    return (
        <div className='container mt-5'>
            <h1 className='text-center'>This is ManageItem area</h1>
            <div className='d-flex justify-content-end'>
                <Link className='btn btn-primary' to='/additem'>Add Item</Link>
            </div>
            <div className="items-container p-2">
                {
                    items.map(item =>
                        <div className='item' key={item._id} item={item}>
                            <img className='w-100' src={item.img} alt="" />
                            <h4>{item.name}</h4>
                            <h4>Quantity: {item.quantity}</h4>
                            <p>Price: {item.price} Tk</p>
                            <p>Supplier: {item.supplierName}</p>
                            <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete Item</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageItem;