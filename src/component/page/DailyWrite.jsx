import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

//ui
import Header from "../ui/Header";
import WriteButtonUF from "../ui/WriteButton/WriteButtonUF";
import InputTextContents from "../ui/InputTextArea/InputTextContents";
import InputTextTitle from "../ui/InputTextArea/InputTextTitle";

//styled
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    padding:0px 11.54%;
    background-color:#f5f5f5;
`

const TitleFrame = styled.div`
    width:100%;
    display:flex;
    align-items:flex-end;
    
    margin-top:120px;
`

const Title = styled.p`
    font-size:48px;
    font-weight:600;
    color:#333;
`

const SubTitle = styled.p`
    font-size:24px;
    font-weight:400;
    color:#333;
    margin-left:16px;
`
const DivideLine = styled.hr`
    height:1px;
    border:1px solid var(--main-textColor);
    margin:12px 0px 0px 0px;
`

const WriteFrame = styled.div`
    display:flex;
    flex-direction: column;
`

const InputFrame = styled.div`
    display:flex;
    align-items:flex-start;

    margin-top:36px;
`

const InputTitleFrame = styled(InputFrame)`
    display:flex;
    align-items:center;
`

const InputTitle = styled.p`
    font-size:24px;
    font-weight:bold;
    color:#333;

    width:12%;
`

const WriteButtonFrame = styled.div`
    display:flex;
    width:fit-content;

    margin-top:40px;
    margin-left:auto;
`

const TestText =styled.p`
    font-size:24px;
`

function DailyWrite(props) {

    // 사용자 입력 받아오기
    const [prompt, setPrompt] = useState("");
    const [results, setResults] = useState([]);    

    const handleChange = (e) => {
        setPrompt(e.target.value);
    }

    const handleClick = (e) => {
        console.log(prompt);
        callGPT(prompt,results);
        console.log(results)
    }

    const ENDPOINT_URL = "https://api.openai.com/v1/chat/completions";
    const GPT_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    // callGPT([질문], [저장할 배열])
    function callGPT(prompt){
      fetch(ENDPOINT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GPT_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: `${prompt}라는 내용의 일기를 요약할 수 있는 키워드 5개를 순서없이 한줄에 나열해줘. 연결은 콤마로 해줘`
          }]
        })
      })
      .then(response => response.json())
      .then(data => {
        // 응답은 data.choices[0].message.content로 불러와져서 result 배열에 저장
        setResults((data.choices[0].message.content));
      });
    }

    return (
        
        <Wrapper>
            <Header></Header>

            <TitleFrame>
                <Title>일기 작성</Title>
                <SubTitle>오늘의 하루를 기록해보세요</SubTitle>
            </TitleFrame>

            <DivideLine />

            <WriteFrame>
                <InputTitleFrame>
                    <InputTitle>제목</InputTitle>
                    <InputTextTitle></InputTextTitle>
                </InputTitleFrame>

                <InputFrame>
                    <InputTitle>내용</InputTitle>
                    <InputTextContents onChange={handleChange} value={prompt}></InputTextContents>
                </InputFrame>
            </WriteFrame>

            <TestText>{results}</TestText>
            
            <WriteButtonFrame onClick={handleClick}>
                <WriteButtonUF buttonName="작성하기"></WriteButtonUF>
            </WriteButtonFrame>
            
        </Wrapper>
        
    )   

}

export default DailyWrite;  