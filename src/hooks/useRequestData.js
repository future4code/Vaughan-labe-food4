import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [carregando, setCarregando] = useState(false)
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        setCarregando(true)
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setCarregando(false)
                setData(response.data)
            })
            .catch((error) => {
            })
    }, [url])

    return [data, setData, carregando]
}
export default useRequestData

