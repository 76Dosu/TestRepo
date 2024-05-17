import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//ui
import WriteButtonF from "./WriteButton/WriteButtonF";

//style
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height: 80px;
`

const HeaderLogo = styled.p`
    font-family: "Bangers", system-ui;
    font-size: 32px;
    margin:24px 0px;
    color: #F49090;

    cursor: pointer;
`
const Gnb = styled.div`
    display:flex;
    align-items:center;
    margin-left:auto;
`

const GnbList = styled.div`
    font-size: 18px;
    font-weight: bold;
    color:var(--main-textColor);
    cursor:pointer;
    margin-right:24px;
`

function Header(props) {

    const navigate = useNavigate();

    return (

        <Wrapper>
            <HeaderLogo onClick={() => {navigate('/')}}>pictureDaily</HeaderLogo>
            <Gnb>
                <GnbList onClick={() => navigate('/manage')}>일기 관리</GnbList>
                <WriteButtonF buttonName="일기 작성" navigateLink="write"></WriteButtonF>
            </Gnb>
        </Wrapper>

    )

}

export default Header;