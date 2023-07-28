export interface CompoundsCostUpgrade {
    steelMine: {
        steel: number;
        quartz: number;
        tritium: number;
        energy: number;
    };
    quartzMine: {
        steel: number;
        quartz: number;
        tritium: number;
        energy: number;
    };
    tritiumMine: {
        steel: number;
        quartz: number;
        tritium: number;
        energy: number;
    };
    energyPlant: {
        steel: number;
        quartz: number;
        tritium: number;
        energy: number;
    };
    dockyard: {
        steel: number;
        quartz: number;
        tritium: number;
        energy: number;
    };
    lab: { steel: number; quartz: number; tritium: number; energy: number };
}

export interface CompoundsLevels {
    steelMine: number;
    quartzMine: number;
    tritiumMine: number;
    energyPlant: number;
    dockyard: number;
    lab: number;
}

export interface ShipsCost {
    carrier: { steel: number; quartz: number; tritium: number };
    scraper: { steel: number; quartz: number; tritium: number };
    celestia: { steel: number; quartz: number; tritium: number };
    sparrow: { steel: number; quartz: number; tritium: number };
    frigate: { steel: number; quartz: number; tritium: number };
    armade: { steel: number; quartz: number; tritium: number };
}

export interface ShipsLevels {
    carrier: number;
    scraper: number;
    celestia: number;
    sparrow: number;
    frigate: number;
    armade: number;
}

export interface DefenceCost {
    blaster: { steel: number; quartz: number; tritium: number };
    beam: { steel: number; quartz: number; tritium: number };
    astral: { steel: number; quartz: number; tritium: number };
    plasma: { steel: number; quartz: number; tritium: number };
}

export interface DefenceLevels {
    blaster: number;
    beam: number;
    astral: number;
    plasma: number;
}

export interface TechCost {
    armour: { steel: number; quartz: number; tritium: number };
    combustion: { steel: number; quartz: number; tritium: number };
    computer: { steel: number; quartz: number; tritium: number };
    energy: { steel: number; quartz: number; tritium: number };
    warp: { steel: number; quartz: number; tritium: number };
    spacetime: { steel: number; quartz: number; tritium: number };
    thrust: { steel: number; quartz: number; tritium: number };
    ion: { steel: number; quartz: number; tritium: number };
    beam: { steel: number; quartz: number; tritium: number };
    plasma: { steel: number; quartz: number; tritium: number };
    shielding: { steel: number; quartz: number; tritium: number };
    weapons: { steel: number; quartz: number; tritium: number };
}

export interface TechLevels {
    armour: number;
    combustion: number;
    computer: number;
    energy: number;
    warp: number;
    spacetime: number;
    thrust: number;
    ion: number;
    beam: number;
    plasma: number;
    shielding: number;
    weapons: number;
}

export interface Points {
    steel: number;
    quartz: number;
    tritium: number;
    energy: number;
}
