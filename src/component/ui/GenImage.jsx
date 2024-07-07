import React from "react";
import styled from "styled-components";

const GenImageItems = styled.img`
    width:342px;
    height:342px;
    border-radius:36px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.15);
    margin-right:60px;

    object-fit:cover;
    overflow:hidden;    

    &:last-child {
        margin-right:0px;
    }
`

function GenImage(props) {

    const { imgURL } = props;

    return (
        <GenImageItems src={imgURL}></GenImageItems>
    )

}

export default GenImage;