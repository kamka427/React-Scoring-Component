import {
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const SelectInput = ({
  aspect,
  formState,
  addResult,
  removeResult,
  setError,
  clearError,
}) => {
  const items = Object.keys(aspect.values).map((key, index) => {
    return {
      key: key,
      value: Object.values(aspect.values)[index],
    };
  });

  const val = formState.results.find((result) => result.id === aspect.id);
  const err = formState.errors.find((err) => err.id === aspect.id);

  const [value, setValue] = useState(val ? val.value : "");
  const [errorLocal, setLocalError] = useState(err ? err.message : "");

  const unsetError = () => {
    clearError(aspect.id);
    setLocalError("");
  };

  const addError = (error) => {
    unsetError();
    setError(error);
    setLocalError(error.message);
  };

  const validateInput = (value) => {
    unsetError();
    if (aspect.required && value === "") {
      addError({
        id: aspect.id,
        message: "Kötelező kitölteni!",
      });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    if (validateInput(value)) {
      e.target.value !== ""
        ? addResult(value, aspect.id)
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
            error={errorLocal !== ""}
          >
            <InputLabel>Értékelés</InputLabel>
            <Select label="Értékelés" value={value} onChange={handleChange}>
              {list}
              <MenuItem value="">Törlés</MenuItem>
            </Select>
            <FormHelperText>
              {errorLocal !== "" ? errorLocal : ""}
            </FormHelperText>
          </FormControl>
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
        </Box>
      </Container>
    </>
  );
};
