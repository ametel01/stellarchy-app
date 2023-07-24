import { StyledTabPanel } from "./styleds";
import { useState } from "react";
import { ShipsCost, Points, ShipsLevels } from "@/utils/types";
import DockyardBox from "../Boxes/DockyardBox";
import { calculEnoughResources } from "@/utils";
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
}

export const DockyardTabPanel = ({
    spendableResources,
    shipsLevels,
    shipsCost,
    ...rest
}: Props) => {
    return (
        <StyledTabPanel {...rest}>
            <DockyardBox
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
            />
            <DockyardBox
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
            />
            <DockyardBox
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
            />
            <DockyardBox
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
            />
            <DockyardBox
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
            />
            <DockyardBox
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
            />
        </StyledTabPanel>
    );
};

DockyardTabPanel.tabsRole = "TabPanel";
