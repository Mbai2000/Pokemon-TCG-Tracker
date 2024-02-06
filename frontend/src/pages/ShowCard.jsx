import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Back';
import Spinner from '../components/Spinner';

const ShowCard = () => {
    const [card, setCard] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:8888/cards/${id}`)
        .then((response) => {
            setCard(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [])

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className ='text-3xl my-4'>Show Card</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>ID</span>
                        <span>{card._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Name</span>
                        <span>{card.name}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Number</span>
                        <span>{card.number}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Version</span>
                        <span>{card.version}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Set</span>
                        <span>{card.set}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Edition</span>
                        <span>{card.edition}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowCard