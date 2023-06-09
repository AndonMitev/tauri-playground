'use client';

import Image from 'next/image';
import Link from 'next/link';
import { open } from '@tauri-apps/api/shell';

import { getGames } from '@/services';

import Metamask from '@/components/metamask/Metamask';
import Web3Authentication from '@/components/web3auth/Web3Auth';
import Auth0 from '@/components/Auth0/Auth0';
import WebView from '@/components/webView/WebView';
import WalletConnect from '@/components/walletConnect/WalletConnect';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider
} from '@web3modal/ethereum';
import { Web3Modal, Web3Button } from '@web3modal/react';

const chains = [arbitrum, mainnet, polygon];
const projectId = '3ce2912cb5cc3a4cbb77f57f812aa533';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const HomePage = async () => {
  // const games = await getGames();
  const extId = 'nkbihfbeogaeaoehlefnkodbefgpgknn';
  console.log('da2');

  return (
    <div className='container mx-auto px-4 py-8 flex flex-wrap relative z-0 items-center'>
      {/* <Metamask /> */}
      {/* <WebView /> */}
      <WagmiConfig config={wagmiConfig}>
        <WalletConnect />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      {/* <Web3Authentication /> */}
      {/* <Auth0 /> */}
      {/* {games.results.map((game: any) => (
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col mb-6'>
          <Link href={`/details/${game.id}`}>
            <div className='w-48 h-64 relative'>
              <Image
                src={game.background_image}
                alt={game.name}
                fill
                className='rounded-lg'
              />
            </div>
            <h2 className='mt-2 text-lg font-medium text-gray-800'>
              {game.name}
            </h2>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default HomePage;
