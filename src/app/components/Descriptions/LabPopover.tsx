/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import armourImg from "@/assets/techs/armour.png";
import combustionImg from "@/assets/techs/combustion.png";
import computerImg from "@/assets/techs/computer.png";
import energyImg from "@/assets/techs/energy.png";
import ionImg from "@/assets/techs/ion.png";
import laserImg from "@/assets/techs/laser.png";
import plasmaImg from "@/assets/techs/plasma.png";
import shieldImg from "@/assets/techs/shield.png";
import spacetimeImg from "@/assets/techs/spacetime.png";
import thrustImg from "@/assets/techs/thrust.png";
import warpImg from "@/assets/techs/warp.png";
import weaponsImg from "@/assets/techs/weapons.png";

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

export function ArmourDescription() {
    return (
        <>
            <Container>
                <FloatImage src={armourImg.src} />
                <TextBox>
                    Armour Innovation is a critical component in the development
                    of an expansive empire. The process of upgrading this
                    technology results in a 10% increase to the base durability
                    of fleet and defence hull plating, underscoring its
                    significance in the research priorities. Given the high
                    availability of metal - the universe's most plentiful
                    resource - ample reserves can be conveniently accrued to
                    sustain the continued advancement of this technology to
                    superior levels. It is worth noting that Armour Innovation
                    is unique in its exclusive requirement of metal for
                    research. As such, surplus metal resources can be
                    strategically allocated for the express purpose of
                    facilitating further research in this domain.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 2</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function CombustionDescription() {
    return (
        <>
            <Container>
                <FloatImage src={combustionImg.src} />
                <TextBox>
                    The Combustion Drive is a technological advancement that
                    enables the fabrication of various spacecraft types
                    including Carrier vessels, Sparrow, and Scraper. This
                    technology enhances the Base Speed of all spacecraft
                    utilizing the Combustion Drive by a factor of 10% per level
                    of Combustion Drive technology advancement. Furthermore, in
                    situations where a fleet's overall velocity is reduced due
                    to the inclusion of slower spacecraft of a different type,
                    the ships not operating at their standard speed will benefit
                    from increased fuel efficiency. This enhancement is a result
                    of the improved drive technologies' effect on fuel
                    consumption. Upon reaching level 5 in the Impulse Drive
                    technology, a fundamental change occurs in the operation of
                    Small Cargo ships. Their base speed doubles and they
                    transition to utilizing the Thrust Propulsion instead of the
                    Combustion Drive when determining speed and fuel efficiency
                    parameters. This shift in drive technology occurs
                    automatically post-upgrade.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 1</li>
                        <li>Energy Innovation Level 1</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function ComputerDescription() {
    return (
        <>
            <Container>
                <FloatImage src={computerImg.src} />
                <TextBox>
                    Digital systems, in essence, is a discipline focused on the
                    enhancement of existing computational capabilities. This
                    involves the development of progressively more powerful and
                    efficient computational systems. The key parameters of these
                    improvements are the increased processing power, which
                    allows for more complex and faster calculations, and
                    enhanced system speed, facilitating accelerated execution of
                    computational tasks. With every incremental improvement in
                    digital systems, there is a corresponding increase in the
                    maximum number of controllable fleets. Specifically, each
                    level of technological advancement raises the fleet limit by
                    one. This increased fleet capacity has direct implications
                    on operational efficiency. A higher number of fleets permits
                    simultaneous command over a greater number of units, which,
                    in turn, allows for escalated raiding activities and
                    resource acquisition. Hence, advancements in digital systems
                    directly contribute to the maximization of resource capture
                    through increased raiding capacity. The number of fleet
                    slots available is the level of digital systems + 1
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 1</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function EnergyDescription() {
    return (
        <>
            <Container>
                <FloatImage src={energyImg.src} />
                <TextBox>
                    Energy Innovation is a critical research area that focuses
                    on improving energy distribution methodologies. This
                    research is a prerequisite for the development and
                    implementation of other technologies, defensive
                    infrastructures, and certain types of buildings. As
                    different research sectors made significant advancements, it
                    became apparent that the existing technology for energy
                    distribution was inadequate for initiating specific
                    specialized research projects. Consequently, the need for
                    improvement in this area was identified. Each successive
                    upgrade in Energy Innovation allows for the exploration of
                    new research possibilities. These explorations, in turn,
                    facilitate the development of increasingly advanced ships
                    and defensive mechanisms. Thus, the progression of Energy
                    Innovation is directly linked to the sophistication of an
                    entity's technological capabilities and defensive
                    structures.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 1</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function BeamDescription() {
    return (
        <>
            <Container>
                <FloatImage src={laserImg.src} />
                <TextBox>
                    Beam Technology, a critical component of scientific
                    investigation, facilitates the development of laser-based
                    weapon systems, which are commonly integrated into defensive
                    structures and various classes of vessels. This technology
                    is an essential prerequisite for the progression into ion
                    and plasma-based weaponry systems. The utility of Beam
                    Technology research exhibits a saturation point at Level 12,
                    beyond which no further enhancements to defensive
                    capabilities are observed. However, continuation of research
                    beyond this level can contribute to the accumulation of
                    research points, thereby improving the research ranking, but
                    with no corresponding increase in defensive benefits.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 1</li>
                        <li>Energy Innovation Level 2</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function IonDescription() {
    return (
        <>
            <Container>
                <FloatImage src={ionImg.src} />
                <TextBox>
                    Ion Systems represent a technological domain that pertains
                    to the investigation of ion concentration processes. The
                    fundamental principle revolves around the formation of a
                    concentrated ion beam, which, when appropriately harnessed,
                    can deliver significant destructive potential. The research
                    into these ion concentration methods, specifically for the
                    development of weapon systems, contributes to the
                    advancement of any empire. This progression involves the
                    unlocking of multiple elements, including a defensive turret
                    system, additional research opportunities, and an extra ship
                    class. Upon successful completion and integration of Ion
                    Systems, the subsequent advancements that become available
                    include the deployment of Frigate-class vessels and the
                    initiation of Plasma Engineering research.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 4</li>
                        <li>Beam Technology Level 5</li>
                        <li>Energy Innovation Level 4</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function PlasmaDescription() {
    return (
        <>
            <Container>
                <FloatImage src={plasmaImg.src} />
                <TextBox>
                    An advanced evolution of ion technology has been achieved,
                    which facilitates the acceleration not of ions, but rather
                    of high-energy plasma. Upon collision with a target, this
                    plasma is capable of causing substantial structural damage.
                    Additionally, through this technological progression, our
                    research team has discerned a methodology to significantly
                    enhance the extraction process of steel and quartz
                    materials.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 4</li>
                        <li>Beam Technology Level 10</li>
                        <li>Energy Innovation Level 8</li>
                        <li>Ion Systems Level 8</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function ShieldDescription() {
    return (
        <>
            <Container>
                <FloatImage src={shieldImg.src} />
                <TextBox>
                    The field of shielding technology encompasses the
                    investigation of innovative methods for energy provision to
                    increase shield efficiency and robustness. Advancements in
                    this domain increment shield efficiency by a factor
                    equivalent to 10% of the intrinsic baseline value for each
                    subsequent level of development.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 6</li>
                        <li>Energy Innovation Level 3</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function SpacetimeDescription() {
    return (
        <>
            <Container>
                <FloatImage src={spacetimeImg.src} />
                <TextBox>
                    Hypothetically, the principle of hyperspatial navigation
                    depends on the conjecture of a concurrent and coexisting
                    plane of reality. Upon initiation of the hyperspatial
                    propulsion system, the interstellar vehicle is displaced
                    into this alternative dimensional plane, facilitating the
                    traversal of extended spatial intervals in a time fraction
                    substantially diminished in comparison to the duration
                    required within the conventional spacetime. When the
                    spacecraft attains the designated coordinate within the
                    hyperspatial realm that is in correspondence with its
                    predestined location within the regular spatial domain, it
                    re-materializes. Upon reaching an adequate level of
                    knowledge and advancement within the field of Spacetime Warp
                    Technology, the feasibility of the Hyperspatial Propulsion
                    system transcends theoretical limits.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 7</li>
                        <li>Energy Innovation Level 5</li>
                        <li>Shield Technology Level 5</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function ThrustDescription() {
    return (
        <>
            <Container>
                <FloatImage src={thrustImg.src} />
                <TextBox>
                    Thrust Propulsion technology, a sophisticated system
                    integral to spacecraft manufacturing, is crucial for the
                    successful assembly of specific classes of vessels, namely
                    Sparrows and Frigates. This innovative technology is
                    designed to considerably enhance the performance of the
                    spacecraft it is incorporated into. In quantitative terms,
                    the application of Thrust Propulsion technology generates an
                    increment in the Base Speed of all spacecraft that are
                    equipped with it. More specifically, for each level of
                    advancement in the Thrust Propulsion technology, the Base
                    Speed is boosted by a substantial percentage - 20%
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 2</li>
                        <li>Energy Innovation Level 1</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function WarpDescription() {
    return (
        <>
            <Container>
                <FloatImage src={warpImg.src} />
                <TextBox>
                    The Warp Drive represents an innovative technology that
                    significantly contributes to the engineering and assembly of
                    Armades structures. This technology plays a pivotal role in
                    the construction process by providing essential technical
                    requirements that are unattainable through conventional
                    means. On another note, an additional functionality
                    attributed to the deployment of the Warp Drive technology
                    concerns its remarkable impact on the propulsion systems of
                    various vessels. Ships that are equipped with this advanced
                    technology benefit from an increased Base Speed.
                    Specifically, for each level of proficiency achieved in the
                    Warp Drive technology, an elevation of the Base Speed by an
                    increment of 30% is observed. This is a cumulative effect,
                    and therefore, the speed enhancement increases
                    proportionately with each subsequent level of technology
                    upgrade. The result is a significant boost in the efficiency
                    and rapidity of ship movement, thus enhancing the
                    operational capacity of such vessels in their respective
                    contexts.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 7</li>
                        <li>Energy Innovation Level 5</li>
                        <li>Shield Tech 5</li>
                        <li>Spacetime Warp Level 3</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}

export function WeaponsDescription() {
    return (
        <>
            <Container>
                <FloatImage src={weaponsImg.src} />
                <TextBox>
                    In the realm of combat readiness, advancements in weapons
                    development is of critical importance as they bolster the
                    potency of both naval vessels and defensive fortifications.
                    This enhancement in armament capabilities is quantifiable,
                    marked by a direct and measurable increase in the offensive
                    and defensive strengths of these systems. Specifically, for
                    every level of progression in weapons development, there is
                    a commensurate increase in the performance metrics of naval
                    units and defensive systems. This enhancement corresponds to
                    a 10% increment over the base value. The base value is
                    representative of the initial or inherent strength of the
                    systems prior to the integration of the advanced technology.
                    <br />
                    <br />
                    Requirements:
                    <ul>
                        <li>Research Lab Level 4</li>
                    </ul>
                </TextBox>
            </Container>
        </>
    );
}
