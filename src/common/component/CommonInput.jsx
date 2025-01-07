import React from 'react';
import { Box, TextField } from '@mui/material';

export default function CommonInput({ type, label, onchange }) {
  return (
    <div>
      <TextField
        sx={{ margin:1, width: '100%' }}
        label={label}
        type={type}
        onChange={onchange}
        variant="outlined"
        required
      />
    </div>

  );
}
