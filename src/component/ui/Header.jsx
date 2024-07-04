import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//ui
import WriteButtonF from "./WriteButton/WriteButtonF";

//imgase
import LogoImage from "../../images/_Logo.png"

//style
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:20px 0;
`

const HeaderLogo = styled.img`
    width:130px;
`
const Gnb = styled.div`
    display:flex;
    align-items:center;
    margin-left:auto;
`

const GnbList = styled.div`
    font-size: 18px;
    font-weight: bold;
    color:white;
    cursor:pointer;
    margin-right:24px;
`

function Header(props) {

    const navigate = useNavigate();

    return (

        <Wrapper>
            <HeaderLogo src={LogoImage} onClick={() => {navigate('/')}}></HeaderLogo>
            <Gnb>
                <GnbList onClick={() => navigate('/manage')}>기록보기</GnbList>
                <WriteButtonF buttonName="작성하기" navigateLink="write"></WriteButtonF>
            </Gnb>
        </Wrapper>

    )

}

export default Header;