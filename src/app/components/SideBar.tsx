"use client";
import { useEffect } from "react";
import styled from "styled-components";
import WalletHeader from "./WallerHeader";
import LogoAndRankContainer from "@/components/LogoAndRankContainer";
import ResourcesContainer from "@/components/Resources";
import { useAccount, useContractRead, useDisconnect } from "wagmi";
import { CollectResources } from "@/components/hooks/useCollectResources";
import { GAMEADDRESS } from "@/constants";
import { GAMEABI } from "@/abi/stellarchy";
import { dataToNumber } from "@/utils";
import { RankLineContainer } from "@/components/LogoAndRankContainer";
import { TrophyIcon } from "./Icons/Trophy";
import { TitleContainer } from "@/components/LogoAndRankContainer";

const BodyContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: #192125;
`;

const LeaderBoardWrapper = styled.div`
    margin-top: 20px;
`;

const BoardEntry = styled.div`
    border-top: 2px solid #151a1e;
    align-self: stretch;
    padding: 4px 16px;
    flex: none;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SideBar = () => {
    const { address: account } = useAccount();

    const { disconnect } = useDisconnect();

    const { data: leaders } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getLeaderBoard",
        suspense: true,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("This will run after 1 second!");
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const { data: leadPoints } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [leaders![0]],
    });

    const { data: leadTech } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [leaders![1]],
    });

    const { data: leadFleet } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [leaders![2]],
    });

    return (
        <BodyContainer>
            <WalletHeader account={account} disconnect={() => disconnect()} />
            <LogoAndRankContainer account={account!} />
            <ResourcesContainer />
            <CollectResources />
            <LeaderBoardWrapper />
            <BoardEntry>
                <div>
                    <RankLineContainer>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TrophyIcon />
                            <TitleContainer>Leader:&nbsp; </TitleContainer>
                            {dataToNumber(leaders?.[0])}
                            <TitleContainer>Score:&nbsp;</TitleContainer>
                            {dataToNumber(leadPoints)}
                        </div>
                    </RankLineContainer>
                </div>
            </BoardEntry>
            <BoardEntry>
                <div>
                    <RankLineContainer>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TrophyIcon />
                            <TitleContainer>Tech:&nbsp; </TitleContainer>
                            {dataToNumber(leaders?.[1])}
                            <TitleContainer>Score:&nbsp;</TitleContainer>
                            {dataToNumber(leadTech)}
                        </div>
                    </RankLineContainer>
                </div>
            </BoardEntry>
            <BoardEntry>
                <div>
                    <RankLineContainer>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TrophyIcon />
                            <TitleContainer>Fleet:&nbsp; </TitleContainer>
                            {dataToNumber(leaders?.[1])}
                            <TitleContainer>Score:&nbsp;</TitleContainer>
                            {dataToNumber(leadFleet)}
                        </div>
                    </RankLineContainer>
                </div>
            </BoardEntry>
        </BodyContainer>
    );
};

export default SideBar;
