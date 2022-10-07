import React from 'react';
import styled from 'styled-components';
import TopSearchComponent from '../search/TopSearchComponent';

function TopLayoutComponent() {
  return (
    <TopLayout>
      <Text>LOGO</Text>
      <TopSearchComponent />
    </TopLayout>
  );
}

const TopLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #1e253f;
  color: white;
  font-weight: 500;
  width: 100%;
  height: 6em;
`;

const Text = styled.h3`
  padding-top: 0;
  margin-top: 0;
  color: white;
  font-weight: 500;
`;

export default TopLayoutComponent;
