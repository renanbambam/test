'use client'

import { useState } from 'react';
import { Button, Group, Box, Text } from '@mantine/core';

const ButtonGroup = () => {

  return (
    <Box className='main'>
        <Box className='main__title'>
            <Box className='main__title__left'>
                <Text>Project Name</Text>
                <Text className='login'>Login</Text>
            </Box>
            <Box className='main__title__right'>
                <Text>Project Name</Text>
                <Text className='login'>Login</Text>
            </Box>
        </Box>
      
    </Box>
  );
};

export default ButtonGroup;
