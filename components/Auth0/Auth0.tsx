import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import LoginBtn from './LoginBtn/LoginBtn';

const Auth0 = () => {
  return (
    <UserProvider>
      <LoginBtn />
    </UserProvider>
  );
};

export default Auth0;
