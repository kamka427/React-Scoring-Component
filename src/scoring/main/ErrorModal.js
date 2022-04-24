import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
}) => {
  //determine if modal is booleaninput or numberinput or selectinput

  let val = formState.results.find((result) => result.id === aspect.id);
    let err = formState.errors.find((err) => err.id === aspect.id);
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
    case "boolean":
      component = (
        <BooleanInput
          val={val}
          aspect={aspect}
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
    <Modal
      open={modalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" >
          Text in a modal
        </Typography>
        {component}
      </Box>
    </Modal>
  );
};
