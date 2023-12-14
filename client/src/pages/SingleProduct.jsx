import { Box, Typography, Stack, Container } from '@mui/material';
import React from 'react'
import {useParams} from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const OneProductPage = () => { 
    const { id } = useParams();
    return (
        <Box>
        <Navbar  />
        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{paddingTop:'3%'}}>
          <Container>
            <Box flex={4} p={2} className="main-display" sx={{backgroundColor:"pink"}}>
              <Typography variant="h4">Product Info</Typography>



            </Box>
          </Container>

          <Container>
            <Box flex={4} p={2} className="main-display" sx={{backgroundColor:"skyblue"}}>
              <Typography variant="h4"> Add Comment</Typography>
            </Box>
          </Container>

          <Container>
            <Box flex={4} p={2} className="main-display" sx={{backgroundColor:"yellow"}}>
              <Typography variant="h4"> Create Comment </Typography>
            </Box>
          </Container>
        </Stack>
      </Box>
    )
};

export default OneProductPage;