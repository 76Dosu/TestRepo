import React from "react";
import styled from "styled-components";

const TitleText = styled.p`
    font-size: 48px;
    font-weight:600;
`

function Title(props) {

    const { text } = props;

    return (
        <TitleText>{text}</TitleText>
    )   

}

export default Title;