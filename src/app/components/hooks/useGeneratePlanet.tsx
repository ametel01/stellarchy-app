import { GAMEABI } from "@/abi/stellarchy";
import { Button } from "@mui/material";
import { GAMEADDRESS } from "@/constants";
import * as React from "react";
import { parseEther } from "viem";
import { useContractWrite } from "wagmi";

export function GeneratePlanet() {
    const { isLoading, write } = useContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "generatePlanet",
        value: parseEther("0.01"),
    });

    return (
        <div>
            <Button
                variant="contained"
                disabled={isLoading}
                sx={{
                    background: "#6cbd6a",
                    color: "black",
                    size: "large",
                }}
                onClick={() => write({ value: parseEther("0.01") })}
            >
                {isLoading ? "Minting..." : "Mint Planet"}
            </Button>
        </div>
    );
}
