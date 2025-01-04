import React from 'react';
import { Button } from '@mui/material';

export default function CommonButton({ tital }) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        marginTop: 2,
        padding: '10px 20px',
        fontWeight: 'bold',
        width: '100%',
      }}
    >
      {tital}
    </Button>
  );
}
