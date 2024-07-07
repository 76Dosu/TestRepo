import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//ui
import Header from "../ui/Header";

import Title from "../ui/Title";
import GenImage from "../ui/GenImage";

import WriteButtonF from "../ui/Button/WriteButtonF";
import WriteButtonUF from "../ui/Button/WriteButtonUF";

//image

//styled
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    padding:0px 11.54%;

    background-color:var(--main-bcColor);
`

const TitleFrame = styled.div`
    text-align:center;
    margin-top:100px;
`

const SubText = styled.p`
    font-size:20px;
    font-weight:400;
    color:white;

    margin-top:12px;
    margin-bottom:80px;
`

const GenImageFrame = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;

    width:100%;
`

const EntireButtonFrame = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;

    margin-top:60px;    
`

const WriteButtonFrame = styled.div`
    display:flex;
    width:fit-content;

    margin-right:20px;

    &:last-child {
        margin-right:0px;
    }
`

function ChoicePicture(props) {

    const navigate = useNavigate();

    const GPT_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    const [imageUrl1, setImageUrl1] = useState('');
    const [imageUrl2, setImageUrl2] = useState('');
    const [imageUrl3, setImageUrl3] = useState('');

    const generateImage = async () => {
        try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_API_KEY}`
            },
            body: JSON.stringify({
            model: "dall-e-2",
            prompt: "flying cat",
            n: 3,
            size: '1024x1024'
            })
        });

        const data = await response.json();
            setImageUrl1(data.data[0].url);
            setImageUrl2(data.data[1].url);
            setImageUrl3(data.data[2].url);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };

    return (
        
        <Wrapper>
            <Header></Header>

            <TitleFrame>
                <Title text="등록할 대표 이미지를 선택하세요."></Title>
                <SubText onClick={generateImage}>김희찬님의 2024년 5월 3일 일기를 바탕으로 생성된 이미지입니다.</SubText>
            </TitleFrame>

            <GenImageFrame>
                <GenImage imgURL={imageUrl1}></GenImage>
                <GenImage imgURL={imageUrl2}></GenImage>
                <GenImage imgURL={imageUrl3}></GenImage>
            </GenImageFrame>

            <EntireButtonFrame>
                <WriteButtonFrame onClick={(e) => {navigate(-1)}}>
                    <WriteButtonUF buttonName="뒤로가기"></WriteButtonUF>
                </WriteButtonFrame>

                <WriteButtonFrame>
                    <WriteButtonF buttonName="다음으로"></WriteButtonF>
                </WriteButtonFrame>
            </EntireButtonFrame> 
        </Wrapper>
        
    )   

}

export default ChoicePicture;