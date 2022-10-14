import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SideLayoutComponent() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <SideLayout>
      <ButtonContainer>
        <Button onClick={() => navigate('.')}>{t('sideLayout.btnDashboard')}</Button>
        <Button onClick={() => navigate('objednavky')}>{t('sideLayout.btnBooking')}</Button>
        <Button onClick={() => navigate('aircon')}>{t('sideLayout.btnAirconRefill')}</Button>
        <Button onClick={() => navigate('demo')}>component DEMO PAGE</Button>
      </ButtonContainer>
    </SideLayout>
  );
}

const SideLayout = styled.div`
  background: #1e253f;
  color: white;
  font-weight: 500;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em 0 0;
  font-weight: 500;
  font-size: 1.5em;
  background-color: inherit;
  color: white;
  border-width: 0;
  &:hover {
    background-color: #3d4a7a;
  }
  &.active {
    background: #494f67;
  }
`;

const ButtonContainer = styled.div`
  width: auto;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  align-items: flex-start;
`;

export default SideLayoutComponent;
