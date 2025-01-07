import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import CommonButton from '../common/component/CommonButton'
import CommonInput from '../common/component/commonInput'
import { Link } from 'react-router-dom'

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            onchange={(e) => setName(e.target.value)}
          />

          <CommonInput label={'Email'} type={'email'}
            onchange={(e) => setEmail(e.target.value)}
          />
          <CommonInput label={'Password'} type={'password'}
            onchange={(e) => setPassword(e.target.value)}
          />

        </Box>

        <Box>
          <CommonButton title={'Login'} />
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
