import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';

export default function UserCard({ id, name, username, email }) {

  const { deleteUser } = useContext(Context);

  return (
    <div className={s.user_card}
         onClick={() => deleteUser(id)}>
      <p>Name: { name }</p>
      <p>Username: { username }</p>
      <a href={`mailto${email}`}>{ email }</a>
    </div>
  )
}
