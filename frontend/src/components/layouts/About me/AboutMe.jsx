import styled from '@emotion/styled'
import React from 'react'
import { useSelector } from 'react-redux'
import ScreenHeader from '../../components/ScreenHeader'
import { Wrapper } from '../search friend/newfriend.styles'

const AboutMe = () => {
    const { theme } = useSelector(state => state.native)

    return (
        <Wrapper theme={theme}>
            <ScreenHeader screen="About ME" theme={theme} />
            <AboutMEWrapper>
                <div>
                    <p>Hi there 🙋‍♂️</p>
                    <p>I'm Harsh Kanjiya,</p>
                    <p>a self taught Full stack developer & UIUX Designer.</p>
                </div>
                <div>
                    <div>
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_pghdouhq.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                </div>
            </AboutMEWrapper>

        </Wrapper>
    )
}

export default AboutMe

const AboutMEWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`