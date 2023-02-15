import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FriendsComponent from '../../components/Friends list Home page/FriendsComponent'



// * this component is for showing friends list at chat page 
//* works like wrapper 

const FriendsList = ({ friendList }) => {
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.native)
    return (
        <Wrapper>
            {
                friendList.map((friend, index) =>
                    <FriendsComponent name={friend.name} id={friend.id} key={index} theme={theme} />)
            }
        </Wrapper>
    )
}

export default FriendsList

const Wrapper = styled.div`
height: 100%;
overflow-y: auto;
`