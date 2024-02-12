import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import DeleteCard from './pages/DeleteCard';
import EditCard from './pages/EditCard';
import ShowCard from './pages/ShowCard';
import SearchCard from './pages/SearchCard';
import SidebarNav from './components/SidebarNav';

const App = () => {
  return (
    <div className='flex dark dark: bg-neutral-900'>
      <SidebarNav/>
      <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/cards/add' element ={<AddCard />} />
      <Route path='/cards/edit/:id' element ={<EditCard />} />
      <Route path='/cards/delete/:id' element ={<DeleteCard />} />
      <Route path='/cards/details/:id' element ={<ShowCard />} />
      <Route path='/cards/search' element={<SearchCard/>} />
    </Routes>
    </div>
    
  )
}

export default App