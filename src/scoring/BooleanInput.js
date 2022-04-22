import { Box, Checkbox, Container, Divider, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const BooleanInput = ({ aspect }) => {
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
            borderColor: grey[600],
            borderRadius: 2,
          }}
        >
          <Checkbox />
          <Divider orientation="vertical" variant="middle" flexItem />

          <Typography
            sx={{
              backgroundColor: blue[600],
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
