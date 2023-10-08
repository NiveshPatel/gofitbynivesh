import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData, params } from './../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setBodyPart,bodyPart,setExercises}) => {
   const [search, setSearch] = useState('')
 
   const [bodyParts, setBodyParts] = useState([])

   useEffect(()=>{
const fetchExerciseData = async ()=>{
  const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
  setBodyParts(['all',...bodyPartsData])
}
fetchExerciseData();
   },[])
const handelSearch = async()=>{
  if(search){
    const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/name/${search}?limit=30`,exerciseOptions)

   
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
     setSearch('')
     setExercises(exerciseData)
}
}
  return (
    <Stack 
    alignItems="center"
    mt='37px'
    justifyContent="center"
    p="20px"

    >
<Typography
   fontWeight={700}
   sx={{
    fontSize:{lg:'44px',xs:'30px'}
   }}
   mb="50px"
   textAlign="center"
>
     Awesome Exercise You <br />
     Should Know
</Typography>
        <Box
         position="relative"
         mb="72px"

        >
          <TextField
           height="76px"
           value={search}
           onChange={(e)=>setSearch(e.target.value.toLowerCase())}
           placeholder='Search Exercise'
           type='text'
           sx={{
            input:{fontWeight:'700',border:'none',borderRadius:'4px'},
            width:{lg:'800px',xs:'350px'},
            backgroundColor:'#fff',
            borderRadius:'40px'

           }}
           
          />
          <Button onClick={handelSearch} className='search-btn'
           sx={{
            bgcolor:'#ff2625',
            color:'#fff',
            textTransform:'none',
            width:{lg:'175px',xs:'80px'},
            fontSize:{lg:'20px',xs:'14px'},
            height:'56px',
            position:'absolute',
            right:'0'
           }}
          >
             Search
          </Button>
        </Box>
        <Box
        sx={{
          position:'relative',
          width:'100%',
          p:'20px',

        }}
        >
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  )
}

export default SearchExercises