import * as React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function ConnectWalletButton() {
    return <ConnectButton accountStatus="address" chainStatus="icon" />;
}
