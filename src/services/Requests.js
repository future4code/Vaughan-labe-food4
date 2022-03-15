import axios from "axios"
import { BASE_URL } from "../constants/url";
import { goToFeed } from "../routes/coordinator";

export const login = (body, clear, navigate) => {
  axios.post(`${BASE_URL}/login`, body, clear, navigate)
  .then((responde)=>{
    localStorage.setItem("token", responde.data.token)
    clear()
     goToFeed(navigate)
    })
    .catch((error)=>{
      console.log(error.responde)
      alert("Usuário não encontrado")
    })
}

export const signUp = (body, clear, navigate) =>{
  axios.post(`${BASE_URL}/signup`, body, navigate)
  .then((responde)=>{
  localStorage.setItem("token", responde.data.token)
  clear()
  alert("Usuario cadastrado com sucesso")
   goToFeed(navigate)
  })
  .catch((error)=>{
    alert("Email ou CPF já cadastrados")
  })
      
}