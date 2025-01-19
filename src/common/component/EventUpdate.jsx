import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CommonInput from './commonInput';
import CommonButton from './CommonButton';

export default function EventUpdate({ event, updateEvent, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    createdBy: '',
    capacity: '',
    remainingCapacity: '',
    tags: '',
  });

  // Initialize form data with the current event values
  useEffect(() => {
    if (event) {
      setFormData({
        name: event.name || '',
        description: event.description || '',
        date: event.date || '',
        location: event.location || '',
        createdBy: event.createdBy || '',
        capacity: event.capacity || '',
        remainingCapacity: event.remainingCapacity || '',
        tags: event.tags || '',
      });
    }
  }, [event]);

  const handleSubmit = () => {
    updateEvent(formData);
    onClose(); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Dialog open={!!event} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>Update Event</DialogTitle>
      <DialogContent>
        <CommonInput
          type="text"
          value={formData.name}
          name="name"
          label="Name"
          onChange={handleChange}
        />
        <CommonInput
          type="text"
          value={formData.description}
          name="description"
          label="Description"
          onChange={handleChange}
        />
        <CommonInput
          type="date"
          value={formData.date}
          name="date"
          onChange={handleChange}
        />
        <CommonInput
          type="text"
          value={formData.location}
          name="location"
          label="Location"
          onChange={handleChange}
        />
        <CommonInput
          type="text"
          value={formData.createdBy}
          name="createdBy"
          label="Created By"
          onChange={handleChange}
        />
        <CommonInput
          type="number"
          value={formData.capacity}
          name="capacity"
          label="Capacity"
          onChange={handleChange}
        />
        <CommonInput
          type="number"
          value={formData.remainingCapacity}
          name="remainingCapacity"
          label="Remaining Capacity"
          onChange={handleChange}
        />
        <CommonInput
          type="text"
          value={formData.tags}
          name="tags"
          label="Tags"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <CommonButton title="Update" onClick={handleSubmit} />
        <CommonButton title="Close" onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
}
