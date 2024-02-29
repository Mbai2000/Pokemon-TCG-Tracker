import SingleCard from './SingleCard';


const CardView = ({cards}) => {
  return (
        <div className='grid mt-8 gap-y-4 gap-x-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mr-40 h-[44rem] w-[84rem] overflow-auto'>
          {cards.map((item) => (
            <SingleCard key={item._id} cards={item} />
          ))}
        </div>
  );
};

export default CardView