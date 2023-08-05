"use client";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Head from "next/head";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { arbitrumGoerli } from "wagmi/chains";
import { AppWrapper } from "./components/AppWrapper";
import { FixedGlobalStyle, ThemedGlobalStyle } from "./theme";
import AuthController from "./components/AuthController";
import "@rainbow-me/rainbowkit/styles.css";
import {
    getDefaultWallets,
    RainbowKitProvider,
    darkTheme,
} from "@rainbow-me/rainbowkit";

const walletConnectProjectId = "336bc4da43527c0440d48460467a7e4c";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [arbitrumGoerli],
    [
        alchemyProvider({ apiKey: "AU0WXB7ZH8TqK2iMytYhnG3LYxN8s7zb" }),
        publicProvider(),
    ]
);

const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: walletConnectProjectId,
    chains,
});

export const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export default function Home() {
    return (
        <>
            <WagmiConfig config={config}>
                <RainbowKitProvider chains={chains} theme={darkTheme()}>
                    <Head>
                        <title>Stellarchy</title>
                    </Head>
                    <FixedGlobalStyle />
                    <ThemedGlobalStyle />
                    <AppWrapper>
                        <AuthController />
                    </AppWrapper>
                </RainbowKitProvider>
            </WagmiConfig>
        </>
    );
}
