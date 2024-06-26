import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'postcss'
import { RemoveToCart } from '@/redux/cartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCard = () => {

  const cartIem=  useSelector((state)=> state.items)
//   console.log(cartIem);

const dispatch =useDispatch()
const handelRemove=(item)=>{
  dispatch(RemoveToCart(item))
}

  return (
    <div className='bg-red-600 text-center flex justify-center align-middle flex-col'>

        <h1 className='text-[60px] p-5'>ShoppingCard</h1>
      <div>
      <Link href="/" >back to home</Link>
        </div>  

        {





          cartIem.map((item,index)=>(
<div className=' flex align-middle justify-around   bg-yellow-500 my-4'>
  <h1 key={index}>{index+1}</h1>
          <div className=" w-[50px] relative h-[50px] img  rounded-full  overflow-hidden">
            <Image
           fill
            src={item.image}
           className='object-cover object-top'
            
            
            
            />
          </div>
          <h1>{item.category}</h1>
          <h1>{Math.floor(item.price)}</h1>

          <button onClick={()=>handelRemove(item)}> remove</button>
      
    </div>

          ))
        }
        
        
    </div>
  )
}

export default ShoppingCard
