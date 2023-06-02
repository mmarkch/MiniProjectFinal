import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignInSide from './pages/SignInSide'
import SignUp from './pages/SignUp'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import SearchResult from './pages/SearchResult'
import AccommodationList from './pages/AccommodationList'
import ReviewPage from './pages/ReviewPage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Profile from './pages/Profile'
import FavoritesPage from './pages/Favorites'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSide />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/SearchResult" element={<SearchResult />}/>
          <Route path="/AccommodationList" element={<AccommodationList />}/>
          <Route path="/ReviewPage" element={<ReviewPage />}/>
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/FavoritesPage" element={<FavoritesPage/>}/>           
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
