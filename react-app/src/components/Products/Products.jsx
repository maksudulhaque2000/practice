import React from 'react';
import Product from './Product';
import products from './../../assets/products.json'

const Products = () => {

    const handleChange = (e) => {
      console.log(`${e.target.value}`)
    }
    
    return (
        <div>
            <div className='w-3/4 mx-auto bg-amber-200 p-2 m-4 rounded'><input className='w-full' placeholder='Search....' type="text" onChange={handleChange} /></div>
            {products.map((product) => (<Product key={product.id} product={product} />))}
        </div>
    );
};

export default Products;