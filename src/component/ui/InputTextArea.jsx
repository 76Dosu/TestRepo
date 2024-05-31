import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width:100%;
    padding:12px 16px;

    border:1px solid #E4E4E4;
    border-radius: 8px;
    
    font-size:16px;
    font-weight:400;
    color:#333;
    background-color:white;
`

function TextInput(props) {

    const { prompt, onChange } = props;

    return (
        <StyledTextArea value={prompt} onChange={onChange}></StyledTextArea>
    )

}

export default TextInput;