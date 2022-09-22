import React from 'react';
import styled from 'styled-components';

const TopLayout = styled.div` 
  background: #1E253F;
  color: white;
  font-weight: 500;
  width: 100%;
  height: 6em;
  `

const Text = styled.h3` 
    padding-top: 0;
    margin-top: 0;
    color: white;
    font-weight: 500;
    `

function TopLayoutComponent() {
  return (
    <TopLayout>
        <Text>TOP</Text>
    </TopLayout>
  );
}

export default TopLayoutComponent;
