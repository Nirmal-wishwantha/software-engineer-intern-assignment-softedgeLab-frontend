import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, SliderValueLabel, Typography } from '@mui/material';
import instance from '../services/AxiosOder';
import EventComponent from '../common/component/EventComponent';

export default function EventDetaisl() {

  const [event, setEvent] = useState([]);

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





  return (
    <div>

      <Box sx={{display:'flex',flexWrap:'wrap'}}>
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
            />
          ))
        }
      </Box>

    </div>
  );
}
