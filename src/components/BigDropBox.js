'use client'

import { useState } from 'react';
import { Modal, Group, Button, Text, Box } from '@mantine/core';

const BigDropBox = () => {
    const [opened, setOpened] = useState(true);
    const [arquivo, setArquivo] = useState(null);

    return (
        <Modal opened={opened} onClose={() => setOpened(false)} centered size="lg" className={`dropbox ${opened ? '' : 'close'}`}>
            <Text size="xl" className='dropbox-title'>Add audio to video</Text>
            <Box style={{ textAlign: 'center'}}>
                <Box className='file-input'>
                    <input label="Upload your video" placeholder="Upload your video" type='file' prefix='Upload your video'
                        onChange={setArquivo} onClick={() => setOpened(false)} />
                </Box>
            </Box>
        </Modal>
    );
};

export default BigDropBox;
