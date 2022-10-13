import React from 'react';
import styled from 'styled-components';
import AppRouter from '../AppRouter';
import SideLayoutComponent from '../components/layout/SideLayoutComponent';
import TopLayoutComponent from '../components/layout/TopLayoutComponent';
import InfoLayoutComponent from '../components/layout/InfoLayoutComponent';

function DashboardPage() {
  return (
    <Layout>
      <TopLayoutComponent />
      <Container>
        <MenuLayoutContainer>
          <SideLayoutComponent />
        </MenuLayoutContainer>
        <ContentLayoutContainer>
          <AppRouter />
        </ContentLayoutContainer>
        <InfoLayoutContainer>
          <InfoLayoutComponent />
        </InfoLayoutContainer>
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  //background: #30475e;
  color: black;
  font-weight: 500;
  align-items: stretch;
  height: 100vh;
`;

const Container = styled.div`
  background: #30475e;
  display: flex;
  flex-direction: row;
  font-weight: 500;
  color: white;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const MenuLayoutContainer = styled.div`
  width: 20em;
  height:100%;
`;

const ContentLayoutContainer = styled.div`
  margin: 0;
  padding: 1em 0 0 1em;
  display: flex;
  flex-direction: row;
  width: 70%;
`;

const InfoLayoutContainer = styled.div`
  margin: 0;
  padding: 0 0 0 1em;
  width: 20%;
  min-width: 200px;
  border-left: 4px solid #1e253f;
`;

export default DashboardPage;
