import React, { useContext } from 'react';
import UsersContainer from '../../components/UsersContainer';
import s from './index.module.css';
import { Context } from '../../context';

export default function UsersPage() {

  const { deleteAllUsers } = useContext(Context);

  return (
    <div>
      <div className={s.delete_users}
           onClick={deleteAllUsers}>Delete All Users</div>
      <UsersContainer />
    </div>
  )
}
