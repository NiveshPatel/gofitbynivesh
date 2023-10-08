import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box >
      <Stack gap="0px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px"/>
        <Typography  color="gray" variant='h6' pb="40px" mt='20px'>
          Copyright by @Nivesh Patel
        </Typography>
      </Stack>
      
    </Box>
  )

}

export default Footer