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
import Image from "next/legacy/image";
import { useAccount, useContractRead } from "wagmi";
import { ERC721ABI } from "@/abi/erc721";
import { STERC721ADDRESS } from "@/constants";

const PlanetImageWrapper = styled(RowCentered)`
    height: 250px;
    width: 250px;
    border-radius: 35px;
    background: #192125;
    overflow: hidden;
    float left;
`;
const MainContainer = styled(RowCentered)`
    gap: 48px;
`;

const PlanetInfoContainer = styled(Column)`
    gap: 6px;
    color: white;
    width: 252px;
    float: left;
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

const PlanetImage = () => {
    const ipfsUrl =
        "https://scarlet-biological-chipmunk-168.mypinata.cloud/ipfs/Qmd5j1gnUBtbfpHCMnWDE8HRHu1G3ghuXSxjKW2pzy3PAk/";
    const [metadata, setMetadata] = useState<any>();

    const { address } = useAccount();

    const { data: tokenId } = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [address],
    });

    useEffect(() => {
        if (address && !metadata) {
            const url = `${ipfsUrl}${Number(tokenId)}${".json"}`;

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
        "https://scarlet-biological-chipmunk-168.mypinata.cloud/ipfs/QmbmsALmobAaTKDLVmPyC1j1Z1nABn7MfNCNXbYvFMrx3m";

    const imgId = useMemo(() => {
        if (tokenId != undefined) {
            return Number(tokenId) % 17;
        }
        return null;
    }, [tokenId]);

    const findAttribute = (name: string) =>
        metadata?.attributes.find(({ trait_type }) => trait_type === name)
            ?.value || "-";

    // const findImage = () => metadata?.image || "-";

    return (
        <>
            <PlanetImageWrapper>
                {imgId ? (
                    <a href={`${ipfsUrl}${tokenId}.json`}>
                        <Image
                            src={`${imgUrl}/${imgId}.png`}
                            width={250}
                            height={252}
                            alt={"planet"}
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                    </a>
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
    return (
        <RowCentered>
            <MainContainer>
                <PlanetImage />
            </MainContainer>
        </RowCentered>
    );
};
