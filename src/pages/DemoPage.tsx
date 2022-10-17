import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useState } from 'react';
import NewCustomerForm from '../components/forms/NewCustomerForm';
import NewVehicleForm from '../components/forms/NewVehicleForm';

const DemoPage: FC = () => {
  const [isShownCustomer, setIsShownCustomer] = useState(false);
  const [isShownVehicle, setIsShownVehicle] = useState(false);

  const handleClickCustomer = (event: React.MouseEvent<HTMLElement>) => {
    isShownVehicle ? setIsShownVehicle(false) : null;
    setIsShownCustomer(current => !current);
  };
  const handleClickVehicle = (event: React.MouseEvent<HTMLElement>) => {
    isShownCustomer ? setIsShownCustomer(false) : null;
    setIsShownVehicle(current => !current);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginRight: '10px' }}>
          <div style={{ marginRight: '10px' }}>
            <Button variant="contained" onClick={handleClickCustomer}>
              New Customer
            </Button>
          </div>
          <div style={{ marginRight: '10px' }}>
            <Button variant="contained" onClick={handleClickVehicle}>
              New Vehicle
            </Button>
          </div>
        </div>
        <div>
          {isShownCustomer && <NewCustomerForm />}
          {isShownVehicle && <NewVehicleForm />}
        </div>
      </div>
    </>
  );
};

export default DemoPage;
