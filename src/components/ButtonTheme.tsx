import styled from "styled-components";
import { BiMoon, BiSun } from "react-icons/bi";

const ContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.buttonBg};
    color: ${(props) => props.theme.color.buttonIcon};
    box-shadow: 10px 10px 49px -19px ${(props) => props.theme.color.buttonBg};
    outline: none;
`;

export const ButtonLight = () => {
    return <ContainerIcon><BiMoon/></ContainerIcon>;
};
export const ButtonDark = () => {
    return <ContainerIcon><BiSun/></ContainerIcon>;
};
