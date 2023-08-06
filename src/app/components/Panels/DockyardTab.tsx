import { StyledTabPanel } from "./styleds";
import {
    calculEnoughResources,
    carrierRequirements,
    celestiaRequirements,
    scraperRequirements,
    sparrowRequirements,
    frigateRequirements,
    armadeRequirements,
} from "@/utils";
import {
    CarrierDescription,
    CelestiaDescription,
    ScraperDescription,
    SparrowDescription,
    FrigateDescription,
    ArmadeDescription,
} from "../Descriptions/DockyardPopover";
import { ShipsCost, Points, ShipsLevels, TechLevels } from "@/utils/types";
import DockyardBox from "../Boxes/DockyardBox";
import armadeImg from "@/assets/ships/armade.png";
import frigateImg from "@/assets/ships/frigate.png";
import carrierImg from "@/assets/ships/carrier.png";
import sparrowImg from "@/assets/ships/sparrow.png";
import scraperImg from "@/assets/ships/scraper.png";
import celestiaImg from "@/assets/ships/celestia.png";

interface Props {
    spendableResources?: Points;
    shipsLevels?: ShipsLevels;
    shipsCost?: ShipsCost;
    dockyardLevel?: number;
    techLevels?: TechLevels;
}

export const DockyardTabPanel = ({
    spendableResources,
    shipsLevels,
    shipsCost,
    dockyardLevel,
    techLevels,
    ...rest
}: Props) => {
    return (
        <StyledTabPanel {...rest}>
            <DockyardBox
                description={CarrierDescription()}
                img={carrierImg}
                title="Carrier"
                functionCallName="carrier"
                level={shipsLevels?.carrier}
                costUpdate={shipsCost?.carrier}
                hasEnoughResources={
                    spendableResources &&
                    shipsCost &&
                    calculEnoughResources(shipsCost.carrier, spendableResources)
                }
                requirementsMet={carrierRequirements(dockyardLevel, techLevels)}
            />
            <DockyardBox
                description={CelestiaDescription()}
                img={celestiaImg}
                title="Celestia"
                functionCallName="celestia"
                level={shipsLevels?.celestia}
                costUpdate={shipsCost?.celestia}
                hasEnoughResources={
                    spendableResources &&
                    shipsCost &&
                    calculEnoughResources(
                        shipsCost.celestia,
                        spendableResources
                    )
                }
                requirementsMet={celestiaRequirements(
                    dockyardLevel,
                    techLevels
                )}
            />
            <DockyardBox
                description={ScraperDescription()}
                img={scraperImg}
                title="Scraper"
                functionCallName="scraper"
                level={shipsLevels?.scraper}
                costUpdate={shipsCost?.scraper}
                hasEnoughResources={
                    spendableResources &&
                    shipsCost &&
                    calculEnoughResources(shipsCost.scraper, spendableResources)
                }
                requirementsMet={scraperRequirements(dockyardLevel, techLevels)}
            />
            <DockyardBox
                description={SparrowDescription()}
                img={sparrowImg}
                title="Sparrow"
                functionCallName="sparrow"
                level={shipsLevels?.sparrow}
                costUpdate={shipsCost?.sparrow}
                hasEnoughResources={
                    spendableResources &&
                    shipsCost &&
                    calculEnoughResources(shipsCost.sparrow, spendableResources)
                }
                requirementsMet={sparrowRequirements(dockyardLevel)}
            />
            <DockyardBox
                description={FrigateDescription()}
                img={frigateImg}
                title="Frigate"
                functionCallName="frigate"
                level={shipsLevels?.frigate}
                costUpdate={shipsCost?.frigate}
                hasEnoughResources={
                    spendableResources &&
                    shipsCost &&
                    calculEnoughResources(shipsCost.frigate, spendableResources)
                }
                requirementsMet={frigateRequirements(dockyardLevel, techLevels)}
            />
            <DockyardBox
                description={ArmadeDescription()}
                img={armadeImg}
                title="Armade"
                functionCallName="armade"
                level={shipsLevels?.armade}
                costUpdate={shipsCost?.armade}
                hasEnoughResources={
                    spendableResources &&
                    shipsCost &&
                    calculEnoughResources(shipsCost.armade, spendableResources)
                }
                requirementsMet={armadeRequirements(dockyardLevel, techLevels)}
            />
        </StyledTabPanel>
    );
};

DockyardTabPanel.tabsRole = "TabPanel";
