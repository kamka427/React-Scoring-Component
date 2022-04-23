import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  LinearProgress,
} from "@mui/material";
import { BooleanInput } from "./BooleanInput";
import { ErrorCard } from "./ErrorCard";
import { ListInput } from "./ListInput";
import { NumberInput } from "./NumberInput";
import { SelectInput } from "./SelectInput";

export const AspectTable = ({
  aspects,
  formState,
  addResult,
  removeResult,
}) => {
  const rows = aspects.map((aspect, i) => {
    let component;
    switch (aspect.type) {
      case "number":
        component = (
          <NumberInput
            key={i}
            aspect={aspect}
            formState={formState}
            addResult={addResult}
            removeResult={removeResult}
          />
        );
        break;
      case "list":
        component = (
          <SelectInput
            key={i}
            aspect={aspect}
            formState={formState}
            addResult={addResult}
            removeResult={removeResult}
          />
        );
        break;
      case "boolean":
        component = (
          <BooleanInput
            key={i}
            aspect={aspect}
            formState={formState}
            addResult={addResult}
            removeResult={removeResult}
          />
        );
        break;
      default:
        break;
    }

    return (
      <TableRow key={i}>
        <TableCell align="center">{i + 1}</TableCell>
        <TableCell align="center">{aspect.name}</TableCell>
        <TableCell align="center">{component}</TableCell>
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
