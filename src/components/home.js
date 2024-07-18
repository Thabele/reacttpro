import React from 'react';
import Product from './product';

const Home =() => {
    const product = [
        {
            name : 'Computer',
            image: 'https://via.placeholder.com/150',
            description: 'This is a sample product description for computer',
            price: 29.99,
            quantity: 10,
        },
        {

            name : 'LGTV',
            image: 'https://via.placeholder.com/150',
            description: 'This is a sample product description LGTV',
            price: 49.99,
            quantity: 20,
        },
        {
            name : 'Printer',
            image: 'https://via.placeholder.com/150',
            description: 'This is a sample product description Printer',
            price: 19.99,
            quantity: 30,
        }

    ]
    return(
        <div>
            <h1>Home Component</h1>
            {product.map((product,index) =>(
              <Product
              key={index}
              name={product.image}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              />  
            ))}
            
        </div>
       );
};
   export default Home;
   