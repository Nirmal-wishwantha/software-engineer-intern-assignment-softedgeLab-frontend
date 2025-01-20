import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import CommonButton from '../common/commonFuntion/CommonButton'
import CommonInput from '../common/commonFuntion/CommonInput'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../services/AxiosOder'

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const RegisterHandle = () => {
    const data = {
      name: name,
      email: email,
      password: password
    }

    instance.post('/user/register', data)
      .then((res) => {
        console.log(res);

        setTimeout(() => {
          navigate('/login');
        }, 2000)

      })
      .catch((err) => {
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
          register Form
        </Typography>



        <Box sx={{ marginTop: 2 }}>

          <CommonInput label={'Name'} type={'text'}
            onChange={(e) => setName(e.target.value)}
          />

          <CommonInput label={'Email'} type={'email'}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CommonInput label={'Password'} type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />

        </Box>

        <Box>
          <CommonButton title={'Register'}
            onClick={RegisterHandle}
          />
        </Box>

        <Box>
          <Link to={'/login'}>
            <Typography>Login page</Typography>
          </Link>

        </Box>
      </Box>
    </Box>
  )
}
