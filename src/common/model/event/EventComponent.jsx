import React, { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import CommonButton from '../../commonFuntion/CommonButton';
import EventUpdate from './EventUpdate';
import AttendeeRegister from '../../model/attendee/AttendeeRegister';

export default function EventComponent({
  name,
  description,
  date,
  location,
  createdBy,
  capacity,
  remainingCapacity,
  tags,
  massages,
  no,
  onclickDelete,
  updateEvent,
  eventId,
  getEvent,
}) {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleUpdateClick = () => setIsUpdateOpen(true);
  const handleCloseUpdate = () => setIsUpdateOpen(false);

  const handleRegisterClick = () => setIsRegisterOpen(true);
  const handleCloseRegister = () => setIsRegisterOpen(false);

  return (
    <Box sx={{ margin: 2 }}>
      <Card
        sx={{
          maxWidth: '100%',
          padding: 2,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: '#f5f5f5',
        }}
      >
        <CardContent>
          <Typography>No: {no}</Typography>
          <Typography sx={{ fontWeight: 600, textAlign: 'center', marginBottom: 2 }}>
            Name: {name}
          </Typography>
          <Typography sx={{ marginBottom: 1, fontWeight: 700 }}>
            Description: {description}
          </Typography>
          <Typography sx={{ marginBottom: 1, fontWeight: 700 }}>
            Date: {date}
          </Typography>
          <Typography sx={{ marginBottom: 1, fontWeight: 700 }}>
            Location: {location}
          </Typography>
          <Typography sx={{ marginBottom: 1, fontWeight: 700 }}>
            Created By: {createdBy}
          </Typography>
          <Typography sx={{ marginBottom: 1, fontWeight: 700 }}>
            Capacity: {capacity}
          </Typography>
          <Typography sx={{ marginBottom: 1, fontWeight: 700 }}>
            Remaining Capacity: {remainingCapacity}
          </Typography>
          <Typography sx={{ marginBottom: 1, fontWeight: 700 }}>
            Tags: {tags}
          </Typography>
          <Typography
            sx={{
              marginTop: 3,
              padding: 1,
              backgroundColor: '#e0f7fa',
              borderRadius: 2,
              textAlign: 'center',
              color: '#00796b',
            }}
          >
            {massages}
          </Typography>
        </CardContent>
        <Box>
          <CommonButton title="Update" onClick={handleUpdateClick} />
          <CommonButton title="Delete" onClick={onclickDelete} />
          <CommonButton title="Register" onClick={handleRegisterClick} />
        </Box>
      </Card>

      {isUpdateOpen && (
        <EventUpdate
          event={{
            name,
            description,
            date,
            location,
            createdBy,
            capacity,
            remainingCapacity,
            tags,
          }}
          updateEvent={updateEvent}
          onClose={handleCloseUpdate}
        />
      )}

      <AttendeeRegister
        open={isRegisterOpen}
        setOpen={setIsRegisterOpen}
        eventId={eventId}
        getEvent={getEvent}
      />
    </Box>
  );
}
