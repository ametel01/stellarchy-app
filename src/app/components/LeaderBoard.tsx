"use client";
import styled from "styled-components";
import { GAMEADDRESS } from "@/constants";
import { GAMEABI } from "@/abi/stellarchy";
import { dataToNumber } from "@/utils";
import { RankLineContainer } from "@/components/LogoAndRankContainer";
import { TrophyIcon } from "./Icons/Trophy";
import { TitleContainer } from "@/components/LogoAndRankContainer";
import { useContractRead } from "wagmi";

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

export const LeaderBoard = () => {
    const { data: pointLeader } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "pointLeader",
    });

    const { data: leadPoints } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [pointLeader!],
    });

    const { data: techLeader } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "techLeader",
    });

    const { data: leadTech } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [techLeader!],
    });

    const { data: fleetLeader } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "fleetLeader",
    });

    const { data: leadFleet } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [fleetLeader!],
    });

    return (
        <>
            <LeaderBoardWrapper />
            <BoardEntry>
                <div>
                    <RankLineContainer>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TrophyIcon />
                            <TitleContainer>Leader:&nbsp; </TitleContainer>
                            {dataToNumber(pointLeader)}
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
                            {dataToNumber(techLeader)}
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
                            {dataToNumber(fleetLeader)}
                            <TitleContainer>Score:&nbsp;</TitleContainer>
                            {dataToNumber(leadFleet)}
                        </div>
                    </RankLineContainer>
                </div>
            </BoardEntry>
        </>
    );
};
