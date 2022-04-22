import { Box, Container, FormControlLabel, Radio, Typography } from "@mui/material";

export const ListBox = ({ aspect, item, handleChange }) => {
    return (
        <>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
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
              <FormControlLabel
                value={item.value}
                onChange={handleChange}
                control={<Radio />}
                label={item.key}
                required={aspect.required}
                sx={{
                  width: "100%",
                  paddingX: 1,
                }}
              />
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
                {item.value}
              </Typography>
            </Box>
          </Container>
        </>
      );
};
