'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const LoginBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/api/auth/login');
      }}
    >
      Log in
    </button>
  );
};

export default LoginBtn;
