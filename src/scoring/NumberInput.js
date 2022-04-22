import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const NumberInput = ({ aspect, results }) => {

  const [value, setValue] = useState(results[aspect.id] || "");

  const handleChange = (e) => {
    setValue(e.target.value);
    results[aspect.id] = e.target.value;
  };

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            type="number"
            variant="outlined"
            size="small"
            required={aspect.required}
            label={aspect.required ? "Kötelező" : "Opcionális"}
            value={value}
            onChange={handleChange}
          ></TextField>

          <Typography
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              alignSelf: "self-end",
              padding: 1,
              paddingX: 2,
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            / {aspect.maxValue}
          </Typography>
        </Box>
      </Container>
    </>
  );
};
