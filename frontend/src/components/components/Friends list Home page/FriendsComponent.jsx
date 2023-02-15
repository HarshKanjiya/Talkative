import styled from '@emotion/styled';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getChatThunk } from '../../../redux/thunk/chatThunk';

const FriendsComponent = ({ name, id, theme }) => {
    const dispatch = useDispatch()
    const lastMsg = "hiFriendsComponent-lastmsg"

    return (
        <Wrapper theme={theme} onClick={() => { dispatch(getChatThunk({ friendID: id })) }} >

            {name}
            <div className='FriendsComponent-lastmsg-wrapper' >
                <p className='FriendsComponent-lastmsg-msg'>{lastMsg}</p>
                <p className='FriendsComponent-lastmsg-time'>9:20 PM</p>
            </div>

        </Wrapper>
    )
}

export default FriendsComponent
const Wrapper = styled.div`
cursor:pointer;
width: 100%;
padding: 0.35rem 0.8rem;
box-shadow:  ${props => (props.theme === "light" ? "0 1px 1rem rgba(0,0,0,0.05)" : "0 1px 1.4rem rgba(255,255,255,0.02)")};
border:${props => (props.theme === "light" ? "2px solid rgba(0,0,0,0.05)" : "2px solid rgba(255,255,255,0.02)")};
display: flex;
flex-direction: column;
justify-content: space-between;
border-radius: 4px;
margin: 0.3rem 0;

.FriendsComponent-lastmsg-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.85rem;
    gap:1.5rem;
    opacity: 0.6;

    .FriendsComponent-lastmsg-msg{
        overflow: hidden;
        max-width: 160px;
        flex:1;
        max-lines: 1;
        height: 1.2rem;
    }
    .FriendsComponent-lastmsg-time{

    }
}
`