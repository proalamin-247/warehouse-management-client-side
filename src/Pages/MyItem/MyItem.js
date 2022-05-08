import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Item from '../Home/Item/Item';
import './MyItem.css';
import axios from 'axios';

const MyItem = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        const getMyItem = async () => {
            const email = user?.email;
            const url = `https://cryptic-coast-49929.herokuapp.com/myItem?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyItems(data);
        }
        getMyItem();

    }, [user]);
    // const [myItems, setMyItems] = useState([])

    return (
        <div className='container mt-5'>
            <h1 className='text-center m-5'>MY own post <span className='text-primary'>{myItems.length}</span> items</h1>
            <div className='items-container'>
                {
                    myItems.map(item => <Item
                        key={item._id}
                        item={item}
                    >
                    </Item>)
                }
            </div>

        </div>
    );
};

export default MyItem;