import { GAMEABI } from "@/abi/stellarchy";
import { Button } from "@mui/base";
import { GAMEADDRESS } from "@/constants";
import * as React from "react";
import { parseEther } from "viem";
import { useContractWrite } from "wagmi";
import { SubText } from "../LoginOrGenerate";

export function GeneratePlanet() {
    const { data, isLoading, write, isSuccess } = useContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "generatePlanet",
        value: parseEther("0.01"),
    });

    return (
        <div>
            <Button
                disabled={isLoading}
                onClick={() => write({ value: parseEther("0.01") })}
            >
                {isLoading ? "Minting..." : "Mint"}
            </Button>
            {isSuccess && (
                <SubText>
                    Successfully minted your NFT!
                    <a href={`https://goerli.arbiscan.io/tx/${data?.hash}`}>
                        Arbiscan
                    </a>
                </SubText>
            )}
        </div>
    );
}
