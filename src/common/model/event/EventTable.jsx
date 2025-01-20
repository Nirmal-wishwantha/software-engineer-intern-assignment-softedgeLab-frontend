import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AnalyModel from '../../model/analyce/AnalyModel';

export default function EventTable({ events = [] }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Remaining Capacity</TableCell>
            <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((event, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
              <TableCell>{event.remainingCapacity}</TableCell>
              
              <TableCell>

              <AnalyModel eventId={event.eventId} />

              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
