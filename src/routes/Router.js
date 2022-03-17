import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adress from "../pages/Adress/Adress";
import CarPage from "../pages/CarPage/CarPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import EditProfile from "../pages/ProfilePage/EditProfile/EditProfile";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";


export const Router = () => {

  return(
   
    <BrowserRouter>
    
      <Routes>

        <Route path="/" element={<LoginPage/>} />
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="/adress" element={<Adress/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/restaurant/:id" element={<RestaurantPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profile/editProfile" element={<EditProfile/>}/>
        <Route path="/car" element={<CarPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        
      </Routes>
      
    </BrowserRouter>
  
  )
}