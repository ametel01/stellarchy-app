import { GAMEABI } from "@/abi/stellarchy";
import { GAMEADDRESS } from "@/constants";
import styled from "styled-components";
import { useContractWrite } from "wagmi";
import { ButtonCollect } from "../ButtonMain";

const ButtonWrapper = styled.div`
    margin-top: 20px;
`;

export function CollectResources() {
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
