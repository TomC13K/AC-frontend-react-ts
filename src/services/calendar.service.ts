const axios = require('axios');

export class CalendarService{

    public async getDayBookings(): Promise<any> {
        const response = await axios.get('/calendar/day');
        return response.data;
    }
}