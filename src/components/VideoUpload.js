import { useState } from 'react';
import { Box, Input, Carousel, Text } from '@mantine/core';

const VideoUpload = () => {
  return (
    <Box p="md">
      <Input type="file" accept="video/*" />
      <Carousel mt="sm">
        <Carousel.Slide>Person 1</Carousel.Slide>
        <Carousel.Slide>Person 2</Carousel.Slide>
        <Carousel.Slide>Person 3</Carousel.Slide>
      </Carousel>
      <Box mt="sm">
        <Text>Music 1</Text>
        <Text>Music 2</Text>
        <Text>Music 3</Text>
      </Box>
    </Box>
  );
};

export default VideoUpload;
