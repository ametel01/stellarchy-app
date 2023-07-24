import { StyledTabPanel } from "./styleds";
import { DefenceCost, DefenceLevels, Points } from "@/utils/types";
import DefencesBox from "@/components/Boxes/DefencesBox";
import { calculEnoughResources } from "@/utils";
import blasterImg from "@/assets/defences/blaster.png";
import beamImg from "@/assets/defences/beam.png";
import astralLauncherImg from "@/assets/defences/astral-launcher.png";
import plasmaImg from "@/assets/defences/plasma-projector.png";

interface Props {
    spendableResources?: Points;
    defenceLevels?: DefenceLevels;
    defenceCost?: DefenceCost;
}

export const DefenceTabPanel = ({
    spendableResources,
    defenceLevels,
    defenceCost,
    ...rest
}: Props) => {
    return (
        <StyledTabPanel {...rest}>
            <DefencesBox
                img={blasterImg}
                title="Blaster"
                functionCallName="blaster"
                level={defenceLevels?.blaster}
                costUpdate={defenceCost?.blaster}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(
                        defenceCost.blaster,
                        spendableResources
                    )
                }
            />
            <DefencesBox
                img={beamImg}
                title="Beam"
                functionCallName="beam"
                level={defenceLevels?.beam}
                costUpdate={defenceCost?.beam}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(defenceCost.beam, spendableResources)
                }
            />
            <DefencesBox
                img={astralLauncherImg}
                title="Astral Launchen"
                functionCallName="astralLauncher"
                level={defenceLevels?.astral}
                costUpdate={defenceCost?.astral}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(
                        defenceCost.astral,
                        spendableResources
                    )
                }
            />
            <DefencesBox
                img={plasmaImg}
                title="Plasma Projector"
                functionCallName="plasmaProjector"
                level={defenceLevels?.plasma}
                costUpdate={defenceCost?.plasma}
                hasEnoughResources={
                    spendableResources &&
                    defenceCost &&
                    calculEnoughResources(
                        defenceCost.plasma,
                        spendableResources
                    )
                }
            />
        </StyledTabPanel>
    );
};

DefenceTabPanel.tabsRole = "TabPanel";
