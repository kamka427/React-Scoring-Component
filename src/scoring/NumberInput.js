import { Box, Container, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const NumberInput = ({ aspect }) => {
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
            label={aspect.required ? "Required" : "Optional"}
          ></TextField>

          <Typography
            sx={{
              backgroundColor: blue[600],
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
