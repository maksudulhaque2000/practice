import React from 'react';
import Product from './Product';
import products from './../../assets/products.json'

const Products = () => {
    
    return (
        <div>
            {products.map((product) => (<Product key={product.id} product={product} />))}
        </div>
    );
};

export default Products;