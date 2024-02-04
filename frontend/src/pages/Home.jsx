import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8888/cards')
        .then((response) => {
            setCards(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        }); 
    }, []);
    return (
        <div className='p-4'>
            <div className ='flex justify-between items-center'>
                    <h1 className='text-3xl my-8'>Cards</h1>
                    <Link to='/cards/add'>
                        <MdOutlineAddBox className='text-sky-800 text-4xl' />
                    </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Name</th>
                            <th className='border border-slate-600 rounded-md'>Number</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Version</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Set</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Edition</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((card, index) => (
                            <tr key={card._id} className = 'h-8'>
                                <td className ='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className ='border border-slate-700 rounded-md text-center'>
                                    {card.name}
                                </td>
                                <td className ='border border-slate-700 rounded-md text-center'>
                                    {card.number}
                                </td>
                                <td className ='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {card.version}
                                </td>
                                <td className ='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {card.set}
                                </td>
                                <td className ='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {card.edition}
                                </td>
                                <td className ='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    <div className='flex justify-center gap-x-5'>
                                        <Link to = {`/cards/details/${card._id}`}>
                                            <BsInfoCircle className = 'text-3xl text-green-800' />
                                        </Link>
                                        <Link to={`/cards/edit/${card._id}`}>
                                            <AiOutlineEdit className ='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/cards/delete/${card._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>


    )
}

export default Home