import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import instance from '../services/AxiosOder';
import EventComponent from '../common/model/event/EventComponent';
import EventTable from '../common/model/event/EventTable';

export default function EventDetails() {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = () => {
    instance.get('/event')
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onclickDelete = (id) => {
    const eventId = parseInt(id, 10);
    instance.delete(`/event/${eventId}`)
      .then((res) => {
        getEvent();
        console.log(res.data);
      })
      .catch((err) => {
        console.error('Error deleting event:', err);
      });
  };

  const UpdateEvent = (id, updatedData) => {
    instance.put(`/event/${id}`, updatedData)
      .then((res) => {
        console.log('Event updated:', res.data);
        getEvent();
      })
      .catch((err) => {
        console.error('Error updating event:', err);
      });
  };

  return (
    <div>
      <Box>
        <EventTable events={events} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        {events.map((val, index) => (
          <EventComponent
            key={index}
            no={index + 1}
            name={val.name}
            description={val.description}
            date={val.date}
            location={val.location}
            createdBy={val.createdBy}
            capacity={val.capacity}
            remainingCapacity={val.remainingCapacity}
            tags={val.tags}
            massages={val.massages}
            onclickDelete={() => onclickDelete(val.eventId)}
            updateEvent={(updatedData) => UpdateEvent(val.eventId, updatedData)}
            eventId={val.eventId}
            getEvent={getEvent}
          />
        ))}
      </Box>
    </div>
  );
}
