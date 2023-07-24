// @ts-nocheck

import { FC, useEffect, useMemo } from "react";
import { RowCentered } from "@/components/Row";
import {
    ResourcesTabList,
    ResourcesTabs,
    ResourceTab,
} from "../Popups/ResourcesSection/styleds";
import { ResourcesIcon } from "@/components/Icons/Resources";
import { CompoundsIcon } from "@/assets/icons/factory";
import { ResearchIcon } from "@/assets/icons/lab";
import { ShipyardIcon } from "@/components/Icons/Shipyard";
import { differenceInMinutes, fromUnixTime } from "date-fns";
import { dataToNumber, E18ToNumber, numberWithCommas } from "@/utils";
import { ResearchTabPanel } from "./LabTab";
import { DockyardTabPanel } from "./DockyardTab";
import { DefenceTabPanel } from "./DefencesTab";
import { EmptyTabPanel } from "./EmptyTabPanel";
import { useAccount, useContractRead } from "wagmi";
import { GAMEADDRESS, STERC721ADDRESS } from "@/constants";
import { ERC721ABI } from "@/abi/erc721";
import { GAMEABI } from "@/abi/stellarchy";
import { CompoundsTabPanel } from "../Icons/CompoundsTab";

export const ResourcesSection: FC = () => {
    const { address: account } = useAccount();
    console.log(account);

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

    const { data: collectibleResources } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getCollectibleResources",
    });

    const { data: energyAvailable } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getEnergyAvailable",
    });

    const { data: resourcesUpgradesCost } = useContractRead({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "getCompoundsUpgradeCost",
    });

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
                steel: E18ToNumber(spendableResources["steel"]),
                quartz: E18ToNumber(spendableResources["quartz"]),
                tritium: E18ToNumber(spendableResources["tritium"]),
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
                blaster: dataToNumber(defencesLevels),
                beam: dataToNumber(defencesLevels),
                astral: dataToNumber(defencesLevels),
                plasma: dataToNumber(defencesLevels),
            };
        }
    }, [defencesLevels]);

    const planetDefenceCost = useMemo(() => {
        if (defencesCost) {
            return {
                blaster: {
                    steel: dataToNumber(defencesCost),
                    quartz: dataToNumber(defencesCost),
                    tritium: dataToNumber(defencesCost),
                },
                beam: {
                    steel: dataToNumber(defencesCost),
                    quartz: dataToNumber(defencesCost),
                    tritium: dataToNumber(defencesCost),
                },
                astral: {
                    steel: dataToNumber(defencesCost),
                    quartz: dataToNumber(defencesCost),
                    tritium: dataToNumber(defencesCost),
                },
                plasma: {
                    steel: dataToNumber(defencesCost),
                    quartz: dataToNumber(defencesCost),
                    tritium: dataToNumber(defencesCost),
                },
            };
        }
    }, [defencesCost]);

    const planetTechLevels = useMemo(() => {
        if (techLevels) {
            return {
                armour: dataToNumber(techLevels),
                combustion: dataToNumber(techLevels),
                computer: dataToNumber(techLevels),
                energy: dataToNumber(techLevels),
                warp: dataToNumber(techLevels),
                spacetime: dataToNumber(techLevels),
                thrust: dataToNumber(techLevels),
                ion: dataToNumber(techLevels),
                beam: dataToNumber(techLevels),
                plasma: dataToNumber(techLevels),
                shielding: dataToNumber(techLevels),
                weapons: dataToNumber(techLevels),
            };
        }
    }, [techLevels]);

    const planetTechCostUpgrade = useMemo(() => {
        if (techCost) {
            return {
                armour: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                combustion: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                computer: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                energy: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                warp: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                spacetime: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                thrust: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                ion: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                beam: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                plasma: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                shielding: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
                },
                weapons: {
                    steel: dataToNumber(techCost),
                    quartz: dataToNumber(techCost),
                    tritium: dataToNumber(techCost),
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
                TechCostUpgrade={planetTechCostUpgrade}
            />
            <DockyardTabPanel
                spendableResources={planetResources}
                shipsLevels={planetShipsLevels}
                shipsCost={planetShipsCost}
            />
            <DefenceTabPanel
                spendableResources={planetResources}
                defenceLevels={planetDefencesLevels}
                defenceCost={planetDefenceCost}
            />
            <EmptyTabPanel />
        </ResourcesTabs>
    );
};
