import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
    width:fit-content;
    padding:16px 48px;
    background-color:white;
    border:1px solid #F49090;
    border-radius:8px;

    font-size:24px;
    font-weight:bold;
    color:#F49090;

    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color:#F49090;
        color:white;
    }
`

function FunctionButtonUF(props) {

    const navigate = useNavigate();
    const { buttonName, navigateLink } = props;

    return (
        <StyledButton onClick={() => {navigate(`/${navigateLink}`)}}>{buttonName}</StyledButton>
    )   

}

export default FunctionButtonUF;