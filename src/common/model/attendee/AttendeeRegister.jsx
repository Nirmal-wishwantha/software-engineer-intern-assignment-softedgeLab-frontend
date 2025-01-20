import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CommonInput from '../../../common/commonFuntion/CommonInput';
import instance from '../../../services/AxiosOder';

export default function AttendeeRegister({ open, setOpen, getEvent, eventId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');


  const handleClose = () => {
    setOpen(false);
  };

  const register = () => {
    const data = { attendeeName:name, attendeeEmail:email,mobile:mobile};
    console.log(data,eventId);
    
    instance.post(`/attendees/${eventId}`, data)
      .then((res) => {
        console.log('Registration successful:', res.data);
        setName('');
        setEmail('');
        getEvent();
        setOpen(false);
      })
      .catch((err) => {
        console.error('Error during registration:', err);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{textAlign:'center'}}>Register</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To register for this event, please enter your name and email address here. We will send updates occasionally.
        </DialogContentText>

        <CommonInput label="Name" onChange={(e) => setName(e.target.value)} value={name} />
        <CommonInput label="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <CommonInput label="Mobile" onChange={(e) => setMobile(e.target.value)} value={mobile} />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={register}>Register</Button>
      </DialogActions>
    </Dialog>
  );
}
