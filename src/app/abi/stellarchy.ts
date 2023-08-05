export const GAMEABI = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "FleetSpent",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TechSpent",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "TotalResourcesSpent",
        type: "event",
    },
    {
        inputs: [],
        name: "PRICE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "erc721",
                type: "address",
            },
            {
                internalType: "address",
                name: "steel",
                type: "address",
            },
            {
                internalType: "address",
                name: "quartz",
                type: "address",
            },
            {
                internalType: "address",
                name: "tritium",
                type: "address",
            },
        ],
        name: "_initializer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "armadeBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "armourInnovationUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "astralLauncherBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "beamBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "beamTechnologyUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "blasterBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "carrierBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "celestiaBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "collectResources",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "combustionDriveUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "digitalSystemsUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "dockyardLevel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "dockyardUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "energyInnovationUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "energyPlantLevel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "energyPlantUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "fleetLeader",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "fleetSpent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "frigateBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "generatePlanet",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getCollectibleResources",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "steel",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "quartz",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tritium",
                        type: "uint256",
                    },
                ],
                internalType: "struct Structs.ERC20s",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getCompoundsLevels",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "steelMine",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "quartzMine",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tritiumMine",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "energyPlant",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "dockyard",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "lab",
                        type: "uint256",
                    },
                ],
                internalType: "struct Structs.Compounds",
                name: "levels",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getCompoundsUpgradeCost",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "steelMine",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "quartzMine",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "tritiumMine",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "energyPlant",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "dockyard",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "lab",
                        type: "tuple",
                    },
                ],
                internalType: "struct Structs.CompoundsCost",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getDefencesCost",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "blaster",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "beam",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "astralLauncher",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "plasmaProjector",
                        type: "tuple",
                    },
                ],
                internalType: "struct Structs.DefencesCost",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getDefencesLevels",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "blaster",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "beam",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "astralLauncher",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "plasmaProjector",
                        type: "uint256",
                    },
                ],
                internalType: "struct Structs.DefencesLevels",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getEnergyAvailable",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getEnergyForUpgrade",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "steelMine",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "quartzMine",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tritiumMine",
                        type: "uint256",
                    },
                ],
                internalType: "struct Structs.EnergyCost",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLeaderBoard",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLeadersPoints",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getNumberOfPlanets",
        outputs: [
            {
                internalType: "uint256",
                name: "nPlanets",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getPlanetPoints",
        outputs: [
            {
                internalType: "uint256",
                name: "points",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPrizePoll",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getShipsCost",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "carrier",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "celestia",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "scraper",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "sparrow",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "frigate",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "armade",
                        type: "tuple",
                    },
                ],
                internalType: "struct Structs.ShipsCost",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getShipsLevels",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "carrier",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "celestia",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "scraper",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "sparrow",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "frigate",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "armade",
                        type: "uint256",
                    },
                ],
                internalType: "struct Structs.ShipsLevels",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getSpendableResources",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "steel",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "quartz",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tritium",
                        type: "uint256",
                    },
                ],
                internalType: "struct Structs.ERC20s",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getTechsLevels",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "energyInnovation",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "digitalSystems",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "beamTechnology",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "ionSystems",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "plasmaEngineering",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "spacetimeWarp",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "combustiveDrive",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "thrustPropulsion",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "warpDrive",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "armourInnovation",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "armsDevelopment",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "shieldTech",
                        type: "uint256",
                    },
                ],
                internalType: "struct Structs.Techs",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "planetId",
                type: "uint256",
            },
        ],
        name: "getTechsUpgradeCosts",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "energyInnovation",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "digitalSystems",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "beamTechnology",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "ionSystems",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "plasmaEngineering",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "spacetimeWarp",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "combustiveDrive",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "thrustPropulsion",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "warpDrive",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "armourInnovation",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "armsDevelopment",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "steel",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "quartz",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "tritium",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct Structs.ERC20s",
                        name: "shieldTech",
                        type: "tuple",
                    },
                ],
                internalType: "struct Structs.TechsCost",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTokenAddresses",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "erc721",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "steel",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "quartz",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tritium",
                        type: "address",
                    },
                ],
                internalType: "struct Structs.Tokens",
                name: "tokens",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ionSystemsUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "labLevel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "labUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "plasmaEngineeringUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "plasmaProjectorBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "pointLeader",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "quartzMineLevel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "quartzMineUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "resourcesSpent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "scraperBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "shieldTechUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "spacetimeWarpUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "amount",
                type: "uint32",
            },
        ],
        name: "sparrowBuild",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "steelMineLevel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "steelMineUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "techLeader",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "techSpent",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "thrustPropulsionUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "tritiumMineLevel",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "tritiumMineUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "universeStartTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "warpDriveUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "weaponsDevelopmentUpgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
] as const;
