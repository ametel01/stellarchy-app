import { useState } from "react";
import { GAMEABI } from "@/abi/stellarchy";
import { GAMEADDRESS } from "@/constants";
import { ButtonPrimary } from "@/components/Button";
import styled from "styled-components";
import Image from "next/legacy/image";
import plus from "@/assets/icons/Plus.svg";
import { useContractWrite } from "wagmi";

const ButtonWrapper = styled.div`
    margin-top: 20px;
`;

export function CollectResources() {
    const [called, setCalled] = useState(false);

    const { write } = useContractWrite({
        address: GAMEADDRESS,
        abi: GAMEABI,
        functionName: "collectResources"
    });

    return (
        <div>
            <ButtonWrapper>
                <ButtonPrimary
                    disabled={called}
                    onClick={() => {
                        write();
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "center",
                            flexDirection: "row",
                        }}
                    >
                        <div style={{ width: 20, height: 20 }}>
                            <Image
                                src={plus}
                                alt="plus"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                        <div>Collect Resources</div>
                    </div>
                </ButtonPrimary>
            </ButtonWrapper>
        </div>
    );
}
