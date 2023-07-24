// @ts-nocheck
import { FC, useEffect, useMemo, useState } from "react";
import Row, { RowBetween, RowCentered } from "@/components/Row";
import styled from "styled-components";
import axios from "axios";

import { ImageIcon } from "@/components/Icons/Image";
import Column from "@/components/Column";
import { PlanetIcon } from "@/components/Icons/Planet";
import { ScaleIcon } from "@/components/Icons/Scale";
import { TemperatureIcon } from "@/components/Icons/Temperature";
import { dataToNumber, numberWithCommas } from "@/utils";
import { BigNumber } from "bignumber.js";
import Image from "next/legacy/image";
import { useAccount, useContractRead } from "wagmi";
import { ERC721ABI } from "@/abi/erc721";
import { STERC721ADDRESS } from "@/constants";
import useGetTokenId from "./hooks/useGetTokenId";

const PlanetImageWrapper = styled(RowCentered)`
    height: 150px;
    width: 150px;
    border-radius: 20px;
    background: #192125;
    overflow: hidden;
`;
const MainContainer = styled(RowCentered)`
    gap: 48px;
`;

const PlanetInfoContainer = styled(Column)`
    gap: 6px;
    color: white;
    width: 352px;
`;

const PlanetInfoRow = styled(RowBetween)`
    gap: 16px;
    width: 100%;
`;

const PlanetInfoKey = styled.div`
    text-transform: uppercase;
    opacity: 50%;
    font-weight: 700;

    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
`;

const PlanetInfoValue = styled(Row)`
    width: auto;
    gap: 8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    letter-spacing: 0.02em;
`;

function hex2a(hex: string) {
    let str = "";
    for (let i = 0; i < hex.length; i += 2) {
        const v = parseInt(hex.substring(i, i + 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    return str;
}

const PlanetImage = ({ planetId }: { planetId: any }) => {
    const ipfsUrl =
        "https://scarlet-biological-chipmunk-168.mypinata.cloud/ipfs/QmTUUfE2UKDSUdqFL67WRvQMJjEHsJVXyopnc5UiGwgQNP/";
    const [metadata, setMetadata] = useState<any>();

    const { address } = useAccount();

    const { data: tokenId } = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [address]
    })

    useEffect(() => {
        if (address && !metadata) {
            const url = `${ipfsUrl}${tokenId}${".json"}`;

            axios
                .get(url)
                .then((result) => {
                    setMetadata(result.data as any);
                })
                .catch((e) => console.error(e));
        }
    }, [tokenId, setMetadata, metadata, address]);

    // const imgUrl = (ipfs: string) => `${ipfsUrl}${ipfs.replace("ipfs/", "")}`;
    const imgUrl =
        "https://scarlet-biological-chipmunk-168.mypinata.cloud/ipfs/QmTUUfE2UKDSUdqFL67WRvQMJjEHsJVXyopnc5UiGwgQNP";

    const imgId = useMemo(() => {
        if (tokenId != undefined) {
            return Number(tokenId) % 17;
        }
        return null;
    }, [tokenId]);

    console.log("imageId", imgId);

    const findAttribute = (name: string) =>
        metadata?.attributes.find(({ trait_type }) => trait_type === name)
            ?.value || "-";
    return (
        <>
            <PlanetImageWrapper>
                {imgId ? (
                    <Image
                        src={`${imgUrl}/${imgId}.png`}
                        width={150}
                        height={152}
                        alt={"planet"}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                ) : (
                    <ImageIcon />
                )}{" "}
            </PlanetImageWrapper>

            <PlanetInfoContainer>
                <PlanetInfoRow>
                    <PlanetInfoKey>Type</PlanetInfoKey>
                    <PlanetInfoValue>
                        <PlanetIcon />
                        {findAttribute("type")}
                    </PlanetInfoValue>
                </PlanetInfoRow>
                <PlanetInfoRow>
                    <PlanetInfoKey>Diameter</PlanetInfoKey>
                    <PlanetInfoValue>
                        <ScaleIcon />
                        {numberWithCommas(
                            dataToNumber(findAttribute("size")) * 10 ** 4
                        )}{" "}
                        km
                    </PlanetInfoValue>
                </PlanetInfoRow>
                <PlanetInfoRow>
                    <PlanetInfoKey>Avg Temp</PlanetInfoKey>
                    <PlanetInfoValue>
                        <TemperatureIcon />
                        {findAttribute("temperature")} °C
                    </PlanetInfoValue>
                </PlanetInfoRow>
            </PlanetInfoContainer>
        </>
    );
};

export const PlanetSection: FC = () => {
    const { address } = useAccount();
    
    const { data } = useGetTokenId(address);

    const planetId = Number(data) && Number(data); // TODO: check the return value of read call and modify this line accordingly;

    return (
        <RowCentered>
            <MainContainer>
                <PlanetImage planetId={planetId} />
            </MainContainer>
        </RowCentered>
    );
};
