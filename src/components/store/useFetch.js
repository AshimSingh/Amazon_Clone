import { responsiveFontSizes } from "@mui/material"
import {useState,useEffect} from "react"
import axios from "axios"
export const useFetch=(url)=>{
    const [response,setResponse]=useState([])
    const [electronics,setElectronics]=useState([])
    const [error,setError]=useState([])
    const[mensClothing,setClothing]=useState([])
    const[womensClothing,setWomenCloth]=useState([])
    useEffect(()=>{
        fetchApi()
    },[url])
    const fetchApi=async ()=>{
    //     const resp=await fetch('https://fakestoreapi.com/products')
    // const respo= await resp.json()
    // setResponse(respo)
    
   try{
        const resp =await axios.get(url)
        if(url==="https://fakestoreapi.com/products/category/jewelery"){
            setResponse(resp.data)
        }
        else if(url==="https://fakestoreapi.com/products/category/electronics"){
            setElectronics(resp.data)
        }
        else if(url==="https://fakestoreapi.com/products/category/men's clothing"){
            setClothing(resp.data)
        }
        else if(url==="https://fakestoreapi.com/products/category/women's clothing"){
            setWomenCloth(resp.data)
        }
}
   catch (error){
    setError(error.message)
   }
    
    }
    if(url==="https://fakestoreapi.com/products/category/jewelery"){
        return{
        response,error
    }
    }
    else if(url==="https://fakestoreapi.com/products/category/electronics"){
        return{
            electronics,error
        }
    }
    else if(url==="https://fakestoreapi.com/products/category/men's clothing"){
        return {mensClothing,error}
    }
    else if(url==="https://fakestoreapi.com/products/category/women's clothing"){
        return {womensClothing,error}
    }
}
