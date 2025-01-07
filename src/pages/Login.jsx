import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CommonButton from '../common/component/CommonButton';
import CommonInput from '../common/component/commonInput';
import { Link } from 'react-router-dom';
import instance from '../services/AxiosOder';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const LoginPage = () => {
    const data = {
      email: email,
      password: password
    }

    instance.post('/login/user',data)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }




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
          sx={{ fontSize: 40, fontWeight: 500 }}>
          Login Form
        </Typography>



        <Box sx={{ marginTop: 2 }}>
          <CommonInput
            label={'Email'}
            type={'email'}
            onchange={(e) => setEmail(e.target.value)}
            

          />
          <CommonInput
            label={'Password'}
            type={'password'}
            onchange={(e) => setPassword(e.target.value)}
            />

        </Box>

        <Box>
          <CommonButton 
          tital={'Login'} 
          onclick={LoginPage}
          />
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
