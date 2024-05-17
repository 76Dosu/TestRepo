import React from "react";
import styled from "styled-components";

//ui
import Title from "../ui/Title";
import Service from "../ui/Service";
import FunctionButtonUF from "../ui/FunctionButton/FunctionButtonUF";

//image
import DailyWrite from '../../images/_DailyWrite.png';
import DailyManage from '../../images/_DailyManage.png';

//styled
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    padding:0px 11.54%;
    background-color:#f5f5f5;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

const SubText = styled.p`
    font-size:28px;
    font-weight:400;
    color:#333;

    margin-top:16px;
    margin-bottom:80px;
`

const ServiceFrame = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:80px;
`

function MainPage(props) {

    return (
        
        <Wrapper>
            <Title text="김희찬님 안녕하세요"></Title>
            <SubText>이용하고싶은 서비스를 클릭해주세요!</SubText>

            <ServiceFrame>
                <Service serviceName="일기작성" serviceIcon={DailyWrite} navigateLink="write"></Service>
                <Service serviceName="일기관리" serviceIcon={DailyManage} navigateLink=""></Service>
            </ServiceFrame>

            <FunctionButtonUF buttonName="계정관리"></FunctionButtonUF>
        </Wrapper>
        
    )   

}

export default MainPage;