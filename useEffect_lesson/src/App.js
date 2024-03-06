import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import { getUsers } from './requests/users';
import { Context } from './context';
import { getProducts } from './requests/products';

const App = () => {

  const [ users, setUsers ] = useState([]);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []); // функция вызывается один раз при перезагрузке компонента

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const deleteUser = id => setUsers(users.filter(el => el.id !== id));

  const deleteAllUsers = () => setUsers([]);

  const deleteProduct = id => setProducts(products.filter(el => id !== el.id));

  const deleteAllProducts = () => setProducts([]);

  return (
    <div>
      <Context.Provider value={{ users, products, deleteUser, deleteAllUsers, deleteProduct, deleteAllProducts }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  )
}

export default App