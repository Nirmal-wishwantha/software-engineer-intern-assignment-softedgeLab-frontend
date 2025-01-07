import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';


export default function EventComponent({ name, description, date, location, createdBy, capacity, remainingCapacity, tags, massages,no }) {

  return (

    <Box sx={{margin:2}}>
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
          <Typography> No: {no}</Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, textAlign: 'center', marginBottom: 2 }}>
           Name: {name}
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 1 ,fontWeight:700}}>
            Description:{description}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 ,fontWeight:700}}>
            Date:{date}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 ,fontWeight:700}}>
            Location: {location}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 ,fontWeight:700}}>
            Created By: {createdBy}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 ,fontWeight:700}}>
            Capacity: {capacity}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 ,fontWeight:700}}>
            Remaining Capacity:{remainingCapacity}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 ,fontWeight:700}}>
            Tags: {tags}
          </Typography>

          <Typography
            variant="body2"
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
            iviuwvb
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
