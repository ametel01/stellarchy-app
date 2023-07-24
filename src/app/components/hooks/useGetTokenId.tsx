import { useConfig, usePrepareContractWrite } from "wagmi"
import { STERC721ADDRESS } from "@/constants"
import { ERC721ABI } from "@/abi/erc721"
import { useContractRead } from "wagmi"

export default function useGetTokenId(address:"0x${string}") {
    const {data, isLoading} = useContractRead({
        address: STERC721ADDRESS,
        abi: ERC721ABI,
        functionName: "tokenOf",
        args: [address]
    })
    return {data, isLoading};
}