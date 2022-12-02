import React from 'react'
const initialState ={basket:[],user:null}
const Addtocart__reducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":{
            const add=true
            state.basket.map((m)=>{
                if(m.id===action.payload.id){
                    add=false
                }

            })
            if(add){
                return{
            ...state,
            basket:[...state.basket,{img:action.payload.image,id:action.payload.id,price:action.payload.price,title:action.payload.title}]
        }
            }
            else return{...state}
        }
        case "Delete_TO_CART":{
            const newdata= state.basket.filter((bas)=>bas.id!==action.payload.id)
            // console.log(action.payload.id)
            // console.log("old is",state.basket)
            // console.log("Newdatais",newdata)
            return{
            ...state,
            basket:newdata
        }
        }
        case "ADD_USER":{
            return{
                ...state,
                user:action.data
            }
        }
        default:return{...state}
    }
}

export default Addtocart__reducer
