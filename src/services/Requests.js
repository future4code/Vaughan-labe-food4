import axios from "axios"
import { BASE_URL } from "../constants/url"
import { alerts } from '../constants/alerts'
import { goToAdress, goToFeed, goToProfile, goToLogin } from "../routes/coordinator"

export const login = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      setIsLoading(false)
      goToFeed(navigate)
    })
    .catch((error) => {
      alerts("error", error.response.data.message)
    })
}

export const signUp = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/signup`, body, navigate)
    .then((responde) => {
      localStorage.setItem("token", responde.data.token)
      clear()
      setIsLoading(false)
      goToAdress(navigate)
    })
    .catch((error) => {
      alerts("error", error.response.data.message)
    })

}

export const adress = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  const axiosConfig = {
    headers: {
      auth: window.localStorage.getItem("token")
    }
  }
  axios.put(`${BASE_URL}/address`, body, axiosConfig)
    .then((response) => {
      clear()
      alerts("success", "Usuário cadastrado com sucesso!")
      setIsLoading(false)
      goToLogin(navigate)
      localStorage.removeItem("token")
    })
    .catch((error) => {
      alerts("error", "É necessário cadastrar um endereço!")
    })
}

export const editProfile = (body, clear, navigate) => {
  const axiosConfig = {
    headers: {
      auth: window.localStorage.getItem("token")
    }
  }
  axios.put(`${BASE_URL}/profile`, body, axiosConfig
  ).then((response) => {
    alerts("success", "Dados atualizados com sucesso!")
    clear()
    goToProfile(navigate)
  })
    .catch((error) => {
      alerts("error", error.response.data.message)
    })

}

export const UpDateAdress = (body, clear, navigate) => {
  const axiosConfig = {
    headers: {
      auth: window.localStorage.getItem("token")
    }
  }
  axios.put(`${BASE_URL}/address`, body, axiosConfig)
    .then((response) => {
      alerts("success", "Endereço atualizado com sucesso!")
      clear()
      goToProfile(navigate)

    })
    .catch((error) => {
      alerts("error", error.response.data.message)
    })
}

export const confirmPurchase = (resId, body, navigate) => {
  const token = window.localStorage.getItem(`token`)
  const axiosConfig = { headers: { auth: token } }

  axios.post(`${BASE_URL}/restaurants/${resId}/order`, body, axiosConfig)
    .then((res) => {
      alerts("success", "O pedido foi enviado!")
      goToFeed(navigate)
    })
    .catch((error) => {
      alerts("error", error.response.data.message)
    })
}
