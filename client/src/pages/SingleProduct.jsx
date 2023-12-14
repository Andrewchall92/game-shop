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
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PRODUCT } from "../utils/queries";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OneProductPage = () => {
  const { id } = useParams();

  const { data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id: id },
  });

  const product = data?.product || {};
  console.log(product);

  return (
    <Box>
      <Navbar />
      {product ? (
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
              display="flex"
              justifyContent="center"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h4" id="productInfo">
                    Game Info
                  </Typography>
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
                <Grid item xs={12}>
                  
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
                <Grid item xs={12} >
                  <Typography variant="h4" id="productInfo">
                   
                    Others Review
                  </Typography>

                  <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }} >
                      <TableHead>
                        <TableRow>
                          <TableCell> User </TableCell>
                          <TableCell align="right"> Game Rate </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            JASON
                          </TableCell>
                          <TableCell align="right">LOVE THIS GAME</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
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
