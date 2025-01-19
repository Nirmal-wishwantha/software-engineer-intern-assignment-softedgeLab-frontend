import { TableContainer,Paper,Table,TableBody,TableCell,TableHead,TableRow } from "@mui/material";
import { useState,useEffect } from "react";
import { Box } from '@mui/material';
import instance from "../../services/AxiosOder";


export default function AnalyticsTable({ eventId }) {
  const [event, setEvents] = useState([]);

  useEffect(() => {
    if (eventId) {
      fetchAnalyticsData(eventId);
    }
  }, [eventId]);

  const fetchAnalyticsData = (id) => {
    instance
      .get(`/event/analytics/${id}`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              
              <TableCell>Event ID</TableCell>
              <TableCell>Event Name</TableCell>
              <TableCell>Total Attendees</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Capacity Utilization (%)</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              <TableRow>
                
                <TableCell>{event.eventId}</TableCell>
                <TableCell>{event.eventName}</TableCell>
                <TableCell>{event.totalAttendees}</TableCell>
                <TableCell>{event.capacity}</TableCell>
                <TableCell>{event.capacityUtilization}</TableCell>
                <TableCell>{event.massage}</TableCell>
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
