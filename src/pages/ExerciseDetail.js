import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { YoutubeOptions, exerciseOptions, fetchData } from './../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVedios from '../components/ExerciseVedios';
import SimilarExercises from '../components/SimilarExercises';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, settargetMuscleExercises] = useState([])

  const [equipmentExercises, setEquipmentExercises] = useState([])
  const {id}= useParams();
  useEffect(() => {
    const fetchExerciseData = async()=>{
       const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
       const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
       setExerciseDetail(exerciseDetailData)
       const exerciseVideosData = await fetchData(`${YoutubeSearchUrl}/search?query=${exerciseDetailData.name}`,YoutubeOptions)
       setExerciseVideos(exerciseVideosData.contents)

       const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)

       const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)

       settargetMuscleExercises(targetMuscleExerciseData)
       setEquipmentExercises(equipmentExerciseData)
    }
    fetchExerciseData()
  }, [id])
  
  return (
    <Box>
     
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVedios  exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
       
    </Box>
  )
}

export default ExerciseDetail