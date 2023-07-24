"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import WalletHeader from "./WallerHeader";
import LogoAndRankContainer from "@/components/LogoAndRankContainer";
import ResourcesContainer from "@/components/Resources";
import { WagmiConfig, useAccount, useDisconnect } from "wagmi";
import { CollectResources } from "@/components/hooks/useCollectResources";
import { config } from "@/page";

const BodyContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: #192125;
`;

const SideBar = () => {
    const { address: account } = useAccount();
    console.log("sidebar: ", account);
    const { disconnect } = useDisconnect();

    return (
        <WagmiConfig config={config}>
            <BodyContainer>
                <WalletHeader
                    account={account}
                    disconnect={() => disconnect()}
                />
                <LogoAndRankContainer account={account} />
                <ResourcesContainer />
                <CollectResources />
            </BodyContainer>
        </WagmiConfig>
    );
};

export default SideBar;
