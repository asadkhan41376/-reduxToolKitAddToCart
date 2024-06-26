import { addtoCart } from "@/redux/cartSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Card = () => {

    const [data,setData]=useState([])

    async function getData (){
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setData(data)
   }


   const dispatch = useDispatch()
   

   const handelAdd =(item)=>{
     dispatch(addtoCart(item))

   }
  
  useEffect( () => {
  
    getData();
}, []);


// console.log(data);

  return( 
    <>
 
  <div className=" container flex align-middle justify-center gap-[40px]  w-full flex-wrap p-[20px]">
{
    data.map((e)=>{
        return(

          <>
          <div className="card w-[250px]   overflow-hidden rounded shadow-md   shadow-black">
            <div className="img relative  h-[200px] w-full">

<Image  
src={e.image}
className=" object-contant"
fill
/>
            </div>
           <div className=" py-2 text-center" ><h1 className="p-2 bg-yellow-300">{e.category}</h1>
            <div className="flex align-middle justify-center gap-6 bg-white">
                <h2>{e.price}</h2>
                <h2>{e.rating.rate}</h2>
            </div>
       <button className="py-[5px] px-[30px] mt-2 bg-red-500 rounded" onClick={()=>handelAdd(e)}> add</button>
            </div>

          </div>
          
          </>
        )
    })
}
    
  </div>
    </>)
};

export default Card;
