import React, {FC, useEffect, useState} from "react";
import { CalendarService } from "../../services/calendar.service";
import { StyledButton } from './styles-calendar';


const CalendarDayComponent: FC=()=> {

    const [dayBookings, setDayBookings] = useState({"id":0,"bookingName":""});
    const [fetched, setFetched] = useState(false);

    const calendarService = new CalendarService();

    const getDayBookings = async () => {
        const dayBookings = await calendarService.getDayBookings();
        setDayBookings(dayBookings);
        setFetched(true);
    }

    // useEffect(() => {
    //     console.log(fetched, dayBookings);
    // },[dayBookings])

    return (
        <>
            <StyledButton onClick={getDayBookings}>Show bookings for a Day</StyledButton>
            <div> Booking ID : {dayBookings.id}</div>
            <div>Booking Name : { dayBookings.bookingName}</div>
        </>
    );
}

export default CalendarDayComponent;