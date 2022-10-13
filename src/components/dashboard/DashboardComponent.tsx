import React, { FC} from 'react';
import NewCustomerForm from '../forms/NewCustomerForm';
import styled from 'styled-components';

const DashboardComponent: FC = () => {
  return (
    <>
      <h3>Dashboard component</h3>
      <NewCustomerForm/>
    </>
  );
}

export default DashboardComponent;
