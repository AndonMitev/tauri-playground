import React from 'react';
import { Web3Modal } from '@web3modal/react';

const modalConfig = {};

const Web3ModalAuth = () => {
  return (
    <>
      <div>Web3Modal</div>
      <Web3Modal themeMode='dark' />
    </>
  );
};

export default Web3ModalAuth;
