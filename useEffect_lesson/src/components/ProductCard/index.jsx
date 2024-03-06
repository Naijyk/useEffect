import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';

export default function ProductCard({ id, title, description, price, rating, stock, brand, category }) {

  const { deleteProduct } = useContext(Context);

  return (
    <div className={s.product}
         onClick={() => deleteProduct(id)}>
      <p>Title: { title }</p>
      <p>Description: { description }</p>
      <p>Price: { price }</p>
      <p>Rating: { rating }</p>
      <p>Stock: { stock }</p>
      <p>Brand: { brand }</p>
      <p>Category: { category }</p>
    </div>
  )
}
