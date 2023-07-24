// @ts-nocheck
import { useEffect, useState, useMemo } from "react";
import {
    WagmiConfig,
    useAccount,
    useConnect,
    useContractRead,
    useContractWrite,
} from "wagmi";
import AuthScreen from "@/components/LoginOrGenerate"
import Dashboard from "@/components/DashBoard";
import { GAMEADDRESS } from "@/constants";
import { GAMEABI } from "@/abi/stellarchy";
import useGetTokenId from "@/components/hooks/useGetTokenId";

const AuthController = ({ Component, pageProps }: AppProps) => {
    const { address } = useAccount();
    // const { connect } = useConnectors();

    const [walletConnectLoading, setWalletConnectLoading] =
        useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setWalletConnectLoading(false);
        }, 2500);
    }, [walletConnectLoading]);

    const {data, isLoading} = useGetTokenId(address);
    console.log(data?.toString());

    const generatePlanet = useContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "generatePlanet",
    });

    const hasGeneratedPlanets = useMemo(() => {
        if (data) {
            const planetIdBN = Number(data);

            return planetIdBN > 0;
        }
    }, [data]);

    if (!address || !hasGeneratedPlanets) {
        // || isLoading || walletConnectLoading) {
        return (
                <AuthScreen
                    address={address}
                    generatePlanet={() => generatePlanet()}
                    walletConnectLoading={walletConnectLoading}
                    loading={isLoading || !data}
                    hasGeneratedPlanets={hasGeneratedPlanets}
                />
        );
    }
    return <Dashboard />;
};
export default AuthController;
