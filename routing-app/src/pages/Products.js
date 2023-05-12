import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductsPage() {

  const PRODUCTS = [
    {id: 1, title:'Product 1'},
    {id: 2, title:'Product 2'},
    {id: 3, title:'Product 3'},
    {id: 4, title:'Product 4'}
  ];

  return (
    <div>
      <h1>Products Page</h1>
      <ul>
      {PRODUCTS.map(prod => (
        <li key={prod.id}>
          <Link to={`/products/${prod.id}`}>{prod.title}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}
