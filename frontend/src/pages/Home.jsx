import React from "react";

const Home = () => {
  const info = `
  Track your Pokémon TCG Collection!

  Search for cards with data from the Pokémon TCG API, as well as 
  view market prices from TCGplayer. Add cards quickly and easily 
  with a single click.
  
  If you wish to manually add your own cards and details, use the
  Manual Add feature.
  
  Cards can also be edited once added to your collection if desired.
  
  
  `;
  return (
    <div className="overflow-hidden flex w-full max-h-screen justify-center bg-neutral-200 dark:bg-slate-800">
      <img className="h-40 mt-20" src="../src/assets/TCGlogo.png"></img>
      <div className="absolute top-[17rem] h-[30rem] w-[50rem] bg-white rounded border-1 dark:bg-slate-700">
        <h1 className="p-4 text-4xl text-center dark:text-white">
          Pokémon TCG Tracker
        </h1>
        <pre className="dark:text-white text-xl p-3">{info}</pre>
      </div>
    </div>
  );
};

export default Home;
