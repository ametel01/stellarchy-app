import { BigNumber } from "bignumber.js";

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

export const numberWithCommas = (num: number) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
