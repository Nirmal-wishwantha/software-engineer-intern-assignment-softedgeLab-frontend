import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, SliderValueLabel, Typography } from '@mui/material';
import instance from '../services/AxiosOder';
import EventComponent from '../common/component/EventComponent';
import EventTable from '../common/component/EventTable';
import AnalyticsEvent from '../common/component/AnalyticsTable';

export default function EventDetaisl() {

  const [events, setEvent] = useState([]);
 
  useEffect(() => {
    getEvent();
  }, [])

  const getEvent = () => {
    instance.get('/event')
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // delete event
  const onclickDelete = (id) => {
    const eventId = parseInt(id, 10);
    instance.delete(`/event/${eventId}`)
      .then((res) => {
        getEvent();
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching analytics:", err);
      });
  }


  //update event
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
        <EventTable
          events={events}
        />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          events.map((val, index) => (
            <EventComponent key={index}
              no={index + 1}
              name={val.name}
              description={val.description}
              date={val.data}
              location={val.location}
              createdBy={val.createdBy}
              capacity={val.capacity}
              remainingCapacity={val.remainingCapacity}
              tags={val.tags}
              massages={val.massages}
              onclickDelete={() => onclickDelete(val.eventId)}
              updateEvent={(updatedData) => UpdateEvent(val.eventId, updatedData)}


            />
          ))
        }
      </Box>

    </div>
  );
}
