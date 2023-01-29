import React from 'react'
import MidBar from '../../layouts/MidBar/MidBar'
import SideBar from '../../layouts/SideBar/SideBar'
import ChatZone from "../../layouts/ChatZone/ChatZone"
import { Container } from './Home.styles'
import { motion } from 'framer-motion'

const HomePage = () => {
    return (
        <Container layout>

            {/* //*side bar */}
            <motion.div
                layout

            >
                <SideBar />
            </motion.div>


            {/* //*friends bar */}
            <motion.div
                layout
                style={{ flex: 0.25 }}
            >
                <MidBar />
            </motion.div>


            {/* //*chat area bar */}
            <motion.div
                layout
                style={{ flex: 0.65 }}

            >
                <ChatZone />
            </motion.div>
        </Container>
    )
}

export default HomePage