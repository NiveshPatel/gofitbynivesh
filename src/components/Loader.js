import { Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <Stack diection='row' alignItems="center" width="100%" justifyContent="center">
        <InfinitySpin color='gray'/>
    </Stack>
  )
}

export default Loader