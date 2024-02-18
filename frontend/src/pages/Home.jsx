import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import CardView from "../components/Home/CardView";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8888/cards")
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
    <div className='overflow-hidden flex max-h-screen'>
      <h1 className="text-3xl my-8 p-7 flex-1 h-screen font-semibold text-black dark:text-white">
        Collection
      </h1>
      {loading ? <Spinner /> : <CardView cards={cards} />}
    </div>
  );
};

export default Home;
