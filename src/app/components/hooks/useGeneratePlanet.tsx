import { ButtonPrimary } from "@/components/Button";
import * as React from "react";
import { parseEther } from "viem";

import { useStellarchyGeneratePlanet } from "@/generated";

export function GeneratePlanet() {
    const { data, isLoading, write, isSuccess } = useStellarchyGeneratePlanet();

    console.log("GENERATE-PLANET");
    return (
        <div>
            <ButtonPrimary
                disabled={isLoading}
                onClick={() => write({ value: parseEther("0.01") })}
            >
                {isLoading ? "Minting..." : "Mint"}
            </ButtonPrimary>
            {isSuccess && (
                <div>
                    Successfully minted your NFT!
                    <div>
                        <a href={`https://goerli.arbiscan.io/tx/${data?.hash}`}>
                            Arbiscan
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
