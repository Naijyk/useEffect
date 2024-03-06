import React, { useContext } from 'react'
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.css';
import { Context } from '../../context';

export default function ProductsPage() {

  const { deleteAllProducts } = useContext(Context);

  return (
    <div>
      <div className={s.delete_products}
           onClick={ deleteAllProducts }>Delete All Products</div>
      <ProductsContainer />
    </div>
  )
}
