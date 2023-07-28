import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { GAMEABI } from "@/abi/stellarchy";
import { GAMEADDRESS } from "@/constants";
import { Popover } from "@mui/material";

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
    const { config } = usePrepareContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: `${unitName}Upgrade`,
    });
    const { write } = useContractWrite(config);
    return write;
}
