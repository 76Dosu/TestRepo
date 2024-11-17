import React from "react";
import styled from "styled-components";

//ui
// import Title from "../ui/Title";
// import SubTitle from "../ui/SubTitle";
// import Service from "../ui/Service";

//image
// import DailyWrite from '../../images/_DailyWrite.png';
// import DailyManage from '../../images/_DailyManage.png';
import ActionTestImage2 from '../../images/sunsan-003.jpg';

//styled
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    padding:0px 11.54%;
    background-color:var(--main-bcColor);

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`

// const ServiceFrame = styled.div`
//     display:flex;
//     justify-content:space-between;
//     margin-bottom:80px;
// `

function MainPage(props) {

    return (
        
        <Wrapper>
            <img src={ActionTestImage2} alt="ActionTestImage" style={{width:"50%", height:"auto"}}></img>

            {/* <Title text="안녕하세요 김희찬님" ></Title>

            <SubTitle text="오늘 하루는 어땠나요? 일기를 통해 하루를 기록해보세요!"
                      marginTop="12px"
                      marginBottom="120px">

            </SubTitle>

            <ServiceFrame>
                <Service serviceName="일기작성" 
                         serviceIcon={DailyWrite} 
                         navigateLink="write"></Service>
                <Service color="white"
                         backgroundColor="#2B3034" 
                         serviceName="일기관리" 
                         serviceIcon={DailyManage} 
                         navigateLink="viewDaily"></Service>
            </ServiceFrame> */}
        </Wrapper>
        
    )   

}

export default MainPage;