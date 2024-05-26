'use client'

import { Box, Button, Image, NavLink, Stack, Text, List, ListItem } from '@mantine/core';
import React, { useState, useEffect, useRef } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoSearchCircle } from "react-icons/io5";
import { RiSettingsFill } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { PiSubtitlesFill } from "react-icons/pi";
import { PiTextTFill } from "react-icons/pi";
import { HiInboxArrowDown } from "react-icons/hi2";
import { BiVideoRecording } from "react-icons/bi";

const LeftNavbar = ({ handleSearch, isSearch }) => {

    const [isDivVisible, setDivVisible] = useState(false);
    const [isDivVisible2, setDivVisible2] = useState(false);

    const handleButClick = () => {
        setDivVisible(!isDivVisible);
    };

    const handleButClick2 = () => {
        setDivVisible2(!isDivVisible2);
    }

    const mainDivRef = useRef(null);
    const hoverDivRef = useRef(null);

    useEffect(() => {
        const mainDiv = mainDivRef.current;
        const hoverDiv = hoverDivRef.current;

        if (mainDiv && hoverDiv) {
            const showHoverDiv = () => {
                hoverDiv.style.display = 'block';
            };

            const hideHoverDiv = (event) => {
                if (
                    !mainDiv.contains(event.relatedTarget) &&
                    !hoverDiv.contains(event.relatedTarget)
                ) {
                    hoverDiv.style.display = 'none';
                }
            };

            mainDiv.addEventListener('mouseenter', showHoverDiv);
            mainDiv.addEventListener('mouseleave', hideHoverDiv);
            hoverDiv.addEventListener('mouseleave', showHoverDiv);
            hoverDiv.addEventListener('mouseenter', hideHoverDiv);

            return () => {
                mainDiv.removeEventListener('mouseenter', showHoverDiv);
                mainDiv.removeEventListener('mouseleave', hideHoverDiv);
                hoverDiv.removeEventListener('mouseleave', hideHoverDiv);
                hoverDiv.removeEventListener('mouseenter', showHoverDiv);
            };
        }
    }, []);

    return (
        <Box className='nav'>
            <Box className='nav-box'>
                <Button className='nav-button' onClick={handleButClick}>
                    <IoIosMenu />
                </Button>
                <Box className={`panel ${isDivVisible ? 'show' : 'hide'}`}>
                    <Box className='title'>
                        <Button className='nav-button' onClick={handleButClick}><IoIosMenu /></Button>
                        <Text style={{ paddingBottom: 8 + 'px' }}>Close Panel</Text>
                    </Box>
                    <Text style={{ color: 'black' }}>VEED</Text>
                    <Box className='line'></Box>
                    <Box>
                        <Box className='panel-title'><Text>Help</Text></Box>
                        <Box ref={mainDivRef} className='languages panel-title' onClick={handleButClick2}>
                            <Text>Language</Text>
                            <Text>{'>'}</Text>
                        </Box>
                        <Box ref={hoverDivRef} className='languages-panel panel' >
                            <Box>
                                <Box>EN</Box>
                                <Text>English (US)</Text>
                                <Box>CheckMark</Box>
                            </Box>
                            <Box>
                                <Box>EN</Box>
                                <Text>English (US)</Text>
                                <Box>CheckMark</Box>
                            </Box>
                            <Box>
                                <Box>EN</Box>
                                <Text>English (US)</Text>
                                <Box>CheckMark</Box>
                            </Box>
                            <Box>
                                <Box>EN</Box>
                                <Text>English (US)</Text>
                                <Box>CheckMark</Box>
                            </Box>
                        </Box>
                        <Box className='panel-title'><Text>Keyboard Shortcuts</Text></Box>
                    </Box>
                </Box>


                <Box className='nav__links'>
                    <List>
                        <ListItem className='search-link'>
                            <IoSearchCircle width={18} height={18}/>
                            <Text className={`relative ${isSearch}`} onClick={handleSearch}>Search</Text>
                        </ListItem>
                        <ListItem>
                            <RiSettingsFill width={18} height={18}/>
                            <Text>Settings</Text>
                        </ListItem>
                        <ListItem>
                            <IoMdAddCircle width={18} height={18}/>
                            <Text>Media</Text>
                        </ListItem>
                        <ListItem>
                            <MdAudiotrack width={18} height={18}/>
                            <Text>Audio</Text>
                        </ListItem>
                        <ListItem>
                            <PiSubtitlesFill width={18} height={18}/>
                            <Text>Subtitles</Text>
                        </ListItem>
                        <ListItem>
                            <PiTextTFill width={18} height={18}/>
                            <Text>Text</Text>
                        </ListItem>
                        <ListItem>
                            <HiInboxArrowDown />
                            <Text>Elements</Text>
                        </ListItem>
                        <ListItem>
                            <BiVideoRecording />
                            <Text>Record</Text>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftNavbar;
