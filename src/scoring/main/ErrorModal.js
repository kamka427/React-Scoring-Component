import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { BooleanInput } from "../input/BooleanInput";
import { NumberInput } from "../input/NumberInput";
import { SelectInput } from "../input/SelectInput";

export const ErrorModal = ({
  aspect,
  formState,
  addResult,
  removeResult,
  setError,
  modalOpen,
  handleClose,
  err,
}) => {
  useEffect(() => {
    handleClose();
  }, []);
  let val = formState.results.find((result) => result.id === aspect.id);
  let component;

  switch (aspect.type) {
    case "number":
      component = (
        <NumberInput
          aspect={aspect}
          val={val}
          err={err}
          addResult={addResult}
          removeResult={removeResult}
          setError={setError}
        />
      );
      break;
    case "list":
      component = (
        <SelectInput
          aspect={aspect}
          val={val}
          err={err}
          addResult={addResult}
          removeResult={removeResult}
          setError={setError}
        />
      );
      break;
      default:
        break;
  }

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          paddingTop: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: 3 }}
        >
          Text in a modal
        </Typography>
        {component}
      </Box>
    </Modal>
  );
};
