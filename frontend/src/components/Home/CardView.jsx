import SingleCard from './SingleCard';


const CardView = ({cards}) => {
  return (
        <div className='grid gap-y-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          {cards.map((item) => (
            <SingleCard key={item._id} cards={item} />
          ))}
        </div>
  );
};

export default CardView