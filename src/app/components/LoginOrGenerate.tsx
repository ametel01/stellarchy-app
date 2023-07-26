"use client";
import styled from "styled-components";
import React, { FC } from "react";
import { ConnectWalletButton } from "./ConnectWalletButton";

import Image from "next/legacy/image";
import NoGameLogo from "@/assets/stellarchy-logo.png";
import ufoLogo from "@/assets/icons/UFO.svg";
import { ButtonPrimary } from "./Button";
import { ColumnCenter } from "./Column";
import { RowCentered } from "./Row";
// import SideBar from "@/components/SideBar"
import { useAccount } from "wagmi";
import SideBar from "./SideBar";
import { GeneratePlanet } from "./hooks/useGeneratePlanet";

const MainWrapper = styled(ColumnCenter)`
    height: 80vh;
    justify-content: center;
    gap: 16px;
`;

export const SubText = styled.div`
    color: #ffffff;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.02em;
    padding: 0 15px 16px;
    width: 20%;

    color: #ffffff;

    opacity: 0.5;
`;

const GeneratePlanetWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
`;

interface AuthScreenProps {
    address?: string;
    loading: boolean;
    walletConnectLoading: boolean;
    hasGeneratedPlanets: boolean | undefined;
}

type ConnectWalletViewProps = Omit<
    AuthScreenProps,
    "generatePlanet" | "hasGeneratedPlanets"
>;

type GeneratePlanetViewProps = Omit<
    AuthScreenProps,
    "walletConnectLoading" | "hasGeneratedPlanets"
>;

const AuthScreen = ({
    address,
    loading = true,
    walletConnectLoading,
    hasGeneratedPlanets = false,
}: AuthScreenProps) => {
    if (address && !hasGeneratedPlanets) {
        return <GeneratePlanetView address={address} loading={loading} />;
    }

    return (
        <ConnectWalletView
            address={address}
            loading={loading}
            walletConnectLoading={walletConnectLoading}
        />
    );
};

const ConnectWalletView: FC<ConnectWalletViewProps> = ({
    address,
    loading,
    walletConnectLoading,
}) => {
    return (
        <MainWrapper>
            <RowCentered style={{ width: "300px" }}>
                <Image src={NoGameLogo} alt="logo" objectFit="contain" />
            </RowCentered>

            <SubText>
                Manage your resources, discover new worlds and conquer the
                galaxy!
            </SubText>

            <div>
                {!address ? (
                    walletConnectLoading ? (
                        <ButtonPrimary disabled>Loading...</ButtonPrimary>
                    ) : (
                        <ConnectWalletButton />
                    )
                ) : null}
            </div>
        </MainWrapper>
    );
};

const GeneratePlanetView: FC<GeneratePlanetViewProps> = ({
    address,
    loading,
}) => {
    return (
        <GeneratePlanetWrapper>
            <SideBar />
            <MainWrapper>
                <RowCentered style={{ width: "300px" }}>
                    <Image
                        src={ufoLogo}
                        alt="ufo"
                        objectFit="contain"
                        width={48}
                        height={48}
                    />
                </RowCentered>

                <SubText>Ready for lift off!</SubText>

                <div>
                    <GeneratePlanet />
                </div>
            </MainWrapper>
        </GeneratePlanetWrapper>
    );
};

export default AuthScreen;