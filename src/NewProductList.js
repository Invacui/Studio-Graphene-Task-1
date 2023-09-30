import React, { useEffect, useState } from 'react';

const NewProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Product List</h2>
      <div className="row row-cols-1 row-cols-md-3 shadow-lg mt-2 p-2">
        {products.map((product) => (
          <div key={product.id} className="col mb-4 shadow-sm">
            <div className="card h-100 d-flex flex-column">
              <img
                className="card-img-top img-fluid"
                src={product.image}
                alt={product.title}
                style={{ height: '200px' }}
              />
              <div className="card-body flex-grow-1">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Price: ${product.price}</strong>
                </p>
                <button className="btn btn-primary mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProductList;
