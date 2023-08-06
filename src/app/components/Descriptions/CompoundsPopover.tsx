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
                    Large-scale solar arrays power mining and deuterium
                    synthesis, expanding in surface area with each upgrade. This
                    growth directly boosts energy output, resulting in a
                    proportional increase in planetary electrical grid
                    distribution, thereby enhancing the overall energy supply
                    for the planet's operational demands.
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
                    Research Labs are vital to an empire, generating and
                    refining technological assets. They explore new technologies
                    and enhance existing ones. Upgrades to these facilities
                    increase research capabilities, providing access to advanced
                    innovations. Quick research is achieved by deploying
                    scientific personnel to colonies when a Research Lab level
                    is completed. This ensures prompt research and development,
                    and aids in the swift integration of new technologies across
                    the empire.
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
                    The planetary dockyard manufactures space assets like
                    various spacecraft and defensive systems, including
                    exploratory vessels, cargo carriers, and military ships.
                    This involves design, procurement, assembly, integration,
                    and testing. Additionally, the dockyard develops defenses
                    such as anti-spacecraft weapons and shield generators,
                    following a similar production process. Managed by experts
                    for efficiency and safety, the dockyard is essential for the
                    civilization's space and defense capabilities.
                </TextBox>
            </Container>
        </>
    );
}
