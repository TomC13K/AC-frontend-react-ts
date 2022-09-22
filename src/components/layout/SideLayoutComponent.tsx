import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const SideLayout = styled.div`
  background: #1e253f;
  color: white;
  font-weight: 500;
  width: 20em;
  height: 100vh;
`;

const Button = styled.button`
  //border: 2px solid yellow;
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

function SideLayoutComponent() {
  const navigate = useNavigate();

  return (
    <SideLayout>
      <ButtonContainer>
        <Button onClick={() => navigate('/')}>DashBoard</Button>
        <Button onClick={() => navigate('/objednavky')}>Bookings</Button>
        <Button onClick={() => navigate('/aircon')}>Aircon Refill</Button>
              {/* <Link to='/objednavky'><button>Bookings</button></Link> */}
      </ButtonContainer>
    </SideLayout>
  );
}

export default SideLayoutComponent;
