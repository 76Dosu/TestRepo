import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width:100%;
    height:44px;
    padding:12px 16px;

    border:1px solid #E4E4E4;
    border-radius: 8px;
    
    font-size:16px;
    font-weight:400;
    color:#333;
    background-color:white;
`

function InputTextTitle(props) {

    return (
        <StyledTextArea maxLength="50" placeholder={"제목을 입력해주세요"} ></StyledTextArea>
    )

}

export default InputTextTitle;