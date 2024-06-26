import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    items:[

        
    ],
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            state.items.push(action.payload);
            // console.log(state.items);
        },
        RemoveToCart:(state,action)=>{
               state.items= state.items.filter((item)=>(
                    item.id !== action.payload.id
                ))
        }
        
    }
})


export const CartCount = (state)=>state.items.length;
export default cartSlice.reducer;
export const {addtoCart,RemoveToCart} = cartSlice.actions