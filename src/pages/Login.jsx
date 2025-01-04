import React from 'react';
import { Box, Typography } from '@mui/material';
import CommonButton from '../common/component/CommonButton';
import CommonInput from '../common/component/commonInput';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }}
      >
        <Typography 
        sx={{fontSize:40,fontWeight:500}}>
          Login Form
        </Typography>

       

        <Box sx={{ marginTop: 2 }}>
          <CommonInput label={'Email'} type={'email'} />
          <CommonInput label={'Password'} type={'password'} />
        </Box>

        <Box>
          <CommonButton tital={'Login'} />
        </Box>

        <Box>
            <Link to={'/register'}>
            <Typography>Register page</Typography>
            </Link>
            
        </Box>
      </Box>
    </Box>
  );
}
