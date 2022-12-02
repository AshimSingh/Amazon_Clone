export const addtocart=(item)=>{
    return{
        type:"ADD_TO_CART",
        payload:item,
    }
}
export const deletetocart=(data)=>{
    return{
        type:"Delete_TO_CART",
        payload:data,
    }
}