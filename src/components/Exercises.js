import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import SearchExercises from './SearchExercises';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
const Exercises = ({exercises,setExercises,bodyPart}) => {
  console.log(exercises)
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage*exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate = (e,value)=>{
      setCurrentPage(value);
      window.scrollTo({top:1800,behaviour:'smooth'})
  }
  useEffect(()=>{
    const fetchExerciseData = async ()=>{
        let exerciseData = []
        if(bodyPart === 'all'){
          exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
        }else{
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
        }
        setExercises(exerciseData)
    }
    fetchExerciseData()
  },[bodyPart])
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
   <Typography
   variant="h3"
   sx={{fontSize:{lg:'70px',xs:'35px'},mb:'20px'}}
   >Showing results...</Typography>
   <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
   flexWrap="wrap"
   justifyContent="center"

   >{currentExercises.map((exercise,index)=>(
    <ExerciseCard key={index} exercise={exercise}/>
   ))}</Stack>
   <Stack mt='100px' alignItems='center'>
    {exercises.length > 10 && (
      <Pagination
      color='standard'
      shape='rounded'
      defaultPage={1}
      count={Math.ceil(exercises.length /exercisesPerPage)}
      page={currentPage}
      onChange={paginate}
      size="large"
      />
      
    )}
   </Stack>
    </Box>
  )
}

export default Exercises