import { Box, Container, TextField, Typography } from "@mui/material";
import { rootShouldForwardProp } from "@mui/material/styles/styled";
import { useState } from "react";

export const NumberInput = ({ aspect, formState, addResult, removeResult }) => {
  const val = formState.results.find((result) => result.id === aspect.id);

  const [value, setValue] = useState(val ? val.value : "");

  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.value === "" ? removeResult(e, aspect) : addResult(e, aspect);
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
