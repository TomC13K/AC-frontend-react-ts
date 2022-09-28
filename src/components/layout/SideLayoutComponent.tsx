import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

function SideLayoutComponent() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language:string) => {
    i18n.changeLanguage(language);
  }

  return (
    <SideLayout>
      <ButtonContainer>
        <Button onClick={() => navigate('.')}>{t('btnDashboard')}</Button>
        <Button onClick={() => navigate('objednavky')}>{t('btnBooking')}</Button>
        <Button onClick={() => navigate('aircon')}>{t('btnAirconRefill')}</Button>
        <Button onClick={() => changeLanguage('en')}>Eng</Button>
        <Button onClick={() => changeLanguage('sk')}>SK</Button>
      </ButtonContainer>
    </SideLayout>
  );
}

const SideLayout = styled.div`
  background: #1e253f;
  color: white;
  font-weight: 500;
  width: 20em;
  height: 100vh;
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
  //border: 2px solid red;
  width: auto;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  margin: 0 2em;
`;

export default SideLayoutComponent;
