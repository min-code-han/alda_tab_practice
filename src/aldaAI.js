import React from 'react';
import styled from 'styled-components'
import TabPanel from './tab';
import './style/tab.scss'

const AldaAI = () => {
    return(
        <Wrap>
            <h1>header</h1>
            <TabPanel />
        </Wrap>
    )
};

export default AldaAI;

const Wrap = styled.div`
    width:500px;
`;