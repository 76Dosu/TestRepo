import React from "react";
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

    margin-top:80px;
    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color:#F49090;
        color:white;
    }
`

function UF_FunctionButton(props) {

    const { buttonName } = props;

    return (
        <StyledButton>{buttonName}</StyledButton>
    )   

}

export default UF_FunctionButton;