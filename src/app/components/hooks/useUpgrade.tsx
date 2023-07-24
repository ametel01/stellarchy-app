import {  useContractWrite } from "wagmi";
import { GAMEABI } from "@/abi/stellarchy";
import { GAMEADDRESS } from "@/constants";

export type ComponentType =
    | "steelMine"
    | "quartzMine"
    | "tritiumMine"
    | "energyPlant"
    | "dockyard"
    | "lab"
    | "energyInnovation"
    | "digitalSystems"
    | "beamTechnology"
    | "ionSystems"
    | "plasmaEngineering"
    | "spacetimeWarp"
    | "combustionDrive"
    | "thrustPropulsion"
    | "warpDrive"
    | "armourInnovation"
    | "weaponsDevelopment"
    | "shieldTech";

export default function useUpgrade(unitName: ComponentType) {
    const { data, write } = useContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: `${unitName}Upgrade`,
    });
    return write;
    // const { address: account } = useAccount();

    // return useCallback(async () => {
    //     if (!account) {
    //         throw new Error("Missing Dependencies");
    //     }
    // }, [account, data]);
}
