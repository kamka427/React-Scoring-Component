import { Box, Checkbox, Container, Divider, Typography } from "@mui/material";
import { useState } from "react";

export const BooleanInput = ({ aspect, results }) => {
  const [value, setValue] = useState(results[aspect.id] || false);

  const handleChange = (e) => {
    setValue(e.target.checked);
    results[aspect.id] = e.target.checked;
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px  solid",
            borderColor: "gray.main",
            borderRadius: 2,
          }}
        >
          <Checkbox
            checked={value}
            onChange={handleChange}
           />
          <Divider orientation="vertical" variant="middle" flexItem />

          <Typography
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              height: "100%",
              paddingX: 2,
              paddingTop: 1,
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            {aspect.value}
          </Typography>
        </Box>
      </Container>
    </>
  );
};
