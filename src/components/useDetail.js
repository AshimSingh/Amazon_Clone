import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
export const useDetail=()=>{
    const [loading,setLoading]=useState(false)
    const [details,setDetails]=useState([])
    const [error,setError]=useState("")
    const {id}=useParams()
    useEffect(()=>{
        fetchApi()
    },[])
    const fetchApi=async()=>{
        try{
            const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
            setDetails(response.data)
        }
        catch(error){
            setError(error)
        }
    }
    return{
        details,loading,error
    }
}