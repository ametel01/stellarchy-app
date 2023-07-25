import { BigNumber } from "bignumber.js";
import { TechLevels } from "./types";
import { flat } from "electron-osx-sign";

export const dataToNumber = (value: any) => new BigNumber(value).toNumber();

export const E18ToNumber = (value: any) =>
    Math.floor(new BigNumber(value).toNumber() / 10 ** 18);

// export const bigDataToNumber = (value: any) =>
//     new BigNumber(uint256ToBN(value)).toNumber();

export const calculEnoughResources = (
    required: { steel: number; quartz: number; tritium: number },
    available: { steel: number; quartz: number; tritium: number }
) => {
    if (!available) {
        return false;
    }

    return (
        available.steel - required.steel >= 0 &&
        available.quartz - required.quartz >= 0 &&
        available.tritium - required.tritium >= 0
    );
};

export const energyRequirements = (labLevel: number | undefined) => {
    return labLevel ? labLevel >= 1 : false;
};

export const digitalRequirements = (labLevel: number | undefined) => {
    return labLevel ? labLevel >= 1 : false;
};

export const armourRequirements = (labLevel: number | undefined) => {
    return labLevel ? labLevel >= 2 : false;
};

export const weaponsRequirements = (labLevel: number | undefined) => {
    return labLevel ? labLevel >= 4 : false;
};

export const beamTechRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 1 && techs
            ? techs.energy >= 1
            : false
        : false;
};

export const shieldRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 6 && techs
            ? techs.energy >= 6
            : false
        : false;
};

export const combustionRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 1 && techs
            ? techs.energy >= 1
            : false
        : false;
};

export const thrustRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 2 && techs
            ? techs.energy >= 1
            : false
        : false;
};

export const ionRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 4 && techs
            ? techs.energy >= 4 && techs
                ? techs.beam >= 5
                : false
            : false
        : false;
};

export const spacetimeRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 7 && techs
            ? techs.energy >= 5 && techs.shielding >= 5
            : false
        : false;
};

export const warpRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 7 && techs
            ? techs.energy >= 5 && techs
                ? techs.spacetime >= 3
                : false
            : false
        : false;
};

export const plasmaTechRequirements = (
    labLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return labLevel
        ? labLevel >= 4 && techs
            ? techs.energy >= 8 && techs
                ? techs.beam >= 10 && techs
                    ? techs.spacetime >= 5
                    : false
                : false
            : false
        : false;
};

export const carrierRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 2 && techs
            ? techs.combustion >= 2
            : false
        : false;
};

export const celestiaRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 1 && techs
            ? techs.combustion >= 1
            : false
        : false;
};

export const scraperRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 4 && techs
            ? techs.combustion >= 6 && techs
                ? techs.shielding >= 2
                : false
            : false
        : false;
};

export const sparrowRequirements = (dockyardLevel: number | undefined) => {
    return dockyardLevel ? dockyardLevel >= 2 : false;
};

export const frigateRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 5 && techs
            ? techs.ion >= 2 && techs
                ? techs.thrust >= 4
                : false
            : false
        : false;
};

export const armadeRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 7 && techs
            ? techs.warp >= 4
            : false
        : false;
};

export const blasterRequirements = (dockyardLevel: number | undefined) => {
    return dockyardLevel ? dockyardLevel >= 1 : false;
};

export const beamRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 1 && techs
            ? techs.energy >= 2 && techs
                ? techs.beam >= 3
                : false
            : false
        : false;
};

export const astralRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 6 && techs
            ? techs.energy >= 6 && techs
                ? techs.armour >= 3 && techs
                    ? techs.shielding >= 1
                    : false
                : false
            : false
        : false;
};

export const plasmaRequirements = (
    dockyardLevel: number | undefined,
    techs: TechLevels | undefined
) => {
    return dockyardLevel
        ? dockyardLevel >= 8 && techs
            ? techs.plasma >= 7
            : false
        : false;
};

export const numberWithCommas = (num: number) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
