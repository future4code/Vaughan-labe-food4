import axios from "axios"
import { BASE_URL } from "../constants/url";
import { goToAdress, goToFeed, goToProfile, goToLogin } from "../routes/coordinator";

export const login = (body, clear, navigate) => {
  
  axios.post(`${BASE_URL}/login`, body)
  .then((response)=>{
    localStorage.setItem("token", response.data.token)
     clear()
     goToFeed(navigate)
    })
    .catch((error)=>{
      alert(error.response.data.message)
    })
}

export const signUp = (body, clear, navigate) =>{
  axios.post(`${BASE_URL}/signup`, body, navigate)
  .then((responde)=>{
  localStorage.setItem("token", responde.data.token)
  clear()
  alert("Usuario cadastrado com sucesso")
   goToAdress(navigate)
  })
  .catch((error)=>{
    alert("Email ou CPF já cadastrados")
  })
      
}

export const adress = (body, clear, navigate) =>{
  const axiosConfig = {
    headers:{
      auth: window.localStorage.getItem("token")
    }
  }
  axios.put(`${BASE_URL}/address`, body, axiosConfig)
  .then((response)=>{
    console.log(response.data)
    clear()
    goToLogin(navigate)
    localStorage.removeItem("token")
  })
  .catch((error)=>{
    console.log(error.response)
  })
}

export const UpDateAdress = (body, clear, navigate) =>{
  const axiosConfig = {
    headers:{
      auth: window.localStorage.getItem("token")
    }
  }
  axios.put(`${BASE_URL}/address`, body, axiosConfig)
  .then((response)=>{
    console.log(response.data)
    clear()
    goToProfile(navigate)
    
  })
  .catch((error)=>{
    console.log(error.response)
  })
}

export const confirmPurchase = ( resId, body, navigate ) => {
  const token = window.localStorage.getItem(`token`)
  const axiosConfig = {headers: { auth: token }}

  axios.post(`${BASE_URL}/restaurants/${resId}/order`, body, axiosConfig)
  .then((res)=>{
    goToFeed(navigate)
  })
  .catch((error)=>{
    alert(error.response.data.message)
  })
}
