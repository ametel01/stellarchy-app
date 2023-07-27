//@ts-nocheck
"use client";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Head from "next/head";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { arbitrum, mantle, arbitrumGoerli } from "wagmi/chains";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { AppWrapper } from "./components/AppWrapper";
import { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";
import AuthController from "./components/AuthController";

const walletConnectProjectId = "336bc4da43527c0440d48460467a7e4c";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [arbitrumGoerli],
    [
        alchemyProvider({ apiKey: "AU0WXB7ZH8TqK2iMytYhnG3LYxN8s7zb" }),
        publicProvider(),
    ]
);

export const config = createConfig({
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
    webSocketPublicClient,
});

export default function Home() {
    return (
        <>
            <WagmiConfig config={config}>
                <Head>
                    <title>Stellarchy</title>
                </Head>
                <FixedGlobalStyle />
                <ThemedGlobalStyle />
                <AppWrapper>
                    <AuthController />
                </AppWrapper>
            </WagmiConfig>
        </>
    );
}
