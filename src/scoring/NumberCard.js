import {
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export const NumberCard = ({ index, aspect }) => {
  return (
    <Container maxWidth="md">
      <Divider variant="middle" />
    <Stack>
      <CardContent sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="body1">{index+1}.</Typography>
        <Typography variant="h6">{aspect.name}</Typography>
        <Box
          sx={{
            display: "flex",
            padding: 1,
          }}
        >
          <TextField
            type="number"
            size="small"
            required={aspect.required}
            variant="outlined"
            label={aspect.required ? "Required" : "Optional"}
          ></TextField>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              background: "blue",
              padding: 1,
              borderRadius: 1,
            }}
          >
            /{aspect.maxValue}
          </Typography>
        </Box>
        {aspect.description && (
        <Typography variant="body1">{aspect.description}</Typography>
      )}
      </CardContent>
    </Stack>
    </Container>
  );
};
