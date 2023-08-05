import styled from "styled-components";

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

// const FloatImage = styled.img`
//     float: left; /* Change to 'right' to float the image to the right */
//     margin: 10px;
//     width: 200px; /* Adjust as needed */
//     height: 200px; /* Adjust as needed */
// `;

export function SteelMineDescription() {
    return (
        <>
            <Container>
                {/* <FloatImage src={steelImg.src} /> */}
                <TextBox>
                    Steel is a crucial resource for building and maintaining
                    your Empire in the game. Its production increases with the
                    depth of mining, driving applications like constructing
                    structures, spacecraft, defenses, and conducting research.
                    Note, however, that deeper mining requires more energy.
                    Steel is common and holds the lowest trade value compared to
                    other resources due to its abundance.
                </TextBox>
            </Container>
        </>
    );
}

export function QuartzMineDescription() {
    return (
        <>
            <Container>
                <TextBox>
                    Quartz mines extract Quartz, a key resource used in
                    electronic circuit creation and specific alloy formation.
                    Quartz mining consumes around 1.5 times more energy than
                    steel mining, making it more valuable. It's heavily used in
                    ship and building construction. The particular type of
                    Quartz needed for spaceship building is rarer and typically
                    found deeper, mirroring steel's depth-specific availability.
                    Hence, deeper mines yield more Quartz, especially types
                    vital for advanced uses like spaceship construction.
                </TextBox>
            </Container>
        </>
    );
}

export function TritiumMineDescription() {
    return (
        <>
            <Container>
                <TextBox>
                    Tritium, a stable hydrogen isotope, is naturally found in
                    oceanic colonies, with approximately one Tritium atom per
                    6500 hydrogen atoms. This equals roughly 0.015% of all water
                    atoms or 0.030% on a weight basis. Tritium extraction and
                    processing are conducted by specialized synthesizers using
                    engineered centrifuges to separate Tritium from water.
                    Upgrades to these machines can enhance Tritium processing
                    capacity. Tritium's uses are broad. It powers sensor phalanx
                    scans, visualizes galaxies, fuels spacecraft, and
                    facilitates specific research upgrades.
                </TextBox>
            </Container>
        </>
    );
}

export function EnergyMineDescription() {
    return (
        <>
            <Container>
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
