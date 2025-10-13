import React from 'react';

const Product = ({product}) => {
    const {title, price, description, category, image, rating} = product;

    function handleAddCart() {
      console.log("Clicked")
    };

    const handleChange = (e) => {
      console.log(`${e.target.value}`)
    }
    
    return (
        <article className="product">
          <input type="text" onChange={handleChange} />
      <img src={image} alt={title} />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: $ {price}</p>
        <p>Rating: {rating.rate}</p>
        <p>Count: {rating.count}</p>
        <p>Category: {category}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn" onClick={handleAddCart}>Add to cart</button>
      </div>
    </article>
    );
};

export default Product;