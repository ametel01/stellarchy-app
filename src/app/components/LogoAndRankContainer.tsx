import { useMemo } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import nogame from "@/assets/stellarchy-logo.png";
import { numberWithCommas } from "@/utils";
import { TrophyIcon } from "./Icons/Trophy";
import { useContractRead } from "wagmi";
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

export const RankLineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
`;

export const TitleContainer = styled.div`
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: grey;
    margin-left: 4px;
`;

interface Props {
    account: `0x${string}`;
}
const LogoAndRankContainer = (props: Props) => {
    const { data: planetId } = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [props.account],
    });

    const { data: points } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getPlanetPoints",
        args: [planetId!],
    });

    const score = useMemo(() => {
        if (points) {
            return numberWithCommas(Number(points));
        }
    }, [points]);

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
