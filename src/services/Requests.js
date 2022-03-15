import axios from "axios"
import { BASE_URL } from "../constants/url";
import { goToAdress, goToFeed } from "../routes/coordinator";

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
    goToFeed(navigate)
  })
  .catch((error)=>{
    console.log(error.response)
  })
}