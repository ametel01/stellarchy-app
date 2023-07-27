import { StyledTabPanel } from "./styleds";
import steelImg from "@/assets/compounds/steel-mine.png";
import quartzImg from "@/assets/compounds/quartz-mine.png";
import tritiumImg from "@/assets/compounds/tritium-mine.png";
import energyImg from "@/assets/compounds/energy-plant.png";
import labImg from "@/assets/compounds/lab.png";
import dockyardImg from "@/assets/compounds/dockyard.png";
import { CompoundsCostUpgrade, CompoundsLevels, Points } from "@/utils/types";
import { calculEnoughResources } from "@/utils";
import CompoundsBox from "../Boxes/CompoundsBox";
import {
    DockyardDescription,
    EnergyMineDescription,
    LabDescription,
    QuartzMineDescription,
    SteelMineDescription,
    TritiumMineDescription,
} from "../Descriptions/CompoundsPopover";

interface Props {
    spendableResources?: Points;
    compoundsLevels?: CompoundsLevels;
    compoundsCostUpgrade?: CompoundsCostUpgrade;
}

export const CompoundsTabPanel = ({
    spendableResources,
    compoundsLevels,
    compoundsCostUpgrade,
    ...rest
}: Props) => {
    return (
        <StyledTabPanel {...rest}>
            <CompoundsBox
                description={SteelMineDescription()}
                img={steelImg}
                title="Steel Mine"
                functionCallName="steelMine"
                level={compoundsLevels?.steelMine}
                costUpdate={compoundsCostUpgrade?.steelMine}
                hasEnoughResources={
                    spendableResources &&
                    compoundsCostUpgrade &&
                    calculEnoughResources(
                        compoundsCostUpgrade.steelMine,
                        spendableResources
                    )
                }
            />
            <CompoundsBox
                description={QuartzMineDescription()}
                img={quartzImg}
                title="Quartz Mine"
                functionCallName="quartzMine"
                level={compoundsLevels?.quartzMine}
                costUpdate={compoundsCostUpgrade?.quartzMine}
                hasEnoughResources={
                    spendableResources &&
                    compoundsCostUpgrade &&
                    calculEnoughResources(
                        compoundsCostUpgrade.quartzMine,
                        spendableResources
                    )
                }
            />
            <CompoundsBox
                description={TritiumMineDescription()}
                img={tritiumImg}
                title="Tritium Mine"
                functionCallName="tritiumMine"
                level={compoundsLevels?.tritiumMine}
                costUpdate={compoundsCostUpgrade?.tritiumMine}
                hasEnoughResources={
                    spendableResources &&
                    compoundsCostUpgrade &&
                    calculEnoughResources(
                        compoundsCostUpgrade.tritiumMine,
                        spendableResources
                    )
                }
            />
            <CompoundsBox
                description={EnergyMineDescription()}
                img={energyImg}
                title="Energy Plant"
                functionCallName="energyPlant"
                level={compoundsLevels?.energyPlant}
                costUpdate={compoundsCostUpgrade?.energyPlant}
                hasEnoughResources={
                    spendableResources &&
                    compoundsCostUpgrade &&
                    calculEnoughResources(
                        compoundsCostUpgrade.energyPlant,
                        spendableResources
                    )
                }
            />
            <CompoundsBox
                description={LabDescription()}
                img={labImg}
                title="Research Lab"
                functionCallName="lab"
                level={compoundsLevels?.lab}
                costUpdate={compoundsCostUpgrade?.lab}
                hasEnoughResources={
                    spendableResources &&
                    compoundsCostUpgrade &&
                    calculEnoughResources(
                        compoundsCostUpgrade.lab,
                        spendableResources
                    )
                }
            />
            <CompoundsBox
                description={DockyardDescription()}
                img={dockyardImg}
                title="Dockyard"
                functionCallName="dockyard"
                level={compoundsLevels?.dockyard}
                costUpdate={compoundsCostUpgrade?.dockyard}
                hasEnoughResources={
                    spendableResources &&
                    compoundsCostUpgrade &&
                    calculEnoughResources(
                        compoundsCostUpgrade.dockyard,
                        spendableResources
                    )
                }
            />
        </StyledTabPanel>
    );
};

CompoundsTabPanel.tabsRole = "TabPanel";
