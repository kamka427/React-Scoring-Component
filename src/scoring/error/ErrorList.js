import { Alert, Button} from "@mui/material";
import { Box } from "@mui/system";
import {  useState } from "react";
import { ErrorModal } from "./ErrorModal";

export const ErrorList = ({
  formState,
  criteria,
  addResult,
  removeResult,
  setError,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => setModalOpen(false);

  const [actError, setActError] = useState(null);

  const openModal = (err) => {
    setActError(err.id);
    handleOpen();
  };

  const errorList = formState.errors.map((err, i) => {
    let taskName = criteria.tasks.find((task) => {
      return (
        task.aspects.find((aspect) => aspect.id === err.aspect.id) !== undefined
      );
    }).name;

    return (
      <Box key={i} sx={{ marginTop: 2, minWidth: "60%" }}>
        <Alert
          severity="error"
          variant="outlined"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => {
                openModal(err);
                handleOpen();
              }}
            >
              Megnyitás
            </Button>
          }
        >
          {taskName} / {err.aspect.name}: {err.message}
        </Alert>
        {actError === err.id && (
          <ErrorModal
            modalOpen={modalOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
            addResult={addResult}
            removeResult={removeResult}
            setError={setError}
            taskName={
              criteria.tasks.find((task) => {
                return (
                  task.aspects.find((aspect) => aspect.id === err.aspect.id) !==
                  undefined
                );
              }).name
            }
            val={err.value}
            err={err}
            aspect={err.aspect}
          />
        )}
      </Box>
    );
  });

  return <>{errorList}</>;
};
