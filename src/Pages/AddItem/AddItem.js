import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import './AddItem.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const { register, handleSubmit, reset} = useForm();
    const [user] = useAuthState(auth);
    

    const onSubmit = data => {
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
            
        })

        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Your reguest is pending',
                
            }
        )

        const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            functionThatReturnPromise,
            { 
                success: 'Add Item Successful 👌',
                error: 'Promise rejected 🤯'
            }
        )
        reset();
       
    };

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please add your items!</h2>
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
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default AddItem;