import { useMemo } from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import AppRoutes from './routes';
import { getLibrary } from './utils/metamask';
import { ApiProvider } from 'contexts/ApiContext';
import '@solana/wallet-adapter-react-ui/styles.css';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default function App() {
    const network: any = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <ApiProvider>
                        <AppRoutes />
                    </ApiProvider>
                </Web3ReactProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
