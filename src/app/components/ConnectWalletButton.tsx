import { Button } from "rebass";
import { useAccount, useConnect } from "wagmi";
import { ButtonPrimary } from "./Button";

export function ConnectWalletButton({}) {
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect();

    return (
        <div>
            {connectors.map((connector) => (
                <ButtonPrimary
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                >
                    {connector.name}
                    {isLoading &&
                        connector.id === pendingConnector?.id &&
                        " (connecting)"}
                </ButtonPrimary>
            ))}

            {error && <div>{error.message}</div>}
        </div>
    );
}
