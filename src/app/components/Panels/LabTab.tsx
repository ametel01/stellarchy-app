import { StyledTabPanel } from "./styleds";
import { useState } from "react";
import { TechCost, Points, TechLevels } from "@/utils/types";
import ResearchBox from "../Boxes/ResearchBox";
import { calculEnoughResources } from "@/utils";
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
    TechCostUpgrade?: TechCost;
}

export const ResearchTabPanel = ({
    spendableResources,
    techLevels,
    TechCostUpgrade,
    ...rest
}: Props) => {
    return (
        <StyledTabPanel {...rest}>
            <ResearchBox
                img={energyImg}
                title="Energy Innovation"
                functionCallName="energyInnovation"
                level={techLevels?.energy}
                costUpdate={TechCostUpgrade?.energy}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.energy,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={computerImg}
                title="Digital Systems"
                functionCallName="digitalSystems"
                level={techLevels?.ion}
                costUpdate={TechCostUpgrade?.ion}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.ion,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={beamImg}
                title="Beam Technology"
                functionCallName="beamTechnology"
                level={techLevels?.beam}
                costUpdate={TechCostUpgrade?.beam}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.beam,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={ionImg}
                title="Ion Systems"
                functionCallName="ionSystems"
                level={techLevels?.ion}
                costUpdate={TechCostUpgrade?.ion}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.ion,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={plasmaImg}
                title="Plasma Engineering"
                functionCallName="plasmaEngineering"
                level={techLevels?.plasma}
                costUpdate={TechCostUpgrade?.plasma}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.plasma,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={spacetimeImg}
                title="Spacetime Warp"
                functionCallName="spacetimeWarp"
                level={techLevels?.spacetime}
                costUpdate={TechCostUpgrade?.spacetime}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.spacetime,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={combustionImg}
                title="Combustion Drive"
                functionCallName="combustionDrive"
                level={techLevels?.combustion}
                costUpdate={TechCostUpgrade?.combustion}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.combustion,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={thrustImg}
                title="Thrust Propulsion"
                functionCallName="thrustPropulsion"
                level={techLevels?.thrust}
                costUpdate={TechCostUpgrade?.thrust}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.thrust,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={warpEnginImg}
                title="Warp Drive"
                functionCallName="warpDrive"
                level={techLevels?.warp}
                costUpdate={TechCostUpgrade?.warp}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.warp,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={armourImg}
                title="Armour Innovation"
                functionCallName="armourInnovation"
                level={techLevels?.armour}
                costUpdate={TechCostUpgrade?.armour}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.armour,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={weaponsImg}
                title="Weapons Development"
                functionCallName="weaponsDevelopment"
                level={techLevels?.weapons}
                costUpdate={TechCostUpgrade?.weapons}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.weapons,
                        spendableResources
                    )
                }
            />
            <ResearchBox
                img={shieldImg}
                title="Shields Technology"
                functionCallName="shieldTech"
                level={techLevels?.shielding}
                costUpdate={TechCostUpgrade?.shielding}
                hasEnoughResources={
                    spendableResources &&
                    TechCostUpgrade &&
                    calculEnoughResources(
                        TechCostUpgrade.weapons,
                        spendableResources
                    )
                }
            />
        </StyledTabPanel>
    );
};

ResearchTabPanel.tabsRole = "TabPanel";
