import { Box, Container, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export const NumberInput = ({
  aspect,
  val,
  err,
  addResult,
  removeResult,
  setError,
}) => {
  const [value, setValue] = useState(val ? val.value : "");

  const validateInput = (value) => {
    if (aspect.required && value === "") {
      setError({
        id: aspect.id,
        aspect: aspect,
        message: "Kötelező kitölteni!",
      });
      return false;
    }
    if (value !== "") {
      if (isNaN(value)) {
        setError({
          id: aspect.id,
          value: value,
          aspect: aspect,
          message: "Csak szám lehet!",
        });
        return false;
      }
      if (Number(value) > aspect.maxValue) {
        setError({
          id: aspect.id,
          value: value,
          aspect: aspect,
          message: "Túl nagy pontszám!",
        });
        return false;
      }
      if (Number(value) < 0) {
        setError({
          id: aspect.id,
          value: value,
          aspect: aspect,
          message: "Negatív pontszám!",
        });
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    if (validateInput(value)) {
      value !== ""
        ? addResult({
            id: aspect.id,
            value: Number(value),
          })
        : removeResult(aspect.id);
    }
  };

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            required={aspect.required}
            label={aspect.required ? "Kötelező" : "Opcionális"}
            value={(err ? err.value : val ? val.value : value) || ""}
            onChange={handleChange}
            error={err !== undefined}
            helperText={err !== undefined ? err.message : ""}
          ></TextField>
          <Tooltip
            title={aspect.description ?? "Nincs leírása"}
            placement="right"
            arrow
          >
            <Typography
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                alignSelf: "self-start",
                padding: 1,
                paddingX: 2,
                borderTopRightRadius: 7,
                borderBottomRightRadius: 7,
              }}
            >
              / {aspect.maxValue}
            </Typography>
          </Tooltip>
        </Box>
      </Container>
    </>
  );
};
