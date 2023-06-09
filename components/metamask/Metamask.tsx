'use client';
import MetaMaskSDK from '@metamask/sdk';
import { useEffect } from 'react';
const MMSDK = new MetaMaskSDK({
  dappMetadata: {}
});
const ethereum = MMSDK.getProvider();

const Metamask = () => {
  useEffect(() => {
    if (!ethereum) {
      return;
    }

    ethereum.request({ method: 'eth_requestAccounts', params: [] });
  }, []);

  return <div>Metamask</div>;
};

export default Metamask;
