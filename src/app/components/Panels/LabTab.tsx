import { StyledTabPanel } from "./styleds";
import { useState } from "react";
import { TechCost, Points, TechLevels } from "@/utils/types";
import ResearchBox from "../Boxes/ResearchBox";
import {
    armourRequirements,
    beamTechRequirements,
    calculEnoughResources,
    combustionRequirements,
    digitalRequirements,
    energyRequirements,
    ionRequirements,
    plasmaTechRequirements,
    shieldRequirements,
    warpRequirements,
    weaponsRequirements,
} from "@/utils";
import armourImg from "@/assets/techs/armour.png";
import beamImg from "@/assets/techs/laser.png";
import ionImg from "@/assets/techs/ion.png";
import plasmaImg from "@/assets/techs/plasma.png";
import spacetimeImg from "@/assets/techs/spacetime.png";
import warpEnginImg from "@/assets/techs/warp.png";
import combustionImg from "@/assets/techs/combustion.png";
import thrustImg from "@/assets/techs/thrust.png";
import weaponsImg from "@/assets/techs/weapons.png";
import computerImg from "@/assets/techs/computer.png";
import shieldImg from "@/assets/techs/shield.png";
import energyImg from "@/assets/techs/energy.png";

interface Props {
    spendableResources?: Points;
    techLevels?: TechLevels;
    techCostUpgrade?: TechCost;
    labLevel?: number;
}

export const ResearchTabPanel = ({
    spendableResources,
    techLevels,
    techCostUpgrade,
    labLevel,
    ...rest
}: Props) => {
    return (
        <StyledTabPanel {...rest}>
            <ResearchBox
                img={energyImg}
                title="Energy Innovation"
                functionCallName="energyInnovation"
                level={techLevels?.energy}
                costUpdate={techCostUpgrade?.energy}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.energy,
                        spendableResources
                    )
                }
                requirementsMet={energyRequirements(labLevel)}
            />
            <ResearchBox
                img={computerImg}
                title="Digital Systems"
                functionCallName="digitalSystems"
                level={techLevels?.ion}
                costUpdate={techCostUpgrade?.ion}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.ion,
                        spendableResources
                    )
                }
                requirementsMet={digitalRequirements(labLevel)}
            />
            <ResearchBox
                img={beamImg}
                title="Beam Technology"
                functionCallName="beamTechnology"
                level={techLevels?.beam}
                costUpdate={techCostUpgrade?.beam}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.beam,
                        spendableResources
                    )
                }
                requirementsMet={beamTechRequirements(labLevel, techLevels)}
            />
            <ResearchBox
                img={ionImg}
                title="Ion Systems"
                functionCallName="ionSystems"
                level={techLevels?.ion}
                costUpdate={techCostUpgrade?.ion}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.ion,
                        spendableResources
                    )
                }
                requirementsMet={ionRequirements(labLevel, techLevels)}
            />
            <ResearchBox
                img={plasmaImg}
                title="Plasma Engineering"
                functionCallName="plasmaEngineering"
                level={techLevels?.plasma}
                costUpdate={techCostUpgrade?.plasma}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.plasma,
                        spendableResources
                    )
                }
                requirementsMet={plasmaTechRequirements(labLevel, techLevels)}
            />
            <ResearchBox
                img={spacetimeImg}
                title="Spacetime Warp"
                functionCallName="spacetimeWarp"
                level={techLevels?.spacetime}
                costUpdate={techCostUpgrade?.spacetime}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.spacetime,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={combustionImg}
                title="Combustion Drive"
                functionCallName="combustionDrive"
                level={techLevels?.combustion}
                costUpdate={techCostUpgrade?.combustion}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.combustion,
                        spendableResources
                    )
                }
                requirementsMet={combustionRequirements(labLevel, techLevels)}
            />
            <ResearchBox
                img={thrustImg}
                title="Thrust Propulsion"
                functionCallName="thrustPropulsion"
                level={techLevels?.thrust}
                costUpdate={techCostUpgrade?.thrust}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.thrust,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={warpEnginImg}
                title="Warp Drive"
                functionCallName="warpDrive"
                level={techLevels?.warp}
                costUpdate={techCostUpgrade?.warp}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.warp,
                        spendableResources
                    )
                }
                requirementsMet={warpRequirements(labLevel, techLevels)}
            />
            <ResearchBox
                img={armourImg}
                title="Armour Innovation"
                functionCallName="armourInnovation"
                level={techLevels?.armour}
                costUpdate={techCostUpgrade?.armour}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.armour,
                        spendableResources
                    )
                }
                requirementsMet={armourRequirements(labLevel)}
            />
            <ResearchBox
                img={weaponsImg}
                title="Weapons Development"
                functionCallName="weaponsDevelopment"
                level={techLevels?.weapons}
                costUpdate={techCostUpgrade?.weapons}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.weapons,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={shieldImg}
                title="Shields Technology"
                functionCallName="shieldTech"
                level={techLevels?.shielding}
                costUpdate={techCostUpgrade?.shielding}
                hasEnoughResources={
                    spendableResources &&
                    techCostUpgrade &&
                    calculEnoughResources(
                        techCostUpgrade.weapons,
                        spendableResources
                    )
                }
                requirementsMet={shieldRequirements(labLevel, techLevels)}
            />
        </StyledTabPanel>
    );
};

ResearchTabPanel.tabsRole = "TabPanel";
