import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div className='flex flex-col gap-3 px-3'>
        <h1>List of all products</h1>
        <Link href="/products/1" className='text-blue-400 underline'>Product 1</Link>
        <Link href="/products/2" className='text-blue-400 underline'>Product 2</Link>
        <Link href="/products/3" className='text-blue-400 underline'>Product 3</Link>
        <Link href="/products/4" className='text-blue-400 underline'>Product 4</Link>
        <Link href="/products/5" className='text-blue-400 underline'>Product 5</Link>
    </div>
  )
}

export default Products