import React from 'react';
import styled from 'styled-components';
//import AppRouter from '../AppRouter';
import SideLayoutComponent from '../components/layout/SideLayoutComponent';
import TopLayoutComponent from '../components/layout/TopLayoutComponent';

const Layout = styled.div` 
  background: #494F67;
  color: black;
  font-weight: 500;
  min-height: 100vh;
  `

const Container = styled.div`
  background: #494f67;
  display: flex;
  flex-direction: row;
  font-weight: 500;
  color:white;
  min-height: 100vh;
`;

function DashboardPage() {
  return (
    <Layout>
      <TopLayoutComponent />
      <Container>
        <SideLayoutComponent />
        {/* //TODO pass component to render here when change route */}
        {/* <AppRouter/> */}
        <p>lalalala</p>
      </Container>
    </Layout>
  );
}

export default DashboardPage;
