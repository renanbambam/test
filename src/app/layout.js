'use client'

import { AppShell, AppShellNavbar, MantineProvider, AppShellFooter, AppShellMain, Box } from '@mantine/core';
import '../styles/globals.css';
import { useState  } from 'react';
import LeftNavbar from '../components/LeftNavbar';
import ButtonGroup from '@/components/ButtonGroup';
import Footer from '@/components/Footer';
import SearchPanel from '../components/SearchPanel';
import BigDropBox from '../components/BigDropBox';

export default function RootLayout({ children }) {
  const [isSearch, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!isSearch);
  };

  return (
    <html lang="en">
      <head>
        <title></title>
        <meta name="description" />
      </head>
      <body style={{ position: 'relative' }}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppShell
            padding="md"
          >
            <Box className='app'>
              <BigDropBox />
              <Box className={`search ${isSearch ? 'open-search' : ''}`}>
                {isSearch && (<SearchPanel handleSearch={handleSearch}/>)}
              </Box>
              <AppShellNavbar>
                <LeftNavbar handleSearch={handleSearch} isSearch={isSearch}/>
              </AppShellNavbar>
              <AppShellMain>  
                {children}
                <ButtonGroup />
                <AppShellFooter >
                  <Footer /> Footer
                </AppShellFooter>
              </AppShellMain>
            </Box>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
