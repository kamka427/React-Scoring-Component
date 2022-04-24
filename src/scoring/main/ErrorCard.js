import { Divider, Stack, Typography } from "@mui/material";

export const ErrorCard = ({ missing }) => {
  return (
    <>
      <Stack sx={{ textAlign: "center", gap: 2, padding: 2 }}>
        <Divider variant="middle" />
        <Typography color="error" variant="h6">
          Nincsenek megadva {missing}!
        </Typography>
        <Divider variant="middle" />
      </Stack>
    </>
  );
};
