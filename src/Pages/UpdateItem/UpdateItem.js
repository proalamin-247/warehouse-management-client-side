import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemUpdate from '../../hooks/useItemUpdate';
import './UpdateItem.css'

const UpdateItem = () => {
    const { itemId } = useParams();
    const [item] = useItemUpdate(itemId);

    const handaleQuantity = () => {
        // const quantity = document.getElementById('quantity');
        // const getQuantity = quantity.innerText;
        // const previousQuantity= parseFloat(getQuantity);
        // const newQuantity = previousQuantity-1;
        // console.log(newQuantity);

        // const url = `http://localhost:5000/item/${itemId}` ;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newQuantity)
        // })
        //     .then(res => res.json())
        //     .then(result => {

        //     })
        // const qq = item.quantity;
        // const ww= qq;
        // console.log(qq);
        // const [item.quantity, setQq] = useState({}); 

    }


    return (
        <div class="card singale-item container mt-5">
            <img className='img-fluid' src={item.img} alt="" />
            <div class="card-body text-center">
                <h4>{item.name}</h4>
                <p>Price: {item.price} Tk</p>
                <p><small>{item.description}</small></p>
                <p className='bg-info fs-3'>Quantity: <span id='quantity'>{item.quantity}</span></p>
                <p>Supplier: {item.supplierName}</p>
                <div className='d-flex justify-content-between'>
                    <div class="input-group mb-3 w-50">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Re-Stock</button>
                        <input type="text" class="form-control" placeholder="write qunatity" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                    <div>
                        <button onClick={handaleQuantity} type="button" class="btn btn-success">Delivery</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;