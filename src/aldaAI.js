import React from 'react';
import styled from 'styled-components'
import TabPanel from './tab';

const AldaAI = () => {
    return(
        <Wrap>
            <h1>알다AI 메뉴 컴폰너트</h1>
            <TabPanel />
        </Wrap>
    )
};

export default AldaAI;

const Wrap = styled.div`
    width:500px;
`;