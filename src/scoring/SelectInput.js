import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ListBox } from "./ListBox";

export const SelectInput = ({ aspect, formState, addResult, removeResult }) => {
  const items = Object.keys(aspect.values).map((key, index) => {
    return {
      key: key,
      value: Object.values(aspect.values)[index],
    };
  });

  const val = formState.results.find((result) => result.id === aspect.id);

  const [value, setValue] = useState(val ? val.value : "");

  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.value !== "" ? addResult(e, aspect) : removeResult(e, aspect);
  };

  const list = items.map((item, i) => {
    return (
      <MenuItem key={i} value={item.value}>
        {item.key} - {item.value}
      </MenuItem>
    );
  });

  const maxValue = Math.max(...Object.values(aspect.values));

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
            borderRadius: 2,
          }}
        >
        <FormControl sx={{ minWidth: 120}}>
          <InputLabel>Értékelés</InputLabel>
          <Select label="Értékelés" value={value} onChange={handleChange}>
            {list}
            <MenuItem value="">Törlés</MenuItem>
          </Select>
        </FormControl>
        <Typography
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              height: "100%",
              paddingX: 2,
              paddingTop: 2,
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            / {maxValue}
          </Typography>
          </Box>
      </Container>
    </>
  );
};
