'use client'

import { Box, Text } from '@mantine/core';
import { Resizable } from 're-resizable';

const Footer = () => {
  return (
    <Box defaultSize={{ width: '100%', height: 200 }} style={{ borderTop: '1px solid #ddd' }}>
      <Box p="sm">
        <Text>Draggable and Resizable Video/Audio Timeline</Text>
      </Box>
    </Box>
  );
};

export default Footer;
