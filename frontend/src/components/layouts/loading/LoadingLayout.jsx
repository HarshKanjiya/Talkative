import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux';

const LoadingLayout = ({ size = "small" }) => {
    const { theme } = useSelector(state => state.native)
    if (size === "small") {
        return (
            <SmallWrapper theme={theme} >
                <div className='loading-screen-small-screen-container'>
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_iilq3soe.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
            </SmallWrapper>
        )
    }
    else {
        reutrn(
            <LargeWrapper theme={theme}>
                <div className='loading-screen-large-screen-container'>
                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_iilq3soe.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
            </LargeWrapper>
        )
    }
}

export default LoadingLayout

const SmallWrapper = styled.div`
height: 100%;
width: 100%;
display: grid;
place-content: center;

.loading-screen-small-screen-container{
    height: 250px;
    width: 250px;
    display: grid;
    place-content: center;
}
`
const LargeWrapper = styled.div`
height: 100vh;
width:100vw;
display: grid;
place-content: center;
background-color: ${props => (props.theme === "light" ? "rgb(237, 241, 243)" : "rgb(4, 19, 32)")} ;

.loading-screen-large-screen-container{
    height: 250px;
    width: 250px;
    display: grid;
    place-content: center;
}

`