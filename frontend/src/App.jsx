import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import DeleteCard from './pages/DeleteCard';
import EditCard from './pages/EditCard';
import ShowCard from './pages/ShowCard';

const App = () => {
  return (
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/cards/add' element ={<AddCard />} />
      <Route path='/cards/edit/:id' element ={<EditCard />} />
      <Route path='/cards/delete/:id' element ={<DeleteCard />} />
      <Route path='/cards/details/:id' element ={<ShowCard />} />
    </Routes>
  )
}

export default App