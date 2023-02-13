import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setScreen } from "../../redux/slices/nativeSlice"

const ScreenHeader = ({ screen, theme }) => {
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <IconButton
                onClick={() => { dispatch(setScreen("chats")) }}
                sx={{ color: theme === "light" ? "#252525" : "#f5f5f5" }} >
                <ArrowBackIcon />
            </IconButton>
            <p>{screen}</p>
        </Wrapper>
    )
}

export default ScreenHeader

const Wrapper = styled.div`
display: flex;
align-items: center;
gap:1rem;

p{
    font-size:1.5rem;
    font-weight:700;
    cursor: default;
}
`