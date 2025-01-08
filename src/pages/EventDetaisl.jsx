import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, SliderValueLabel, Typography } from '@mui/material';
import instance from '../services/AxiosOder';
import EventComponent from '../common/component/EventComponent';
import EventTable from '../common/component/EventTable';
import AnalyticsEvent from './AnalyticsEvent';

export default function EventDetaisl() {

  const [event,setEvent] = useState([]);

  const [analy,setAnaly] = useState([]);

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



  const analys = (id) => {
    const any = parseInt(id, 10);
    instance.get(`/event/${any}`)
set
      .then((res) => {
        console.log(res);
        setAnaly()

      })
      .catch((err) => {
        console.log(err);

      })
  }



  return (
    <div>

      <Box>
        <AnalyticsEvent
          events={analy}
        />
      </Box>


      <Box>
        <EventTable
          events={event}
        />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          event.map((val, index) => (
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
            // analyData={() => analyData(val.eventId)}

            />
          ))
        }
      </Box>

    </div>
  );
}
