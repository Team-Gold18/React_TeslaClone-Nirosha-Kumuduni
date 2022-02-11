import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}   
                </LeftButton>
                {rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                        } 
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.jpg" />
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div `
    z-index: -1;
	width: 100vw;
	height: 100vh;
	background-size: cover; /* set size to cover */
	background-position: center; /* center the image */
    background-repeat: no-repeat; /* dont repeat the background */
    background-image: url("/images/model-s.jpg");
    display: flex;
	flex-direction: column; /* switch to vertical */
	justify-content: space-between; /* horizontal alignment */
	align-items: center; /* vertical alignment */
    background-image: ${props => `url("/images/${props.bgImage}")`};
`
const ItemText = styled.div`
   padding-top: 15vh;
   text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
	margin-bottom: 30px; 
    @media (max-width: 768px){
		flex-direction: column;
	}   
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 1px;
    margin: 8px;
`
const RightButton = styled.div`
    background-color: white;
    height: 40px;
    width: 256px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 1px;
    margin: 8px;
`
const DownArrow = styled.div`
    height: 40px;
    animation: animationDown infinite 1.5s;
    overflow-x: hidden;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`