import { Button } from "@mui/material";
import { useConnect } from "wagmi";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function ConnectWalletButton() {
    return <ConnectButton accountStatus="address" chainStatus="icon" />;
}
