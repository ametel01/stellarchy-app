import { useEffect, useState, useMemo } from "react";
import { useAccount, useContractRead } from "wagmi";
import AuthScreen from "@/components/LoginOrGenerate";
import Dashboard from "@/components/DashBoard";
import { STERC721ADDRESS } from "@/constants";
import { ERC721ABI } from "@/abi/erc721";

const AuthController = () => {
    const { address } = useAccount();
    // const { connect } = useConnectors();

    const [walletConnectLoading, setWalletConnectLoading] =
        useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setWalletConnectLoading(false);
        }, 25);
    }, [walletConnectLoading]);

    const { data, isLoading } = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [address!],
    });

    // const generatePlanet = GeneratePlanet();

    const hasGeneratedPlanets = useMemo(() => {
        const planetIdBN = Number(data);
        return planetIdBN > 0;
    }, [data]);

    if (!address || !hasGeneratedPlanets || isLoading || walletConnectLoading) {
        return (
            <AuthScreen
                address={address}
                // generatePlanet={() => generatePlanet}
                walletConnectLoading={walletConnectLoading}
                loading={isLoading || !data}
                hasGeneratedPlanets={hasGeneratedPlanets}
            />
        );
    }
    return <Dashboard />;
};
export default AuthController;
