import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const CardTable = ({ cards }) => {
  return (
    <table className='w-full border-separate'>
        <thead>
            <tr>
                <th className='border border-slate-600 rounded-md'>Image</th>
                <th className='border border-slate-600 rounded-md'>Name</th>
                <th className='border border-slate-600 rounded-md'>Number</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Version</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Set</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Edition</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
        </thead>
        <tbody>
            {cards.map((card) => (
                <tr key={card._id} className = 'h-8 w-1'>
                    <td className ='border border-slate-700 rounded-md text-center'>
                        <img className = "h-auto max-w-lg mx-auto" src = "https://images.pokemontcg.io/xy1/1.png"></img>
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
  )
}

export default CardTable