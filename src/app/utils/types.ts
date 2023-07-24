export interface CompoundsCostUpgrade {
    steelMine: { steel: any; quartz: any; tritium: any; energy: any };
    quartzMine: { steel: any; quartz: any; tritium: any; energy: any };
    tritiumMine: { steel: any; quartz: any; tritium: any; energy: any };
    energyPlant: { steel: any; quartz: any; tritium: any; energy: any };
    dockyard: { steel: any; quartz: any; tritium: any; energy: any };
    lab: { steel: any; quartz: any; tritium: any; energy: any };
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
    carrier: { steel: any; quartz: any; tritium: any };
    scraper: { steel: any; quartz: any; tritium: any };
    celestia: { steel: any; quartz: any; tritium: any };
    sparrow: { steel: any; quartz: any; tritium: any };
    frigate: { steel: any; quartz: any; tritium: any };
    armade: { steel: any; quartz: any; tritium: any };
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
    blaster: { steel: any; quartz: any; tritium: any };
    beam: { steel: any; quartz: any; tritium: any };
    astral: { steel: any; quartz: any; tritium: any };
    plasma: { steel: any; quartz: any; tritium: any };
}

export interface DefenceLevels {
    blaster: number;
    beam: number;
    astral: number;
    plasma: number;
}

export interface TechCost {
    armour: { steel: any; quartz: any; tritium: any };
    combustion: { steel: any; quartz: any; tritium: any };
    computer: { steel: any; quartz: any; tritium: any };
    energy: { steel: any; quartz: any; tritium: any };
    warp: { steel: any; quartz: any; tritium: any };
    spacetime: { steel: any; quartz: any; tritium: any };
    thrust: { steel: any; quartz: any; tritium: any };
    ion: { steel: any; quartz: any; tritium: any };
    beam: { steel: any; quartz: any; tritium: any };
    plasma: { steel: any; quartz: any; tritium: any };
    shielding: { steel: any; quartz: any; tritium: any };
    weapons: { steel: any; quartz: any; tritium: any };
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
