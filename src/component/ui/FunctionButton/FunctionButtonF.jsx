import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.div`
    width:fit-content;
    padding:16px 48px;
    margin-right:${props => props.marginRight};
    background-color:#F49090;
    border:1px solid #F49090;
    border-radius:8px;

    font-size:24px;
    font-weight:bold;
    color:white;

    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color:#F49090;
        color:white;
    }
`

function FunctionButtonF(props) {

    const navigate = useNavigate();
    const { buttonName, marginRight, navigateLink } = props;

    return (
        <StyledButton onClick={() => {navigate(`/${navigateLink}`)}} marginRight={marginRight}>{buttonName}</StyledButton>
    )   

}

export default FunctionButtonF;