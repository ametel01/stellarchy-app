// @ts-nocheck

import { useMemo, useState } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

import ironImg from "@/assets/resources/nogameiron.png";
import quartzImg from "@/assets/resources/nogamecrystal.png";
import tritiumImg from "@/assets/resources/nogamedeuterium.png";
import energyImg from "@/assets/resources/nogameenergy.png";

import coins from "@/assets/icons/Coins.svg";
import gem from "@/assets/icons/Gem.svg";
import atom from "@/assets/icons/Atom.svg";
import bolt from "@/assets/icons/Bolt.svg";
import { GAMEADDRESS, STERC721ADDRESS } from "@/constants";
import { E18ToNumber, dataToNumber, numberWithCommas } from "@/utils";
import { useAccount, useConnect, useContractRead } from "wagmi";
import { QUARTZADDRESS, STEELADDRESS, TRITIUMADDRESS } from "@/constants";
import { GAMEABI } from "@/abi/stellarchy";
import { ERC721ABI } from "@/abi/erc721";

const Container = styled.div`
    //width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    //justify-content: space-between;
    padding: 4px 16px;
    //gap: 12px;

    //width: 100%;
    //height: 56px;

    flex: none;
    //order: 2;
    align-self: stretch;
    //flex-grow: 0;
    //background-color: blueviolet;
    //margin-bottom: 10px;
    border-top: 2px solid #151a1e;
`;

interface Props {
    total?: string;
    img: any;
    iconImg: any;
    title: string;
    address?: string;
}

const TotalResourceText = styled.div`
    color: #81d3ff;
    font-weight: 500;
    margin-left: 5px;
`;

const TotalResourceContainer = styled.div`
    display: flex;
`;

const TotalResourceWrapper = styled.div`
    margin-left: 30px;
`;
const ResourceAddress = styled.div`
    font-size: 12px;
`;

const ImageAddressContainer = styled.div`
    min &:hover {
        cursor: pointer;
    }
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    min-width: 50px;
`;

const Energy = ({ available, img, iconImg, title }: Props) => {
    return (
        <Container>
            <ImageAddressContainer>
                <div style={{ width: "30px" }}>
                    <Image
                        src={img}
                        alt="resource"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </div>
            </ImageAddressContainer>
            <TotalResourceWrapper>
                {title}
                <TotalResourceContainer>
                    <Image
                        src={iconImg}
                        alt="icon-resource"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                    <div>
                        <font size="1">available</font>
                        <TotalResourceText>{available}</TotalResourceText>
                    </div>
                </TotalResourceContainer>
            </TotalResourceWrapper>
        </Container>
    );
};

const Resource = ({
    spendable,
    collectible,
    img,
    iconImg,
    title,
    address,
}: Props) => {
    const [copied, setCopied] = useState(false);
    return (
        <Container>
            <ImageAddressContainer
                onClick={() => {
                    if (address) {
                        const blob = new Blob([address], {
                            type: "text/plain",
                        });
                        const item = new ClipboardItem({ "text/plain": blob });
                        navigator.clipboard
                            .write([item])
                            .then(() => setCopied(true));
                    }
                }}
            >
                <div style={{ width: "30px" }}>
                    <Image
                        src={img}
                        alt="resource"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                </div>
                {address && !copied && (
                    <ResourceAddress>{`${address.substring(
                        0,
                        6
                    )}...`}</ResourceAddress>
                )}
                {copied && <ResourceAddress>Copied</ResourceAddress>}
            </ImageAddressContainer>
            <TotalResourceWrapper>
                {title}
                <TotalResourceContainer>
                    <Image
                        src={iconImg}
                        alt="icon-resource"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                    <div>
                        <font size="1">Spendable</font>
                        <TotalResourceText>{spendable}</TotalResourceText>
                        <font size="1">Collectible</font>
                        <TotalResourceText>{collectible}</TotalResourceText>
                    </div>
                </TotalResourceContainer>
            </TotalResourceWrapper>
        </Container>
    );
};

const ResourcesContainer = () => {
    const { address } = useAccount();

    const { data: planetId } = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [address],
    });

    const { data: spendable } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getSpendableResources",
        args: [planetId],
    });

    const { data: collectible } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getCollectibleResources",
        args: [planetId],
    });

    const { data: energy } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getEnergyAvailable",
        args: [planetId],
    });

    const spendableResources = useMemo(() => {
        if (spendable) {
            return {
                steel: numberWithCommas(spendable["steel"]),
                quartz: numberWithCommas(spendable["quartz"]),
                tritium: numberWithCommas(spendable["tritium"]),
            };
        }
    }, [spendable]);

    const collectibleResources = useMemo(() => {
        if (collectible) {
            return {
                steel: numberWithCommas(collectible["steel"]),
                quartz: numberWithCommas(collectible["quartz"]),
                tritium: numberWithCommas(collectible["tritium"]),
            };
        }
    }, [collectible]);

    const energyAvailable = useMemo(() => {
        if (energy) {
            return {
                energy: Number(energy),
            };
        }
    }, [energy]);

    return (
        <div>
            <Resource
                title="Steel"
                address={STEELADDRESS}
                img={ironImg}
                iconImg={coins}
                spendable={spendableResources?.steel}
                collectible={collectibleResources?.steel}
            />
            <Resource
                title="Quartz"
                address={QUARTZADDRESS}
                img={quartzImg}
                iconImg={gem}
                spendable={spendableResources?.quartz}
                collectible={collectibleResources?.quartz}
            />
            <Resource
                title="Tritium"
                address={TRITIUMADDRESS}
                img={tritiumImg}
                iconImg={atom}
                spendable={spendableResources?.tritium}
                collectible={collectibleResources?.tritium}
            />
            <Energy
                title="Energy"
                img={energyImg}
                iconImg={bolt}
                available={energyAvailable?.energy}
            />
        </div>
    );
};

export default ResourcesContainer;
