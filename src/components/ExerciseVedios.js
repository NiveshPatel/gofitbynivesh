import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ExerciseVedios = ({exerciseVideos,name}) => {
  // if(!exerciseVideos.length) return "loading...."
  return (
    
    <Box
    sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px"
    >
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Typography>
        <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        
        sx={{
          flexDirection:{lg:'row'},
          gap:{lg:'100px',xs:'0'},
          
        }}
        >
         
          {exerciseVideos?.slice(0,3).map((item,index)=>(
            <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="nonreferrer"
            >
  <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
  <Box>
    <Typography fontWeight="500" sx={{fontSize:{xs:'14px'}}} variant='h6' color='#000'>
      {item.video.title}
    </Typography>
    <Typography sx={{fontSize:{xs:'10px'}}} color='gray'>
      @{item.video.channelName}
    </Typography>
    
  </Box>
            </a>
          ))}
        </Stack>
      </Typography>
    </Box>
  )
}

export default ExerciseVedios