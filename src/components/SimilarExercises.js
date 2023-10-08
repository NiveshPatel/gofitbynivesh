import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box
    sx={{mt:{lg:'100px',xs:'0px'}}}
    >
    
  <Typography p={2} sx={{ fontSize: { lg: '44px', xs: '25px' },mt:{xs:'-50px',lg:'-140px'} }} fontWeight={700} color="#000" mb="33px">
   Target    <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>same muscle </span> <br />
      group
  </Typography>
  <Stack direction="row" sx={{p:'2',position:'relative'}}>
    {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>
    :<Loader/>}
  </Stack>
  <Typography  p={2} sx={{ fontSize: { lg: '44px', xs: '25px' },mt:{xs:'15px'} }} fontWeight={700} color="#000" mb="33px">
   Target same muscle group <br /> <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>by equipments</span> 
  </Typography>
  <Stack direction="row" sx={{p:'2',position:'relative'}}>
    {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>
    :<Loader/>}
  </Stack>
    </Box>
  )
}

export default SimilarExercises