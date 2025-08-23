"use client"
import { useContext } from 'react'
import Button from './button'
import { useShoppingCartContext } from '@/context/ShoppingCartContext'


function RemoveFromCart({id}:{id:string}) {
const {deleteProduct} = useShoppingCartContext()

  return (
              <Button children="Remove from cart" className="bg-red-600 px-3 py-1.5 box-border rounded-xl text-white mx-10 cursor-pointer" onClick={()=>deleteProduct(parseInt(id))} />
  )
}

export default RemoveFromCart