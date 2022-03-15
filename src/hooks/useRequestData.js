import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        axios.get(url, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
            .then((response) => {
                setLoading(false)
                setData(response.data)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }, [url])

    return [data, setData, loading]
}
export default useRequestData

