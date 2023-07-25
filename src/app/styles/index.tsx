import styled from "styled-components";
import Column from "@/components/Column";

export const Box = styled.div<{ customcolor: string }>`
    width: 100%;
    max-height: 70px;
    display: flex;
    flex-direction: row;
    //align-items: center;
    //justify-content: space-between;
    margin-bottom: 10px;
    //padding: 10px;
    border: 2px solid ${(props) => props.customcolor};
    background-color: #151a1e;
    border-radius: 4px;
    overflow: hidden;
`;

export const SubBox = styled.div`
    width: 100%;
    //max-height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

export const Title = styled.div`
    width: 130px;
`;

export const InfoContainer = styled.div`
    //width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`;
export const ResourceContainer = styled(Column)`
    width: 50px;
    text-align: left;
    gap: 3px;
`;

export const NumberContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 4px;
    align-items: center;
    font-size: 14px;
    line-height: 18.2px;
`;

export const ResourceTitle = styled.div`
    color: grey;
    font-weight: 700;
    font-size: 12px;
    @media (max-width: 1300px) {
        display: none;
    }
`;

export const ImageContainer = styled.div`
    width: 70px;
`;

export const ButtonContainer = styled.div`
    max-width: 300px;
    min-width: 195px;
    :hover {
        filter: brightness(0.75);
    }
    @media (min-width: 1000px) {
        width: 300px;
    }
`;
