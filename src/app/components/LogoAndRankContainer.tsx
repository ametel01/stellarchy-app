// @ts-nocheck
import styled from "styled-components";
import Image from "next/legacy/image";
import nogame from "@/assets/stellarchy-logo.png";
import trophy from "@/assets/icons/Trophy.svg";
import ranking from "@/assets/icons/Ranking.svg";
import { useMemo } from "react";
import { dataToNumber, numberWithCommas } from "@/utils";
import BigNumber from "bignumber.js";
import { TrophyIcon } from "./Icons/Trophy";
import { useAccount, useContractRead } from "wagmi";
import { GAMEADDRESS, STERC721ADDRESS } from "@/constants";
import { GAMEABI } from "@/abi/stellarchy";
import { ERC721ABI } from "@/abi/erc721";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 18px 18px;
    gap: 16px;
`;

const RankContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 16px;
    gap: 10px;

    width: 192px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    //background-color: rebeccapurple;
`;

const RankLineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
`;

const TitleContainer = styled.div`
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: grey;
    margin-left: 4px;
`;

const LogoAndRankContainer = ({ account }) => {
    const { data: planetId } = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [account],
    });

    const { data: points } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [planetId],
    });

    const score = useMemo(() => {
        if (points) {
            return numberWithCommas(Number(points));
        }
    }, [points]);

    console.log(Number(planetId));

    return (
        <LogoContainer>
            <div style={{ width: 200 }}>
                <Image
                    src={nogame}
                    alt="nogame"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                    }}
                />
            </div>
            <RankContainer>
                <RankLineContainer>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <TrophyIcon />
                        <TitleContainer>Score</TitleContainer>
                    </div>
                    {score}
                </RankLineContainer>
            </RankContainer>
        </LogoContainer>
    );
};

export default LogoAndRankContainer;
