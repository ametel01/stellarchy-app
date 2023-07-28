import { useContractWrite, usePrepareContractWrite } from "wagmi";
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
    const { config, error } = usePrepareContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: `${unitName}Build`,
        args: [quantity],
        onError(error) {
            console.log("Error", error);
        },
    });
    const { write } = useContractWrite(config);
    return write;
}
