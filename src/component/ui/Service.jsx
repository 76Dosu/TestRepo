import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
    width: 360px;
    height:360px;
    background-color:white;
    border-radius:60px;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.15);
    transition: .3s;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    cursor: pointer;

    &:hover {
        box-shadow: 4px 4px 16px rgba(244, 144, 144, 0.3);
        transform:scale(1.03);
    }
`

const ServiceName = styled.p`
    font-size:24px;
    font-weight: 400;
    color:#333;

    margin-bottom:36px;
`

const ServiceIcon = styled.img`
    width:160px;
    height:160px;
`

function Service(props) {

    const { serviceName, serviceIcon } = props;

    return (
        
        <ServiceContainer>
            <ServiceName>{serviceName}</ServiceName>
            <ServiceIcon src={serviceIcon}></ServiceIcon>
        </ServiceContainer>

    )   

}

export default Service;