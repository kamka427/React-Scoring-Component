import {
  Box,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const ListInput = ({ aspect }) => {
  const items = Object.keys(aspect.values).map((key, index) => {
    return {
      key: key,
      value: Object.values(aspect.values)[index],
    };
  });

  const list = items.map((item, i) => {
    return (
      <>
        <Container
          key={i}
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
              borderColor: grey[600],
              borderRadius: 2,
            }}
          >
            <FormControlLabel
              value={i}
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
                backgroundColor: blue[600],
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
  });

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <RadioGroup
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {list}
        </RadioGroup>
      </Container>
    </>
  );
};
