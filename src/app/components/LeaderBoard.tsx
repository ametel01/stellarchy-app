"use client";
import { useEffect } from "react";
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

function fetchLeaderBoard() {
    const { data, isSuccess } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getLeaderBoard",
    });
    if (isSuccess) {
        return data;
    }
    return fetchLeaderBoard();
}

export const LeaderBoard = () => {
    const leaders = fetchLeaderBoard();

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
        <>
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
        </>
    );
};
