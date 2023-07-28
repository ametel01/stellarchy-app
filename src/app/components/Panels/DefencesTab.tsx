import { StyledTabPanel } from "./styleds";
import { DefenceCost, DefenceLevels, Points, TechLevels } from "@/utils/types";
import DefencesBox from "@/components/Boxes/DefencesBox";
import {
    calculEnoughResources,
    blasterRequirements,
    beamRequirements,
    astralRequirements,
    plasmaRequirements,
} from "@/utils";
import blasterImg from "@/assets/defences/blaster.png";
import beamImg from "@/assets/defences/beam.png";
import astralLauncherImg from "@/assets/defences/astral.png";
import plasmaImg from "@/assets/defences/plasma.png";

interface Props {
    spendableResources?: Points;
    defenceLevels: DefenceLevels;
    defenceCost: DefenceCost;
    dockyardLevel: number;
    techLevels: TechLevels;
}

export const DefenceTabPanel = ({
    spendableResources,
    defenceLevels,
    defenceCost,
    dockyardLevel,
    techLevels,
    ...rest
}: Props) => {
    return (
        <StyledTabPanel {...rest}>
            <DefencesBox
                img={blasterImg}
                title="Blaster"
                functionCallName="blaster"
                level={defenceLevels.blaster}
                costUpdate={defenceCost.blaster}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(
                        defenceCost.blaster,
                        spendableResources
                    )
                }
                requirementsMet={blasterRequirements(dockyardLevel)}
            />
            <DefencesBox
                img={beamImg}
                title="Beam"
                functionCallName="beam"
                level={defenceLevels.beam}
                costUpdate={defenceCost.beam}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(defenceCost.beam, spendableResources)
                }
                requirementsMet={beamRequirements(dockyardLevel, techLevels)}
            />
            <DefencesBox
                img={astralLauncherImg}
                title="Astral Launchen"
                functionCallName="astralLauncher"
                level={defenceLevels.astral}
                costUpdate={defenceCost.astral}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(
                        defenceCost.astral,
                        spendableResources
                    )
                }
                requirementsMet={astralRequirements(dockyardLevel, techLevels)}
            />
            <DefencesBox
                img={plasmaImg}
                title="Plasma Projector"
                functionCallName="plasmaProjector"
                level={defenceLevels.plasma}
                costUpdate={defenceCost.plasma}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(
                        defenceCost.plasma,
                        spendableResources
                    )
                }
                requirementsMet={plasmaRequirements(dockyardLevel, techLevels)}
            />
        </StyledTabPanel>
    );
};

DefenceTabPanel.tabsRole = "TabPanel";
