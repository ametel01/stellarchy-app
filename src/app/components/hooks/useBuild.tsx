import { useContractWrite } from "wagmi";
import { GAMEADDRESS } from "@/constants";
import { GAMEABI } from "@/abi/stellarchy";

export type UnitType =
    | "carrier"
    | "celestia"
    | "scraper"
    | "sparrow"
    | "frigate"
    | "armade"
    | "blaster"
    | "beam"
    | "astralLauncher"
    | "plasmaProjector";

export default function useBuild(unitName: UnitType, quantity: number) {
    const { write } = useContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: `${unitName}Build`,
        args: [quantity],
    });
    return write;
}
