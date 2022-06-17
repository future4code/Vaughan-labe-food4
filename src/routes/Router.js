import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import Adress from "../pages/Adress/Adress";
import CarPage from "../pages/CarPage/CarPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import EditAddress from "../pages/ProfilePage/EditProfile/EditAddress";
import EditProfile from "../pages/ProfilePage/EditProfile/EditProfile";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";


export const Router = () => {

  return(
   
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/cadastro" element={<SignUpPage/>}/>
        <Route path="/endereco" element={<Adress/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/restaurante/:id" element={<RestaurantPage/>}/>
        <Route path="/pesquisa" element={<SearchPage/>}/>
        <Route path="/perfil" element={<ProfilePage/>}/>
        <Route path="/perfil/editarPerfil" element={<EditProfile/>}/>
        <Route path="/perfil/editarEndereco" element={<EditAddress/>}/>
        <Route path="/carrinho" element={<CarPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        
      </Routes>
      
    </BrowserRouter>
  
  )
}