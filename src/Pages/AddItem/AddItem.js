import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result=> {
            console.log(result);
        })
    };

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} required/>
                <textarea className='mb-2' placeholder='Description' {...register("description")} required/>
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} required/>
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} required/>
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} required/>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} required/>
                <br />
                <input className='mb-2' placeholder='Author email' value={user?.email} type="email" {...register("email")} required/>
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;