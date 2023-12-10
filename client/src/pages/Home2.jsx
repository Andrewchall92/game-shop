import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button 
        variant="contained" 
        size="small"
        color="secondary"
        startIcon={<DeleteIcon />}
        >Contained</Button>
        <Button variant="outlined" >Outlined</Button>
      </Stack>
    </div>
  );
};

export default Home;
