import { useState } from "react";
import { GAMEABI } from "@/abi/stellarchy";
import { GAMEADDRESS } from "@/constants";
import { ButtonPrimary } from "@/components/Button";
import styled from "styled-components";
import Image from "next/legacy/image";
import plus from "@/assets/icons/Plus.svg";
import { useContractWrite } from "wagmi";
import { ButtonCollect } from "../ButtonMain";

const ButtonWrapper = styled.div`
    margin-top: 20px;
`;

export function CollectResources() {
    const [called, setCalled] = useState(false);

    const { write } = useContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "collectResources",
    });

    return (
        <div>
            <ButtonWrapper>
                <ButtonCollect callback={write} />
            </ButtonWrapper>
        </div>
    );
}
