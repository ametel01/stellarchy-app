//@ts-nocheck
"use client";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Head from "next/head";
import {
    WagmiConfig,
    createConfig,
    configureChains,
    useConnect,
    useAccount,
} from "wagmi";
import { arbitrum, mantle, arbitrumGoerli } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { AppWrapper } from "./components/AppWrapper";
import { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";
import AuthController from "./components/AuthController";

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
        new InjectedConnector({
            chains,
            options: {
                name: "Injected",
                shimDisconnect: true,
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
