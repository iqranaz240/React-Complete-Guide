import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {

    const navigate = useNavigate();

    const navigateHandler = () => {
      navigate('/products')
    }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Go to <Link to="/products">Product List</Link></p>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  )
}
