import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemUpdate from '../../hooks/useItemUpdate';
import './UpdateItem.css'

const UpdateItem = () => {
    const { itemId } = useParams();
    // const [item, setItem] = useItemUpdate(itemId);
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId, item]);


    const handaleQuantity = () => {
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                quantity: item.quantity - 1
            }),
        })
    }
    const restock = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const updateItem = { quantity };

        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                alert('quantity edit successfull');
                console.log(data);
                event.target.reset();
            })

    }


    return (
        <div className="card singale-item container mt-5">
            <img className='img-fluid' src={item.img} alt="" />
            <div className="card-body text-center">
                <h4>{item.name}</h4>
                <p>Price: {item.price} Tk</p>
                <p><small>{item.description}</small></p>
                <p className='fs-2'>Quantity: {item.quantity}{" "}
                    <br />
                    <span>
                        <button onClick={handaleQuantity} type="button" className="btn btn-success">{" "}Delivery</button>
                    </span>
                </p>
                <p>Supplier: {item.supplierName}</p>
                <div className='d-flex justify-content-between'>
                    <div className="input-group mb-3 w-50">
                        {/* <button className="btn btn-outline-secondary" type="button" id="button-addon1">Re-Stock</button> */}
                        <form onSubmit={restock}>
                            <input type="number" name='quantity' placeholder="write qunatity" required />
                            <input type="submit" value="Re-Stock" />
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;