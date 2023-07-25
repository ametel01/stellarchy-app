import styled from "styled-components";
import { LayerGroup } from "@/components/Icons/LayerGroup";
import { Coins } from "@/components/Icons/Coins";
import { ButtonPrimary } from "@/components/Button";
import Image from "next/legacy/image";
import useUpgrade, { ComponentType } from "@/components/hooks/useUpgrade";
import plus from "@/assets/icons/Plus.svg";
import Column from "@/components/Column";
import React, { useMemo } from "react";
import { numberWithCommas } from "@/utils";

const Box = styled.div<{ customcolor: string }>`
    width: 100%;
    max-height: 70px;
    display: flex;
    flex-direction: row;
    //align-items: center;
    //justify-content: space-between;
    margin-bottom: 10px;
    //padding: 10px;
    border: 2px solid ${(props) => props.customcolor};
    background-color: #151a1e;
    border-radius: 4px;
    overflow: hidden;
`;

const SubBox = styled.div`
    width: 100%;
    //max-height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

const Title = styled.div`
    width: 130px;
`;

const InfoContainer = styled.div`
    //width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`;
const ResourceContainer = styled(Column)`
    width: 50px;
    text-align: left;
    gap: 3px;
`;

const NumberContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 4px;
    align-items: center;
    font-size: 14px;
    line-height: 18.2px;
`;

const ResourceTitle = styled.div`
    color: grey;
    font-weight: 700;
    font-size: 12px;
    @media (max-width: 1300px) {
        display: none;
    }
`;

const ImageContainer = styled.div`
    width: 70px;
`;

const ButtonContainer = styled.div`
    max-width: 300px;
    min-width: 195px;
    :hover {
        filter: brightness(0.75);
    }
    @media (min-width: 1000px) {
        width: 300px;
    }
`;

interface Props {
    img: any;
    title: string;
    functionCallName: ComponentType;
    level?: number;
    costUpdate?: {
        steel: number;
        quartz: number;
        tritium: number;
        energy: number;
    };
    hasEnoughResources?: boolean;
}

type ButtonState = "valid" | "noResource";

interface ButtonArrayStates {
    state: ButtonState;
    title: string;
    callback?: () => void;
    color?: string;
    icon: React.ReactNode;
}

const CompoundsBox = ({
    img,
    title,
    level,
    hasEnoughResources,
    costUpdate,
    functionCallName,
}: Props) => {
    const upgrade = useUpgrade(functionCallName);
    const steel = costUpdate ? numberWithCommas(costUpdate.steel) : null;
    const quartz = costUpdate ? numberWithCommas(costUpdate.quartz) : null;
    const tritium = costUpdate ? numberWithCommas(costUpdate.tritium) : null;
    const energy = costUpdate ? numberWithCommas(costUpdate.energy) : null;

    const buttonState = useMemo((): ButtonState => {
        if (!hasEnoughResources) {
            return "noResource";
        }

        return "valid";
    }, [hasEnoughResources]);

    const statesButton: ButtonArrayStates[] = [
        {
            state: "valid",
            title: "Upgrade",
            callback: upgrade,
            // color: "#6cbd6a",
            color: "#295c28",
            icon: (
                <Image
                    src={plus}
                    alt="plus"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            ),
        },
        {
            state: "noResource",
            title: "Need Resources",
            // callback: () => {},
            color: "#402F2C",
            icon: (
                <Image
                    src={plus}
                    alt="plus"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            ),
        },
    ];

    const actualButtonState = statesButton.find(
        (state) => state.state === buttonState
    );
    const isDisabled = actualButtonState?.state === "noResource";

    return (
        <Box customcolor={actualButtonState?.color ?? "grey"}>
            <ImageContainer>
                <Image
                    src={img}
                    alt={title}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </ImageContainer>
            <SubBox>
                <Title>{title}</Title>
                <InfoContainer>
                    <ResourceContainer>
                        <ResourceTitle>LEVEL</ResourceTitle>
                        <NumberContainer>
                            <LayerGroup />
                            {level}
                        </NumberContainer>
                    </ResourceContainer>
                    <ResourceContainer>
                        <ResourceTitle>STEEL COST</ResourceTitle>
                        <NumberContainer>
                            <Coins />
                            {steel}
                        </NumberContainer>
                    </ResourceContainer>
                    <ResourceContainer>
                        <ResourceTitle>QUARTZ COST</ResourceTitle>
                        <NumberContainer>
                            <Coins />
                            {quartz}
                        </NumberContainer>
                    </ResourceContainer>
                    <ResourceContainer>
                        <ResourceTitle>TRITIUM COST</ResourceTitle>
                        <NumberContainer>
                            <Coins />
                            {tritium}
                        </NumberContainer>
                    </ResourceContainer>
                    <ResourceContainer>
                        <ResourceTitle>ENERGY REQUIRED</ResourceTitle>
                        <NumberContainer>
                            <Coins />
                            {energy}
                        </NumberContainer>
                    </ResourceContainer>
                </InfoContainer>
                <ButtonContainer>
                    <ButtonPrimary
                        onClick={() => upgrade()}
                        disabled={isDisabled}
                    >
                        <div
                            style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                flexDirection: "row",
                            }}
                        >
                            <div style={{ width: 20, height: 20 }}>
                                {actualButtonState?.icon}
                            </div>
                            {actualButtonState?.title}
                        </div>
                    </ButtonPrimary>
                </ButtonContainer>
            </SubBox>
        </Box>
    );
};

export default CompoundsBox;
