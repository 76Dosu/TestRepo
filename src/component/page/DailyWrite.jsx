import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
    background-color:var(--main-bcColor);
`

const TitleFrame = styled.div`
    width:100%;
    display:flex;
    align-items:flex-end;
    
    margin-top:120px;
`

const Title = styled.p`
    font-size:40px;
    font-weight:600;
    color:white;
`

const DivideLine = styled.div`
    height:1px;
    background-color:white;
    margin:12px 0px 0px 0px;
`

const WriteFrame = styled.div`
    display:flex;
    flex-direction: column;
`

const InputFrame = styled.div`
    display:flex;
    align-items:flex-start;
    border-top:2px solid #333;
`

const InputTitleFrame = styled(InputFrame)`
    display:flex;
    align-items:center;
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

    // axios로 사용자 데이터 db.json으로 넘기기
    const onSubmit = () => {
        let timestamp = new Date().getTime()

        let year = new Date().getFullYear()
        let month = new Date().getMonth();
        let day = new Date().getDate()
        let myTime = `${year}.${month + 1}.${day}`

        axios.post('http://localhost:3001/posts', {
          id: timestamp,
          prompt: prompt,
          keyword: results, 
          date: myTime,
        })
      };

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
                <Title>하루를 기록해보세요!</Title>
            </TitleFrame>

            <DivideLine />

            <WriteFrame>
                <InputTitleFrame>
                    <InputTextTitle></InputTextTitle>
                </InputTitleFrame>

                <InputFrame>
                    <InputTextContents onChange={handleChange} value={prompt}></InputTextContents>
                </InputFrame>
            </WriteFrame>

            <TestText>{results}</TestText>
            
            <WriteButtonFrame onClick={handleClick}>
                <WriteButtonUF buttonName="작성하기"></WriteButtonUF>
            </WriteButtonFrame>

            {/* <WriteButtonFrame onClick={onSubmit}>
                <WriteButtonUF buttonName="테스트"></WriteButtonUF>
            </WriteButtonFrame> */}
            
        </Wrapper>
        
    )   

}

export default DailyWrite;  