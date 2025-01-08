import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import instance from "../services/AxiosOder";

export default function AnalyticsEvent({events=[],}) {

  
  
  return (
    <TableContainer>
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


          {
            events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.eventId}</TableCell>
                <TableCell>{event.eventName}</TableCell>
                <TableCell>{event.totalAttendees}</TableCell>
                <TableCell>{event.capacity}</TableCell>
                <TableCell>

                </TableCell>
                <TableCell>{event.massage}</TableCell>
              </TableRow>

            ))

          }


        </TableBody>
      </Table>
    </TableContainer>
  );
}
