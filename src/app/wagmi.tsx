import { configureChains, createConfig } from "wagmi";
import { arbitrum, arbitrumGoerli } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";

const walletConnectProjectId = "336bc4da43527c0440d48460467a7e4c";

const { chains, publicClient } = configureChains(
    [arbitrumGoerli, arbitrum],
    [
        alchemyProvider({ apiKey: "AU0WXB7ZH8TqK2iMytYhnG3LYxN8s7zb" }),
        publicProvider(),
    ]
);

export const Config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new WalletConnectConnector({
            chains,
            options: {
                projectId: walletConnectProjectId,
            },
        }),
    ],
    publicClient,
});
