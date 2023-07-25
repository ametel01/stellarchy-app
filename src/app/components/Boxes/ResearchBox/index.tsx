import {
    Box,
    SubBox,
    Title,
    InfoContainer,
    ResourceContainer,
    NumberContainer,
    ResourceTitle,
    ImageContainer,
    ButtonContainer,
} from "@/styles";
import { LayerGroup } from "@/components/Icons/LayerGroup";
import { Coins } from "@/components/Icons/Coins";
import { ButtonPrimary } from "@/components/Button";
import Image from "next/legacy/image";
import { numberWithCommas } from "@/utils";
import plus from "@/assets/icons/Plus.svg";
import React, { useMemo } from "react";
import useUpgrade, { ComponentType } from "@/components/hooks/useUpgrade";

interface Props {
    img: any;
    title: string;
    functionCallName: ComponentType;
    level?: number;
    costUpdate?: { steel: number; quartz: number; tritium: number };
    hasEnoughResources?: boolean;
    requirementsMet?: boolean;
}

type ButtonState = "valid" | "noResource" | "noRequirements";

interface ButtonArrayStates {
    state: ButtonState;
    title: string;
    callback?: () => void;
    color?: string;
    icon: React.ReactNode;
}

const ResearchBox = ({
    img,
    title,
    functionCallName,
    level,
    costUpdate,
    hasEnoughResources,
    requirementsMet,
}: Props) => {
    const upgrade = useUpgrade(functionCallName);
    const steel = costUpdate ? numberWithCommas(costUpdate.steel) : null;
    const quartz = costUpdate ? numberWithCommas(costUpdate.quartz) : null;
    const tritium = costUpdate ? numberWithCommas(costUpdate.tritium) : null;

    const buttonState = useMemo((): ButtonState => {
        if (!requirementsMet) {
            return "noRequirements";
        } else if (!hasEnoughResources) {
            return "noResource";
        }

        return "valid";
    }, [hasEnoughResources, requirementsMet]);

    const statesButton: ButtonArrayStates[] = [
        {
            state: "valid",
            title: "Upgrade",
            callback: upgrade,
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
        {
            state: "noRequirements",
            title: "No Requirements",
            color: "#524c4c",
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

    const hasRequirements = actualButtonState?.state === "noRequirements";

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
                </InfoContainer>
                <ButtonContainer>
                    <ButtonPrimary
                        customColor={
                            isDisabled ? undefined : actualButtonState?.color
                        }
                        onClick={() =>
                            actualButtonState?.callback &&
                            actualButtonState.callback()
                        }
                        disabled={isDisabled}
                        requirements={hasRequirements}
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

export default ResearchBox;
