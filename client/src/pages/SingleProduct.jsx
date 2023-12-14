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
            <Box flex={4} p={2} className="main-display">
              <Typography variant="h4">Product ID: {id}</Typography>
            </Box>
          </Container>

          <Container>
            <Box flex={4} p={2} className="main-display">
              <Typography variant="h4">Product ID: {id}</Typography>
            </Box>
          </Container>

          <Container>
            <Box flex={4} p={2} className="main-display">
              <Typography variant="h4">Product ID: {id}</Typography>
            </Box>
          </Container>
        </Stack>
      </Box>
    )
};

export default OneProductPage;