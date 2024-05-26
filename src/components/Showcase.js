import { useState } from 'react';
import { Box, Text } from '@mantine/core';
import { Resizable } from 're-resizable';

const Showcase = () => {
  const [aspectRatio, setAspectRatio] = useState('16:9');

  return (
    <Box style={{ textAlign: 'center', padding: '2rem' }}>
      <Text size="xl">Showcase Section</Text>
      <Resizable defaultSize={{ width: '100%', height: 400 }}>
        <Box style={{ border: '1px solid #ddd' }}>
          <Text>Draggable and Resizable Video/Viewport</Text>
        </Box>
      </Resizable>
    </Box>
  );
};

export default Showcase;
