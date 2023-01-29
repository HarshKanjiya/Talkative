import styled from "@emotion/styled";
import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
width: calc(100% - 1rem);
height: calc(100vh - 1rem);

overflow: hidden;
display: flex;
gap:0.5rem;
margin: 0.5rem;
`