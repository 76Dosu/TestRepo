import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
    width:fit-content;
    padding:12px 16px;
    background-color:white;
    border:1px solid #F49090;
    border-radius:56px;

    font-size:18px;
    font-weight:bold;
    color:#F49090;

    transition: .3s;
    cursor: pointer;

    &:hover {
        background-color:#F49090;
        color:white;
    }
`

function WriteButtonUF(props) {

    const { buttonName } = props;

    return (
        <StyledButton>{buttonName}</StyledButton>
    )   

}

export default WriteButtonUF;