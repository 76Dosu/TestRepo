import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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

    //키워드 값 동기처리
    const [keyword, setKeyworld] = useState('')

    const getPosts = () => {
            axios.get('http://localhost:3001/posts').then((res) => {
            setKeyworld(res.data[res.data.length - 1].keyword);
        })
    }

    // 이미지 생성
    const GPT_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    const [imageUrlA, setImageUrlA] = useState('');
    const [imageUrlB, setImageUrlB] = useState('');
    const [imageUrlC, setImageUrlC] = useState('');

    const generateImageA = async () => {
        try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_API_KEY}`
            },
            body: JSON.stringify({
            model: "dall-e-2",
            prompt: `${keyword}를 대표하는 그림을 그려줘`,
            n: 1,
            size: '1024x1024'
            })
        });

        const data = await response.json();
            setImageUrlA(data.data[0].url);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };
    const generateImageB = async () => {
        try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_API_KEY}`
            },
            body: JSON.stringify({
            model: "dall-e-2",
            prompt: `${keyword}를 대표하는 그림을 그려줘`,
            n: 1,
            size: '1024x1024'
            })
        });

        const data = await response.json();
            setImageUrlB(data.data[0].url);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };
    const generateImageC = async () => {
        try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_API_KEY}`
            },
            body: JSON.stringify({
            model: "dall-e-2",
            prompt: `${keyword}를 대표하는 그림을 그려줘`,
            n: 1,
            size: '1024x1024'
            })
        });

        const data = await response.json();
            setImageUrlC(data.data[0].url);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };

    useEffect(() => {
        getPosts();
        generateImageA();
        generateImageB();
        generateImageC();
    }, []);

    return (
        
        <Wrapper>
            <Header></Header>

            <TitleFrame>
                <Title text="등록할 대표 이미지를 선택하세요."></Title>
                <SubText>김희찬님의 2024년 5월 3일 일기를 바탕으로 생성된 이미지입니다.</SubText>
            </TitleFrame>

            <GenImageFrame>
                <GenImage imgURL={imageUrlA}></GenImage>
                <GenImage imgURL={imageUrlB}></GenImage>
                <GenImage imgURL={imageUrlC}></GenImage>
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