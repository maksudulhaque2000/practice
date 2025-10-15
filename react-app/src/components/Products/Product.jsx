import React from 'react';

const Product = ({product}) => {
    const {title, price, description, category, image, rating} = product;

    function handleAddCart() {
      console.log("Clicked")
    };
    
    return (
        <article className="product flex items-center gap-10">
      <img src={image} alt={title} className='w-96 h-56' />
      <div className='h-56'>
        <h4 className="text-xl font-bold text-orange-400">{title}</h4>
        <p>Price: $ {price}</p>
        <p>Rating: {rating.rate}</p>
        <p>Count: {rating.count}</p>
        <p>Category: {category}</p>
        <p className="text-sm">Description: {description}</p>
        <button className="bg-orange-600 p-2 rounded hover:bg-amber-400" onClick={handleAddCart}>Add to cart</button>
      </div>
    </article>
    );
};

export default Product;