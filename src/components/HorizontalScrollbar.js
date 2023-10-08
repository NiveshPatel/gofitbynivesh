import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from "./ExerciseCard"
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


const HorizontalScrollbar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  return (
    <ScrollMenu>
      {data.map((item)=>(
   <Box
     key={item.id||item}
     itemId={item.id||item}
     title={item.is||item}
     m="0 40px"
   >
    {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    : <ExerciseCard exercise={item}/>}
   </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar