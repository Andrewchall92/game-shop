import React from "react";
import { Box } from "@mui/material";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import {useState} from 'react';




const Contact = () => {
    const [formState, setFormState] = useState({ message: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/";
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                
                height: "100vh",
            }}
        >
            <Box
                sx={{
                    my: 8,
                    mx: 40,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 20,
                }}
            >
                <Typography color="black" component="h1" variant="h3" id="contact-message">
                    Send Us A Message
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        fullWidth
                        id="message"
                        label="Write your message here"
                        multiline
                        maxRows={6}
                        variant="standard"
                        sx={{ mt: 3, mb: 2, width: "50ch" }}
                    />
                    <Button
                        type="submit"
                        
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
