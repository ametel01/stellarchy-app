import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useTransaction } from "wagmi";

interface Props {
    hash: `0x${string}` | undefined;
}

export default function TransactionBackdrop(props: Props | undefined) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const { isSuccess } = useTransaction({
        hash: props?.hash,
    });

    return (
        <div>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                {...(isSuccess && { handleClose })}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
