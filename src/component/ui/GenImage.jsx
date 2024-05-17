import React from "react";
import styled from "styled-components";

const GenImageItems = styled.div`
    width:300px;
    height:300px;
    border-radius:8px;
    background-color:white;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.15);
`

function GenImage(props) {

    return (
        <GenImageItems></GenImageItems>
    )

}

export default GenImage;