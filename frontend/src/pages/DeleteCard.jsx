import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/Back';
import Spinner from '../components/Spinner';

const DeleteCard = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`http://localhost:8888/cards/${id}`)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) => {
            setLoading(false);
            alert('An error has occurred');
            console.log(error);
        })
    };
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className = 'text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className = 'text-2xl'>Are You Sure You Would Like to Delete this Card?</h3>

                <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes, Delete This Card</button>
            </div>
        </div>
    )
};

export default DeleteCard