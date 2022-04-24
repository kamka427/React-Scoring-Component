import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Tooltip,
} from "@mui/material";
import { BooleanInput } from "../input/BooleanInput";
import { ErrorCard } from "../ErrorCard";
import { NumberInput } from "../input/NumberInput";
import { SelectInput } from "../input/SelectInput";

export const AspectTable = ({
  aspects,
  formState,
  addResult,
  removeResult,
  setError,
}) => {
  const rows = aspects.map((aspect, i) => {
    let component;
    let val = formState.results.find((result) => result.id === aspect.id);
    let err = formState.errors.find((err) => err.id === aspect.id);
    switch (aspect.type) {
      case "number":
        component = (
          <NumberInput
            key={i}
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
            key={i}
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
            key={i}
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
      <TableRow key={i}>
        <TableCell align="center">{i + 1}</TableCell>
        {err ? (
          <TableCell align="center" sx={{ color: "error.main" }}>
            {aspect.name}
          </TableCell>
        ) : (
          <TableCell align="center">{aspect.name}</TableCell>
        )}
        <TableCell align="center">
          {component}
          
          </TableCell>
        {aspect.description ? (
          <TableCell align="center">{aspect.description}</TableCell>
        ) : (
          <TableCell align="center">Nincs leírása</TableCell>
        )}
      </TableRow>
    );
  });

  return (
    <>
      {aspects.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Szempont megnevezése</TableCell>
                <TableCell align="center">Pontozás</TableCell>
                <TableCell align="center">Szempont leírása</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        <ErrorCard missing="szempontok" />
      )}
    </>
  );
};
