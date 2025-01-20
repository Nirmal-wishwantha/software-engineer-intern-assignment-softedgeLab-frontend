import React, { useState } from 'react';
import CommonInput from '../common/commonFuntion/CommonInput';
import { Box, Typography } from '@mui/material';
import instance from '../services/AxiosOder';
import CommonButton from '../common/commonFuntion/CommonButton';

export default function EventCreation() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [capacity, setCapacity] = useState();
  const [tags, setTags] = useState('');

  const addEvent = () => {
    const data = {
      name:name,
      description:description,
      date:date,
      location:location,
      createdBy:createdBy,
      capacity: parseInt(capacity),
      tags:tags
    };
    // console.log('Event Data:', data);

    instance
      .post('/event', data)
      .then((res) => {
        console.log('Data added successfully:', res.data);
        clear();
      })
      .catch((err) => {
        console.error('Error adding event:', err);
      });
  };

  const clear = () => {
    setName('');
    setDescription('');
    setDate('');
    setLocation('');
    setCreatedBy('');
    setCapacity('');
    setTags('');
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: 2,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box
          sx={{
            width: '60%',
            padding: 3,
            border: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            boxShadow: 3,
          }}
        >
          <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
            <Typography sx={{ fontSize: 40, fontWeight: 600 }}>
              Add New Event
            </Typography>
          </Box>

          <CommonInput
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <CommonInput
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <CommonInput
            label="Date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <CommonInput
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <CommonInput
            label="Created By"
            onChange={(e) => setCreatedBy(e.target.value)}
          />
          <CommonInput
            label="Capacity"
            type="number"
            onChange={(e) => setCapacity(e.target.value)}
          />
          <CommonInput
            label="Tags"
            onChange={(e) => setTags(e.target.value)}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              marginTop: 3,
            }}
          >
            <CommonButton title="Submit" onClick={addEvent} />
            <CommonButton title="Clear" onClick={clear} />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
