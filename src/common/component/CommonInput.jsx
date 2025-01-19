import React from 'react';
import { Box, TextField } from '@mui/material';

export default function CommonInput({ type, label, onChange ,value,name}) {
  return (
    <div>
      <TextField
        sx={{ margin:1, width: '100%' }}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        variant="outlined"
        required
      />
    </div>

  );
}
