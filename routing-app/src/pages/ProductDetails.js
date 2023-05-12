import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {

    const params = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <h3>{params.productId}</h3>
      <Link to='..' relative='path'>Back</Link>
    </div>
  )
}
