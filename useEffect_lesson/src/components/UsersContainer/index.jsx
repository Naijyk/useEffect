import React, { useContext } from 'react'
import { Context } from '../../context'
import UserCard from '../UserCard';
import s from './index.module.css';

export default function UsersContainer() {

  const { users } = useContext(Context);

  return (
    <div className={s.users_container}>
      {
        users.map(el => <UserCard key={el.id} {...el} />)
      }
    </div>
  )
}
