import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.div`
    width:fit-content;
    padding:12px 16px;
    background-color:var(--main-color);
    border:1px solid var(--main-color);
    border-radius:56px;
    font-size:18px;
    font-weight:bold;
    color:white;

    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color:var(--main-color);
        color:white;
    }
`

function WriteButtonF(props) {

    const { buttonName, navigateLink } = props;
    const naivgate = useNavigate();

    return (
        <StyledButton onClick={() => {naivgate(`/${navigateLink}`)}}>{buttonName}</StyledButton>
    )   

}

export default WriteButtonF;