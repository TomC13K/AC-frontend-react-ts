import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type Props = {
  isActive: boolean  
}

const SideLayout = styled.div`
  background: #1e253f;
  color: white;
  font-weight: 500;
  width: 20em;
  height: 100vh;
`;

const Button = styled.button<Props>`
  padding: 0.8em;
  font-weight: 500;
  font-size: 1.5em;
  //background-color: ${({ isActive }) => (isActive ? '#3d4a7a' : 'inherit')};
  background-color: inherit;
  color: white;
  border-width: 0;
  border-bottom: 2px solid white;
  &:hover {
    background-color: #3d4a7a;
    cursor: pointer;
  }
  &.active {
    background-color: ${({ isActive }) => (isActive ? '#3d4a7a' : 'inherit')};
    //background: #494f67;
  }
`;

const ButtonContainer = styled.div`
  width: auto;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  //margin: 0 2em;
`;

function SideLayoutComponent() {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);

  const toggleActiveButton = () => {
    setActive(!isActive);
  };

  return (
    <SideLayout>
      <ButtonContainer>
        <Button
          key="1"
          isActive 
          onClick={() => { navigate('.');toggleActiveButton }}
        >
          DashBoard
        </Button>
        <Button isActive onClick={() => navigate('objednavky')}>Bookings</Button>
        <Button isActive onClick={() => navigate('aircon')}>Aircon Refill</Button>
      </ButtonContainer>
    </SideLayout>
  );
}

export default SideLayoutComponent;
