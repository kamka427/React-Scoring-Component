import { Button, Box, Container, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";

export const Buttons = ({ onSubmit, onCancel, onNext, onPrev }) => {
  return (
    <>
      <Divider variant="middle" />
      <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: 2, gap: 6 }}
      >
        <Button variant="outlined" onClick={onPrev}>
          <ArrowBackIosIcon />
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" color="success" onClick={onSubmit}>
            Mentés
          </Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button variant="contained" color="error" onClick={onCancel}>
            Mégse
          </Button>
        </Box>
        <Button variant="contained" onClick={onNext}>
          <ArrowForwardIosIcon />
        </Button>
      </Container>
    </>
  );
};
