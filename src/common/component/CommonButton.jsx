import React from 'react';
import { Button } from '@mui/material';

export default function CommonButton({ title,onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{
        marginTop: 2,
        padding: '10px 20px',
        fontWeight: 'bold',
        width: '100%',
      }}
    >
      {title}
      
    </Button>
  );
}
