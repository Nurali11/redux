import { useContext, useEffect } from "react"
import  axios from "axios"
import { Context } from "../context/Context"

export const getProducts = () => {
    const {data, setData} = useContext(Context)

    useEffect(() => {
        axios.get("http://localhost:3000/products").then(res => {
            setData(res.data)
        })
    }, [])

    return data
}