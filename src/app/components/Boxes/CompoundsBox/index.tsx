import styled from "styled-components";
import { LayerGroup } from "@/components/Icons/LayerGroup";
import { Coins } from "@/components/Icons/Coins";
import useUpgrade, { ComponentType } from "@/components/hooks/useUpgrade";
import Column from "@/components/Column";
import React, { ReactNode, useMemo } from "react";
import { numberWithCommas } from "@/utils";
import { ButtonUpgrade } from "@/components/ButtonMain";
import ImagePopover from "@/components/modals";
import { StaticImageData } from "next/image";

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
    img: StaticImageData;
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
    description: ReactNode;
}

type ButtonState = "valid" | "noResource";

interface ButtonArrayStates {
    state: ButtonState;
    title: string;
    callback?: () => void;
    color?: string;
    // icon: React.ReactNode;
}

const CompoundsBox = ({
    img,
    title,
    level,
    hasEnoughResources,
    costUpdate,
    functionCallName,
    description,
}: Props) => {
    const { write: upgrade } = useUpgrade(functionCallName);

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
            color: "#295c28",
        },
        {
            state: "noResource",
            title: "Need Resources",
            color: "#e4c31b",
        },
    ];

    const actualButtonState = statesButton.find(
        (state) => state.state === buttonState
    );
    const isDisabled = actualButtonState?.state === "noResource";

    return (
        <Box customcolor={actualButtonState?.color ?? "grey"}>
            <ImageContainer>
                <ImagePopover
                    image={img}
                    title={title}
                    descripiton={description}
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
                    <ButtonUpgrade
                        callback={upgrade}
                        disabled={isDisabled}
                        noRequirements={false}
                    />
                </ButtonContainer>
            </SubBox>
        </Box>
    );
};

export default CompoundsBox;
