import {
    Card,
    CardContent,
    Checkbox,
    Container,
    FormControlLabel,
    TextField,
    Typography,
    Stack,
    Divider
  } from "@mui/material";
  import { Box } from "@mui/system";
  
  export const BooleanCard = ({ index, aspect }) => {
    return (
      <Container maxWidth="md">
          <Divider variant="middle" />
      <Stack>
        <CardContent sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="body1">{index+1}.</Typography>
          <Typography variant="h6">{aspect.name}</Typography>
          
          <FormControlLabel control={<Checkbox/>} label="Teljesül" />

           {aspect.description && (
          <Typography variant="body1">{aspect.description}</Typography>
        )}
        </CardContent>
      </Stack>
      </Container>
    );
  };
  