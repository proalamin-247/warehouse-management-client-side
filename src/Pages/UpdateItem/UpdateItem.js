import React from 'react';
import { useParams } from 'react-router-dom';
import useItemUpdate from '../../hooks/useItemUpdate';

const UpdateItem = () => {
    const { itemId } = useParams();
    const [item] = useItemUpdate(itemId);

    return (
        <>
            <div className='container item text-center w-25 mt-5'>
                <img className='w-100' src={item.img} alt="" />
                <h4>{item.name}</h4>
                <p>Price: {item.price} Tk</p>
                <p><small>{item.description}</small></p>
                <p className='bg-info fs-3'>Quantity: {item.quantity}</p>
                <p>Supplier: {item.supplierName}</p>
                {/* <div>
                    <input type="text" />
                    <button type="button" class="btn btn-primary">Re-Stock</button>
                </div> */}
                <div className='d-flex justify-content-between'>
                    <div class="input-group mb-3 w-50">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Re-Stock</button>
                        <input type="text" class="form-control" placeholder="write restock qunatity" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                    <div>
                        <button type="button" class="btn btn-success">Delivery</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateItem;