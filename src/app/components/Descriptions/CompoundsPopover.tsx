/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import steelImg from "@/assets/compounds/steel-mine.png";
import quartzImg from "@/assets/compounds/quartz-mine.png";
import tritiumImg from "@/assets/compounds/tritium-mine.png";
import energyImg from "@/assets/compounds/energy-plant.png";
import labImg from "@/assets/compounds/lab.png";
import dockyardImg from "@/assets/compounds/dockyard.png";

const Container = styled.div`
    width: 100%;
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const TextBox = styled.p`
    font-size: 15px;
    // padding-left: 5px;
`;

const FloatImage = styled.img`
    float: left; /* Change to 'right' to float the image to the right */
    margin: 10px;
    width: 200px; /* Adjust as needed */
    height: 200px; /* Adjust as needed */
`;

export function SteelMineDescription() {
    return (
        <>
            <Container>
                <FloatImage src={steelImg.src} />
                <TextBox>
                    Steel serves as the principal resource instrumental in the
                    establishment and maintenance of your Empire. It is observed
                    that the production potential of steel increases with the
                    depth of the mining operations. This steel resource can be
                    allocated for various applications including, but not
                    limited to, the fabrication of structures, spacecraft,
                    defensive mechanisms, and for the purpose of research
                    activities. It should be noted that the depth of mining is
                    directly proportional to the energy expenditure required for
                    optimal steel production. Given its abundant nature, steel
                    is considered a common resource. Consequently, in the
                    context of resource exchange or trade, it commands the
                    lowest value compared to other available resources.
                </TextBox>
            </Container>
        </>
    );
}

export function QuartzMineDescription() {
    return (
        <>
            <Container>
                <FloatImage src={quartzImg.src} />
                <TextBox>
                    Quartz mines primarily facilitate the extraction of a key
                    resource integral to the fabrication of electronic circuits
                    and the constitution of specific alloy compounds. The energy
                    expenditure associated with quartz mining is approximately
                    1.5 times that of steel mining, which consequently elevates
                    the value of the former. A significant proportion of ship
                    and building construction necessitates the use of quartz.
                    Nonetheless, the specific type of quartz required for
                    spaceship manufacturing is relatively scarce and shares a
                    similarity with steel in terms of its depth-specific
                    availability. Thus, the establishment of mines in more
                    profound geological strata is expected to augment the yield
                    of quartz, particularly the varieties critical for advanced
                    applications such as spaceship construction.
                </TextBox>
            </Container>
        </>
    );
}

export function TritiumMineDescription() {
    return (
        <>
            <Container>
                <FloatImage src={tritiumImg.src} />
                <TextBox>
                    Tritium is a stable hydrogen isotope with a natural
                    prevalence in the oceans of established colonies at an
                    approximate ratio of one Tritium atom per 6500 hydrogen
                    atoms, equating to roughly 154 parts per million (PPM).
                    Consequently, Tritium constitutes approximately 0.015% of
                    all water by number of atoms, or 0.030% on a weight basis.
                    The extraction and processing of Tritium are performed by
                    specific synthesis apparatuses, which employ specially
                    engineered centrifuges to separate Tritium from water.
                    Upgrades to these synthesizers can increase the volume of
                    Tritium deposits processed. The applications of Tritium are
                    multifaceted. It is utilized in the operation of sensor
                    phalanx scans, for visualizing galaxies, as a fuel source
                    for spacecraft, and for executing specific research
                    upgrades.
                </TextBox>
            </Container>
        </>
    );
}

export function EnergyMineDescription() {
    return (
        <>
            <Container>
                <FloatImage src={energyImg.src} />
                <TextBox>
                    Large-scale photovoltaic systems, commonly referred to as
                    solar arrays, function as the primary power source for both
                    the mining operations and the deuterium synthesis process.
                    With each subsequent upgrade to the solar power facility,
                    the total surface area encompassed by the photovoltaic cells
                    expands. This increase in photovoltaic surface area directly
                    correlates to an elevated energy output. Consequently, the
                    energy distribution across the electrical grids of the
                    planet experiences a proportionate amplification, thereby
                    enhancing the overall energy supply to support the various
                    operational demands on the planet.
                </TextBox>
            </Container>
        </>
    );
}

export function LabDescription() {
    return (
        <>
            <Container>
                <TextBox>
                    <FloatImage src={labImg.src} />
                    Research Labs serve as critical infrastructure within an
                    empire, designated for the generation and refinement of
                    technological assets. Their function is twofold: they
                    facilitate the exploration of novel technologies and enable
                    the enhancement of existing ones. Construction upgrades to
                    these facilities correspond to increased research
                    capabilities, thus providing access to higher levels of
                    technological innovations. Rapid research execution is
                    achieved through immediate deployment of scientific
                    personnel to the colonies upon completion of each Research
                    Lab level. This method of operation ensures the prompt
                    commencement of research activities and development
                    processes. Moreover, it promotes the efficient distribution
                    of technological knowledge across the empire, aiding in the
                    seamless integration of new technologies into existing
                    systems and processes.
                </TextBox>
            </Container>
        </>
    );
}

export function DockyardDescription() {
    return (
        <>
            <Container>
                <FloatImage src={dockyardImg.src} />
                <TextBox>
                    The planetary dockyard is a specialized facility dedicated
                    to the manufacturing of space assets, including various
                    types of spacecraft and defensive systems. Spacecraft
                    production involves a series of tasks: design, material
                    procurement, assembly, systems integration, and quality
                    testing. The range of spacecraft includes exploratory
                    vessels, cargo carriers, and military ships. The dockyard
                    also develops defensive mechanisms, such as anti-spacecraft
                    weapons, shield generators, and orbital platforms equipped
                    with kinetic and directed-energy weaponry. These systems
                    undergo a similar rigorous production process. Staffed by
                    expert personnel and managed for efficiency and safety, the
                    dockyard plays a crucial role in maintaining and advancing
                    the civilization's space-faring and defensive capabilities.
                </TextBox>
            </Container>
        </>
    );
}
