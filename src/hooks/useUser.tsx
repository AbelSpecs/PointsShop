import React, { FC, useEffect, useState } from 'react';
import { user } from '../services/api.user';
import { User } from '~/types/user';
const useUser = () => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    user()
    .then(data => {
      setUserData(data);
    })
    .catch(error => {
      console.log(error);
    });

  },[]);

  return { userData, setUserData };

}

export default useUser;
