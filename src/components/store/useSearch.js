import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
export const useSearch=(search)=>{
    const [searchItem,setSearch]=useState([])
    const[url,setUrl]=useState('')
    // useEffect(()=>{
    //     Fetch()
    // })
    // const Fetch=async()=>{
    //    axios.get("https://yts.torrentbay.to/api/v2/list_movies.json").then(function(response){
    //     console.log(response)
    //    })
    // }
    React.useEffect(()=>{
       
       Fetch()
    },[search])

// const newUrl=()=>{
//     var newurl="https://yts.mx/api/v2/list_movies.json/query_term="
//     setUrl(newurl+search)
// }
    const Fetch=()=>{
         axios
    .get("https://fakestoreapi.com/products/")
    .then(function (response) {
        // console.log(response.data.data.movies);
        setSearch(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
    }
    return{searchItem}
}