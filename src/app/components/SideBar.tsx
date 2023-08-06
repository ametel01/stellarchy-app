"use client";
import styled from "styled-components";
import WalletHeader from "./WallerHeader";
import LogoAndRankContainer from "@/components/LogoAndRankContainer";
import ResourcesContainer from "@/components/Resources";
import { useAccount, useDisconnect } from "wagmi";
import { CollectResources } from "@/components/hooks/useCollectResources";
// import { LeaderBoard } from "./LeaderBoard";

const BodyContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: #192125;
`;

const SideBar = () => {
    const { address: account } = useAccount();

    const { disconnect } = useDisconnect();

    return (
        <BodyContainer>
            <WalletHeader account={account} disconnect={() => disconnect()} />
            <LogoAndRankContainer account={account!} />
            <ResourcesContainer />
            <CollectResources />
            {/* <LeaderBoard /> */}
        </BodyContainer>
    );
};

export default SideBar;
