import { Box, Input, Text, List, ListItem } from '@mantine/core';
import { CiSearch } from "react-icons/ci";
import { MdOutlineHdrAuto } from "react-icons/md";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { MdOutlineContentCut } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { GrCloudUpload } from "react-icons/gr";

const SearchPanel = ({ handleSearch }) => {
  return (
    <Box>
        <Box className='search-bg' onClick={handleSearch}></Box>
        <Box p="md" className='search-box'>
            <Box className='search-box-title'>
                <CiSearch />
                <Input placeholder="Search for anything" className='search-input'/>
                <Text>⌘K</Text>
            </Box>
            <Box style={{ width: '100%'}}>
                <Text className='search-box-subtitle'>Suggestions</Text>
                <List className='search-box-list'>
                    <ListItem className='search-box-item'>
                        <MdOutlineHdrAuto width={18} height={18} style={{ marginRight: '16px'}}/>
                        <Text className='search-box-text'>Auto Subtitle</Text>
                    </ListItem>
                    <ListItem className='search-box-item'>
                        <MdOutlineAutoAwesome  width={18} height={18} style={{ marginRight: '16px'}}/>
                        <Text className='search-box-text'>Clean Audio</Text>
                    </ListItem>
                    <ListItem className='search-box-item'>
                        <MdOutlineContentCut  width={18} height={18} style={{ marginRight: '16px'}}/>
                        <Text className='search-box-text'>Magic Cut</Text>
                    </ListItem>
                    <ListItem className='search-box-item'>
                        <BsCameraVideo  width={18} height={18} style={{ marginRight: '16px'}}/>
                        <Text className='search-box-text'>Record</Text>
                    </ListItem>
                    <ListItem className='search-box-item'>
                        <GrCloudUpload   width={18} height={18} style={{ marginRight: '16px'}}/>
                        <Text className='search-box-text'>Upload File</Text>
                    </ListItem>
                </List>
            </Box>
        </Box>
    </Box>
  );
};

export default SearchPanel;
