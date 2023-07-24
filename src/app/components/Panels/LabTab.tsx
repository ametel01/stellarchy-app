import { StyledTabPanel } from "./styleds";
import { useState } from "react";
import { TechCost, Points, TechLevels } from "@/utils/types";
import ResearchBox from "../Boxes/ResearchBox";
import { calculEnoughResources } from "@/utils";
import armourImg from "@/assets/techs/armour-tech.png";
import beamImg from "@/assets/techs/beam-tech.png";
import ionImg from "@/assets/techs/ion-tech.png";
import plasmaImg from "@/assets/techs/plasma-tech.png";
import spacetimeImg from "@/assets/techs/spacetime-tech.png";
import warpEnginImg from "@/assets/techs/warp-engine.png";
import combustionImg from "@/assets/techs/combust-engine.png";
import thrustImg from "@/assets/techs/thrust-engine.png";
import weaponsImg from "@/assets/techs/weapons-tech.png";
import computerImg from "@/assets/techs/digi-sys.png";
import shieldImg from "@/assets/techs/shield-tech.png";

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
                img={plasmaImg}
                title="Plasma Engineering"
                functionCallName="plasmaEngineering"
                level={techLevels?.plasma}
                costUpdate={TechCostUpgrade?.plasma}
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
                img={combustionImg}
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
                title="SpacetimeWarp"
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
