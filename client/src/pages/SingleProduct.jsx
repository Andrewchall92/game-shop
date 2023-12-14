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
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OneProductPage = () => {
  const { id } = useParams();
  let [rateSelect, setRateSelect] = React.useState("");
  const { addReview } = useMutation(ADD_REVIEW);
  const { data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { id: id },
  });

  const product = data?.product || {};
  console.log(product);

  const handleFormSubmit = async (e) => {
    const data = rateSelect;

    try {
      const mutationResponse = await addReview({
        variables: { commentText: data, productId: id },
      });
      console.log(mutationResponse);
    } catch (err) {
      alert("Failed to add review");
    }
  };

  const handleRateSelectChange = (event) => {
    setRateSelect(event.target.value);
  };

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
                  <Button size="small">Like</Button>
                
                </CardActions>
              </Card>
            </Box>
          </Container>

          <Container>
            <Box flex={4} p={2} className="main-display">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper>
                    <Typography variant="h4" align="center" id="productInfo">
                      Rate this game
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{ m: 1, width: "100%" }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="rateSelect"
                      label="Rate"
                      onChange={handleRateSelectChange} // Add onChange event handler
                    >
                      <MenuItem value="LOVE THIS GAME">LOVE THIS GAME</MenuItem>
                      <MenuItem value="NOT GOOD ENOUGH">
                        NOT GOOD ENOUGH
                      </MenuItem>
                      <MenuItem value="WAY TOO BAD">WAY TOO BAD</MenuItem>
                    </Select>
                    <FormHelperText>
                      You will not be able to delete your review
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleFormSubmit()}
                    sx={{ width: "100%" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>

          <Container>
            <Box flex={4} p={2} className="main-display">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h4" align="center" id="productInfo">
                    Others Review
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table
                      stickyHeader
                      aria-label="sticky table"
                      sx={{ minWidth: 650 }}
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell> User </TableCell>
                          <TableCell align="right"> Game Rate </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {product.reviews &&
                          product.reviews.map((review, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {review.user}
                              </TableCell>
                              <TableCell align="right">{review.rate}</TableCell>
                            </TableRow>
                          ))}
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
