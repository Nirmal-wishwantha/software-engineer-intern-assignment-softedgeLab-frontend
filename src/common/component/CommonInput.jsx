import React from 'react';
import { Box, TextField } from '@mui/material';

export default function CommonInput({ type, label }) {
  return (
    <Box>
      <TextField
        sx={{ margin: 2, width: '100%' }} // Adjust margin and width for better layout
        label={label}
        type={type}
        variant="outlined"
        required
      />
    </Box>
  );
}
