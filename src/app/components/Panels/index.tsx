// @ts-nocheck

import { FC, useEffect, useMemo } from "react";
import { RowCentered } from "@/components/Row";
import {
    ResourcesTabList,
    ResourcesTabs,
    ResourceTab,
} from "../Popups/ResourcesSection/styleds";
import { CompoundsIcon } from "@/assets/icons/factory";
import { ResearchIcon } from "@/assets/icons/lab";
import { dataToNumber } from "@/utils";
import { ResearchTabPanel } from "./LabTab";
import { DockyardTabPanel } from "./DockyardTab";
import { DefenceTabPanel } from "./DefencesTab";
import { EmptyTabPanel } from "./EmptyTabPanel";
import { useAccount, useContractRead } from "wagmi";
import { GAMEADDRESS, STERC721ADDRESS } from "@/constants";
import { ERC721ABI } from "@/abi/erc721";
import { GAMEABI } from "@/abi/stellarchy";
import { CompoundsTabPanel } from "./CompoundsTab";

export const ResourcesSection: FC = () => {
    const { address: account } = useAccount();

    const { data: planetId } = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [account],
    });

    const { data: spendableResources } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getSpendableResources",
        args: [planetId],
    });

    // const { data: collectibleResources } = useContractRead({
    //     address: GAMEADDRESS,
    //     abi: GAMEABI,
    //     functionName: "getCollectibleResources",
    // });

    const { data: energyAvailable } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getEnergyAvailable",
    });

    // const { data: resourcesUpgradesCost } = useContractRead({
    //     address: GAMEADDRESS,
    //     abi: GAMEABI,
    //     functionName: "getCompoundsUpgradeCost",
    // });

    const { data: compoundsLevels } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getCompoundsLevels",
        args: [planetId],
    });

    const { data: compoundsCost } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getCompoundsUpgradeCost",
        args: [planetId],
    });

    const { data: techLevels } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getTechsLevels",
        args: [planetId],
    });

    const { data: techCost } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getTechsUpgradeCosts",
        args: [planetId],
    });

    const { data: shipsLevels } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getShipsLevels",
        args: [planetId],
    });

    const { data: shipsCost } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getShipsCost",
    });

    const { data: defencesLevels } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getDefencesLevels",
        args: [planetId],
    });

    const { data: defencesCost } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getDefencesCost",
    });

    const planetResources = useMemo(() => {
        if (spendableResources) {
            return {
                steel: dataToNumber(spendableResources["steel"]),
                quartz: dataToNumber(spendableResources["quartz"]),
                tritium: dataToNumber(spendableResources["tritium"]),
                energy: Number(energyAvailable),
            };
        }
    }, [spendableResources, energyAvailable]);

    const planetCompoundsLevels = useMemo(() => {
        if (compoundsLevels) {
            return {
                steelMine: dataToNumber(compoundsLevels["steelMine"]),
                quartzMine: dataToNumber(compoundsLevels["quartzMine"]),
                tritiumMine: dataToNumber(compoundsLevels["tritiumMine"]),
                energyPlant: dataToNumber(compoundsLevels["energyPlant"]),
                lab: dataToNumber(compoundsLevels["lab"]),
                dockyard: dataToNumber(compoundsLevels["dockyard"]),
            };
        }
    }, [compoundsLevels]);

    const planetCompoundsCost = useMemo(() => {
        if (compoundsCost) {
            return {
                steelMine: {
                    steel: dataToNumber(compoundsCost["steelMine"]["steel"]),
                    quartz: dataToNumber(compoundsCost["steelMine"]["quartz"]),
                    tritium: dataToNumber(
                        compoundsCost["steelMine"]["tritium"]
                    ),
                    energy: 0,
                },
                quartzMine: {
                    steel: dataToNumber(compoundsCost["quartzMine"]["steel"]),
                    quartz: dataToNumber(compoundsCost["quartzMine"]["quartz"]),
                    tritium: dataToNumber(
                        compoundsCost["quartzMine"]["tritium"]
                    ),
                    energy: 0,
                },
                tritiumMine: {
                    steel: dataToNumber(compoundsCost["tritiumMine"]["steel"]),
                    quartz: dataToNumber(
                        compoundsCost["tritiumMine"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        compoundsCost["tritiumMine"]["tritium"]
                    ),
                    energy: 0,
                },
                energyPlant: {
                    steel: dataToNumber(compoundsCost["energyPlant"]["steel"]),
                    quartz: dataToNumber(
                        compoundsCost["energyPlant"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        compoundsCost["energyPlant"]["tritium"]
                    ),
                    energy: 0,
                },
                lab: {
                    steel: dataToNumber(compoundsCost["lab"]["steel"]),
                    quartz: dataToNumber(compoundsCost["lab"]["quartz"]),
                    tritium: dataToNumber(compoundsCost["lab"]["tritium"]),
                    energy: 0,
                },
                dockyard: {
                    steel: dataToNumber(compoundsCost["dockyard"]["steel"]),
                    quartz: dataToNumber(compoundsCost["dockyard"]["quartz"]),
                    tritium: dataToNumber(compoundsCost["dockyard"]["tritium"]),
                    energy: 0,
                },
            };
        }
    }, [compoundsCost]);

    const planetShipsLevels = useMemo(() => {
        if (shipsLevels) {
            return {
                carrier: dataToNumber(shipsLevels["carrier"]),
                scraper: dataToNumber(shipsLevels["scraper"]),
                celestia: dataToNumber(shipsLevels["celestia"]),
                sparrow: dataToNumber(shipsLevels["sparrow"]),
                frigate: dataToNumber(shipsLevels["frigate"]),
                armade: dataToNumber(shipsLevels["armade"]),
            };
        }
    }, [shipsLevels]);

    const planetShipsCost = useMemo(() => {
        if (shipsCost) {
            return {
                carrier: {
                    steel: dataToNumber(shipsCost["carrier"]["steel"]),
                    quartz: dataToNumber(shipsCost["carrier"]["quartz"]),
                    tritium: dataToNumber(shipsCost["carrier"]["tritium"]),
                },
                celestia: {
                    steel: dataToNumber(shipsCost["celestia"]["steel"]),
                    quartz: dataToNumber(shipsCost["celestia"]["quartz"]),
                    tritium: dataToNumber(shipsCost["celestia"]["tritium"]),
                },
                scraper: {
                    steel: dataToNumber(shipsCost["scraper"]["steel"]),
                    quartz: dataToNumber(shipsCost["scraper"]["quartz"]),
                    tritium: dataToNumber(shipsCost["scraper"]["tritium"]),
                },
                sparrow: {
                    steel: dataToNumber(shipsCost["sparrow"]["steel"]),
                    quartz: dataToNumber(shipsCost["sparrow"]["quartz"]),
                    tritium: dataToNumber(shipsCost["sparrow"]["tritium"]),
                },
                frigate: {
                    steel: dataToNumber(shipsCost["frigate"]["steel"]),
                    quartz: dataToNumber(shipsCost["frigate"]["quartz"]),
                    tritium: dataToNumber(shipsCost["frigate"]["tritium"]),
                },
                armade: {
                    steel: dataToNumber(shipsCost["armade"]["steel"]),
                    quartz: dataToNumber(shipsCost["armade"]["quartz"]),
                    tritium: dataToNumber(shipsCost["armade"]["tritium"]),
                },
            };
        }
    }, [shipsCost]);

    const planetDefencesLevels = useMemo(() => {
        if (defencesLevels) {
            return {
                blaster: dataToNumber(defencesLevels["blaster"]),
                beam: dataToNumber(defencesLevels["beam"]),
                astral: dataToNumber(defencesLevels["astralLauncher"]),
                plasma: dataToNumber(defencesLevels["plasmaProjector"]),
            };
        }
    }, [defencesLevels]);

    const planetDefenceCost = useMemo(() => {
        if (defencesCost) {
            return {
                blaster: {
                    steel: dataToNumber(defencesCost["blaster"]["steel"]),
                    quartz: dataToNumber(defencesCost["blaster"]["quartz"]),
                    tritium: dataToNumber(defencesCost["blaster"]["tritium"]),
                },
                beam: {
                    steel: dataToNumber(defencesCost["beam"]["steel"]),
                    quartz: dataToNumber(defencesCost["beam"]["quartz"]),
                    tritium: dataToNumber(defencesCost["beam"]["tritium"]),
                },
                astral: {
                    steel: dataToNumber(
                        defencesCost["astralLauncher"]["steel"]
                    ),
                    quartz: dataToNumber(
                        defencesCost["astralLauncher"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        defencesCost["astralLauncher"]["tritium"]
                    ),
                },
                plasma: {
                    steel: dataToNumber(
                        defencesCost["plasmaProjector"]["steel"]
                    ),
                    quartz: dataToNumber(
                        defencesCost["plasmaProjector"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        defencesCost["plasmaProjector"]["tritium"]
                    ),
                },
            };
        }
    }, [defencesCost]);

    const planetTechLevels = useMemo(() => {
        if (techLevels) {
            return {
                armour: dataToNumber(techLevels["armourInnovation"]),
                combustion: dataToNumber(techLevels["combustiveDrive"]),
                computer: dataToNumber(techLevels["digitalSystems"]),
                energy: dataToNumber(techLevels["energyInnovation"]),
                warp: dataToNumber(techLevels["warpDrive"]),
                spacetime: dataToNumber(techLevels["spacetimeWarp"]),
                thrust: dataToNumber(techLevels["thrustPropulsion"]),
                ion: dataToNumber(techLevels["ionSystems"]),
                beam: dataToNumber(techLevels["beamTechnology"]),
                plasma: dataToNumber(techLevels["plasmaEngineering"]),
                shielding: dataToNumber(techLevels["shieldTech"]),
                weapons: dataToNumber(techLevels["armsDevelopment"]),
            };
        }
    }, [techLevels]);

    const planetTechCostUpgrade = useMemo(() => {
        if (techCost) {
            return {
                armour: {
                    steel: dataToNumber(techCost["armourInnovation"]["steel"]),
                    quartz: dataToNumber(
                        techCost["armourInnovation"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        techCost["armourInnovation"]["tritium"]
                    ),
                },
                combustion: {
                    steel: dataToNumber(techCost["combustiveDrive"]["steel"]),
                    quartz: dataToNumber(techCost["combustiveDrive"]["quartz"]),
                    tritium: dataToNumber(
                        techCost["combustiveDrive"]["tritium"]
                    ),
                },
                computer: {
                    steel: dataToNumber(techCost["digitalSystems"]["steel"]),
                    quartz: dataToNumber(techCost["digitalSystems"]["quartz"]),
                    tritium: dataToNumber(
                        techCost["digitalSystems"]["tritium"]
                    ),
                },
                energy: {
                    steel: dataToNumber(techCost["energyInnovation"]["steel"]),
                    quartz: dataToNumber(
                        techCost["energyInnovation"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        techCost["energyInnovation"]["tritium"]
                    ),
                },
                warp: {
                    steel: dataToNumber(techCost["warpDrive"]["steel"]),
                    quartz: dataToNumber(techCost["warpDrive"]["quartz"]),
                    tritium: dataToNumber(techCost["warpDrive"]["tritium"]),
                },
                spacetime: {
                    steel: dataToNumber(techCost["spacetimeWarp"]["steel"]),
                    quartz: dataToNumber(techCost["spacetimeWarp"]["quartz"]),
                    tritium: dataToNumber(techCost["spacetimeWarp"]["tritium"]),
                },
                thrust: {
                    steel: dataToNumber(techCost["thrustPropulsion"]["steel"]),
                    quartz: dataToNumber(
                        techCost["thrustPropulsion"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        techCost["thrustPropulsion"]["tritium"]
                    ),
                },
                ion: {
                    steel: dataToNumber(techCost["ionSystems"]["steel"]),
                    quartz: dataToNumber(techCost["ionSystems"]["quartz"]),
                    tritium: dataToNumber(techCost["ionSystems"]["tritium"]),
                },
                beam: {
                    steel: dataToNumber(techCost["beamTechnology"]["steel"]),
                    quartz: dataToNumber(techCost["beamTechnology"]["quartz"]),
                    tritium: dataToNumber(
                        techCost["beamTechnology"]["tritium"]
                    ),
                },
                plasma: {
                    steel: dataToNumber(techCost["plasmaEngineering"]["steel"]),
                    quartz: dataToNumber(
                        techCost["plasmaEngineering"]["quartz"]
                    ),
                    tritium: dataToNumber(
                        techCost["plasmaEngineering"]["tritium"]
                    ),
                },
                shielding: {
                    steel: dataToNumber(techCost["shieldTech"]["steel"]),
                    quartz: dataToNumber(techCost["shieldTech"]["quartz"]),
                    tritium: dataToNumber(techCost["shieldTech"]["tritium"]),
                },
                weapons: {
                    steel: dataToNumber(techCost["armsDevelopment"]["steel"]),
                    quartz: dataToNumber(techCost["armsDevelopment"]["quartz"]),
                    tritium: dataToNumber(
                        techCost["armsDevelopment"]["tritium"]
                    ),
                },
            };
        }
    }, [techCost]);

    return (
        <ResourcesTabs>
            <ResourcesTabList>
                <ResourceTab>
                    <RowCentered gap={"8px"}>
                        <CompoundsIcon /> Compounds
                    </RowCentered>
                </ResourceTab>
                <ResourceTab>
                    <RowCentered gap={"8px"}>
                        <ResearchIcon /> Research Lab
                    </RowCentered>
                </ResourceTab>
                <ResourceTab>
                    <RowCentered gap={"8px"}>
                        <ResearchIcon /> Dockyard
                    </RowCentered>
                </ResourceTab>
                <ResourceTab>
                    <RowCentered gap={"8px"}>
                        <ResearchIcon /> Defences
                    </RowCentered>
                </ResourceTab>
            </ResourcesTabList>
            <CompoundsTabPanel
                spendableResources={planetResources}
                compoundsLevels={planetCompoundsLevels}
                compoundsCostUpgrade={planetCompoundsCost}
            />
            <ResearchTabPanel
                spendableResources={planetResources}
                techLevels={planetTechLevels}
                techCostUpgrade={planetTechCostUpgrade}
                labLevel={compoundsLevels?.lab}
            />
            <DockyardTabPanel
                spendableResources={planetResources}
                shipsLevels={planetShipsLevels}
                shipsCost={planetShipsCost}
                dockyardLevel={compoundsLevels?.dockyard}
                techLevels={planetTechLevels}
            />
            <DefenceTabPanel
                spendableResources={planetResources}
                defenceLevels={planetDefencesLevels}
                defenceCost={planetDefenceCost}
                dockyardLevel={compoundsLevels?.dockyard}
                techLevels={planetTechLevels}
            />
            <EmptyTabPanel />
        </ResourcesTabs>
    );
};
