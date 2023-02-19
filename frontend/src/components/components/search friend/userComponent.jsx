import styled from '@emotion/styled'
import { bgcolor } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFriendThunk } from '../../../redux/thunk/newFriendThunk'



const UserComponent = ({ user, type, buttonBG, index, allowReq }) => {
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.native)

    const HelperClick = () => {
        if (allowReq) {
            dispatch(addFriendThunk({ friendID: user._id }))

        }
    }

    return (
        <Wrapper
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            layout
            transition={{ delay: 0.2 * index, type: "tween" }}
            theme={theme}
            buttonBG={buttonBG}
            allowReq={allowReq}
        >
            <div className='searchfriend-user-left' >
                <p className='searchfriend-user-left-name'>{user.name}</p>
                <p className='searchfriend-user-left-email'>{user.email}</p>
            </div>
            <div className='searchfriend-user-right' >
                <button className='searchfriend-user-sendReqBtn' onClick={HelperClick} ><p>{type}</p></button>
            </div>
        </Wrapper>
    )
}

export default UserComponent

export const Wrapper = styled(motion.div)`
width: 98%;
cursor: default;
padding: 1rem;
margin: 0.5rem 0;
box-shadow:  ${props => (props.theme === "light" ? "0 3px 1rem rgba(0,0,0,0.05)" : "0 5px 1.4rem rgba(255,255,255,0.02)")};
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 8px;
border:${props => (props.theme === "light" ? "2px solid rgba(0,0,0,0.05)" : "2px solid rgba(255,255,255,0.02)")};
.searchfriend-user-left{
    .searchfriend-user-left-name{
        font-size: 1.3rem;
        font-weight: 700;
    }
    .searchfriend-user-left-email{
        font-size: 1rem;
        font-weight: 600;
        opacity: 0.4;
    }
}
.searchfriend-user-right{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    button{
        cursor: ${props => (props.allowReq ? "pointer" : "default")} ;
        transition: 300ms;
        /* box-shadow:  ${props => (props.allowReq ? `0 0.7rem 0.8rem -5px ${props.buttonBG}60` : "none")}; */
        box-shadow:  ${props => (props.allowReq ? `0 1px 1.4rem -1px ${props.buttonBG}a1` : "none")};
        /* border: ${props => (props.allowReq ? "" : "none")}; */
    }
    .searchfriend-user-sendReqBtn{
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:1rem;
        border-radius: 4px;
        border:none;
        color:#fff;
        outline: none;
        background-color: ${props => (props.buttonBG)} ;
    }
    .requests-btn{
        height: 2.8rem;
        width: 2.8rem;
        border-radius: 50%;
        border:none;
        outline:none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid;
    }
    .requests-accept{
        background-color: #2AF598;
        color:white;
        border-color: #2AF598;
        
        &:hover{
            background-color: #29f87a;
        }
    }
    .requests-reject{
        background-color: transparent;
        color:#f82929;
        border-color: #f82929;
        &:hover{
            background-color: #f82929;
            color:#fff;
        }
    }
}
`