/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const CircularProgressWithLabel = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      {/* Full Circle (Background Border) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 40, 
          height: 40, 
          borderRadius: '50%',
          border: '3px solid #e0e0e0',
        }}
      />
      
      {/* Progress Circle */}
      <CircularProgress
        variant="determinate"
        value={value}
        size={40}
        thickness={3}
        sx={{
          color: '#00796b', 
        }}
      />

      {/* Percentage Label */}
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <div>
      <CircularProgressWithLabel value={21} />
    </div>
  );
};

export default App;
