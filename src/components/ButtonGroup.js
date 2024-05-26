'use client'

import { useState } from 'react';
import { Button, Group, Box, Text } from '@mantine/core';

const ButtonGroup = () => {
  const [selection, setSelection] = useState(null);

  return (
    <Box style={{ textAlign: 'center', padding: '1rem' }}>
      <Group>
        <Button onClick={() => setSelection(null)}>None Selected</Button>
        <Button onClick={() => setSelection('audio')}>Audio Selected</Button>
        <Button onClick={() => setSelection('video')}>Video Selected</Button>
      </Group>
      <Box mt="xl">
        {selection === null && <Text>No selection made</Text>}
        {selection === 'audio' && <Text>Audio options here</Text>}
        {selection === 'video' && <Text>Video options here</Text>}
      </Box>
    </Box>
  );
};

export default ButtonGroup;
