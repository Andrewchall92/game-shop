import {
    Box,
    Typography,
    Stack,
    Container,
    Card,
    CardMedia,
    CardContent,
    Button,
    Grid,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import CardActions from "@mui/material/CardActions";
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";

const OneProductPage = () => {
    const { id } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { id: id }
    });

    const product = data?.product || {};
    console.log(product);

    return (
        <Box>
            <Navbar />
            { product ? (
            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                sx={{ paddingTop: "3%" }}
            >
                
                <Container>
                    
                        <Box
                            flex={4}
                            p={2}
                            className="main-display"

                            display='flex'
                            justifyContent='center'
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h4" id='productInfo'>Game Info</Typography>
                                </Grid>
                            </Grid>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 400 }}
                                    image={product.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    
                </Container>

                <Container>
                    <Box
                        flex={4}
                        p={2}
                        className="main-display"
                        sx={{ backgroundColor: "skyblue" }}
                    >
                         <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h4" id='productInfo'>Write A review</Typography>
                                </Grid>
                            </Grid>
                    </Box>
                </Container>

                <Container>
                    <Box
                        flex={4}
                        p={2}
                        className="main-display"
                        sx={{ backgroundColor: "yellow" }}
                    >
                        <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h4" id='productInfo'> Others Review </Typography>
                                </Grid>
                            </Grid>
                    </Box>
                </Container>
                
            </Stack>
            ) : (
                        <Box>
                            <Typography variant="h4">No Product Found</Typography>
                        </Box>
                    )}
        </Box>
    );
};

export default OneProductPage;

