import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper } from '../search friend/userComponent'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { friendRequestThunk } from '../../../redux/thunk/newFriendThunk';

const BlockAccComponent = ({ user, index }) => {
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.native)

    const HelperClick1 = () => {
        // dispatch(friendRequestThunk({ friendID: user.id, accept: true }))
        
    }

    return (
        <Wrapper
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            layout
            transition={{ delay: 0.2 * index, type: "tween" }}
            theme={theme}
            buttonBG={"#2bb594"}
        >
            <div className='searchfriend-user-left' >
                <p className='searchfriend-user-left-name'>{user.name}</p>
                <p className='searchfriend-user-left-email'>{user.email}</p>
            </div>
            <div className='searchfriend-user-right' >
                <button className='requests-btn requests-accept' onClick={HelperClick1} ><CheckIcon /></button>
            </div>
        </Wrapper>
    )
}

export default BlockAccComponent