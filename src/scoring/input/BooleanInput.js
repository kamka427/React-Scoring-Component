import {
  Box,
  Checkbox,
  Container,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const BooleanInput = ({ aspect, val, addResult, removeResult }) => {
  const [value, setValue] = useState(val ? true : false);

  const handleChange = (e) => {
    setValue(e.target.checked);
    const value = e.target.value;
    e.target.checked
      ? addResult({
          id: aspect.id,
          value: Number(value),
        })
      : removeResult(aspect.id);
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
          <Tooltip
            title={aspect.description ?? "Nincs leírása"}
            placement="right"
            arrow
          >
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
          </Tooltip>
        </Box>
      </Container>
    </>
  );
};
