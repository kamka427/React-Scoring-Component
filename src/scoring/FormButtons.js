import { Button, Box, Stack, Container, Divider } from "@mui/material";

export const FormButtons = ({ onSubmit, onCancel }) => {
  return (
      <>
      <Divider variant="middle" />
      <Container maxWidth="md">
    <Box sx={{display: 'flex', justifyContent: 'center', gap: 1, padding: 1}}>
      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Submit
      </Button>
      <Button variant="outlined" color="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </Box>
    </Container>
    </>
  );
};
