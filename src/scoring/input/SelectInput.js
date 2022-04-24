import {
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const SelectInput = ({
  aspect,
  val,
  err,
  addResult,
  removeResult,
  setError,
}) => {
  const items = Object.keys(aspect.values).map((key, index) => {
    return {
      key: key,
      value: Object.values(aspect.values)[index],
    };
  });

  const [selection, setSelection] = useState(val ? val.value : "");

  const validateInput = (value) => {
    if (aspect.required && value === "") {
      setError({
        id: aspect.id,
        message: "Kötelező kitölteni!",
      });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelection(value);
    if (validateInput(value)) {
      console.log(value);
      value !== ""
      ? addResult({
        id: aspect.id,
        value: Number(value),
      })
      : removeResult(aspect.id);
    }

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
          <FormControl
            required={aspect.required}
            sx={{ minWidth: 120 }}
            error={err !== undefined}
          >
            <InputLabel>Értékelés</InputLabel>
            <Select
              label="Értékelés"
              value={
               selection
              }
              onChange={handleChange}
            >
              {list}
              <MenuItem value="">Üres</MenuItem>
            </Select>
            <FormHelperText>
              {err !== undefined ? err.message : ""}
            </FormHelperText>
          </FormControl>
          <Tooltip title={aspect.description ?? "Nincs leírása"} placement="right" arrow>
          <Typography
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              alignSelf: "self-start",
              padding: 2,
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            / {maxValue}
          </Typography>
          </Tooltip>
        </Box>
      </Container>
    </>
  );
};
