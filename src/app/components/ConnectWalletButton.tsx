import { Button } from "@mui/material";
import { useConnect } from "wagmi";
import { ButtonPrimary } from "./Button";

export function ConnectWalletButton({}) {
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect();

    return (
        <div>
            {connectors.map((connector) => (
                <Button
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                >
                    {connector.name}
                    {isLoading &&
                        connector.id === pendingConnector?.id &&
                        " (connecting)"}
                </Button>
            ))}

            {error && <div>{error.message}</div>}
        </div>
    );
}
