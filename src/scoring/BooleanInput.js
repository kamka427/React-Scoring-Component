import { Box, Checkbox, Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const BooleanInput = ({
  aspect,
  formState,
  addResult,
}) => {

  const val = formState.results.find((result) => result.id === aspect.id);

  const [value, setValue] = useState(
    val.val>0 ? true : false
  );

  const handleChange = (e) => {
    setValue(e.target.checked);
    e.target.checked ? addResult(e.target.value, aspect.id) : addResult(0, aspect.id);
    console.log(formState.results);
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
            value={aspect.value}
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
