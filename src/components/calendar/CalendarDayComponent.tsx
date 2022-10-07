import React, { FC, useEffect, useState } from 'react';
import { CalendarService } from '../../services/calendar.service';
import styled from 'styled-components';

const CalendarDayComponent: FC = () => {
  const [dayBookings, setDayBookings] = useState({ id: 0, bookingName: '' });
  const [fetched, setFetched] = useState(false);

  const calendarService = new CalendarService();

  const getDayBookings = async () => {
    const dayBookings = await calendarService.getDayBookings();
    setDayBookings(dayBookings);
    setFetched(true);
  };

  // useEffect(() => {
  //     console.log(fetched, dayBookings);
  // },[dayBookings])

  return (
    <>
      <StyledButton onClick={getDayBookings}>
        Show bookings for a Day
      </StyledButton>
      <div> Booking ID : {dayBookings.id}</div>
      <div>Booking Name : {dayBookings.bookingName}</div>
    </>
  );
};

const StyledButton = styled.button`
  border: 3px dotted yellow;
  background: green;
  color: black;
  font-weight: 500;
  max-height: 3rem;
`;

// const CalendarContainer = styled.div`
//   margin: 0;
//   padding: 0;
//   display: flex;
//   flex-direction: row;
//   width: 70%;
// `;

export default CalendarDayComponent;
