import { Typography } from '@mui/material';
import React from 'react'
import {useParams} from 'react-router-dom';

const OneProductPage = () => { 
    const { id } = useParams();
    return (
       console.log(id)
    )
};

export default OneProductPage;