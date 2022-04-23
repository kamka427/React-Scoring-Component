import { Container, CssBaseline } from "@mui/material";
import { Tasks } from "./Tasks";
import { NavBar } from "./NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ErrorCard } from "./ErrorCard";
import { Status } from "./Status";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export function ScoringComponent({ criteria, onSubmit, onCancel }) {
  console.log(criteria);

  const [formState, setFormState] = useState({
    results: [],
    errors: [],
  });

  useEffect(() => {
    if (formState.results.length === 0) {
      criteria.tasks.forEach((task) => {
        task.aspects.forEach((aspect) => {
          if (aspect.type === "boolean") {
            setFormState((prevState) => ({
              ...prevState,
              results: [
                ...prevState.results,
                {
                  id: aspect.id,
                  value: 0,
                },
              ],
            }));
          }
        });
      });
    }
  }, [setFormState, criteria, formState.results]);

  const addResult = (result) => {
    if (formState.results.find((res) => res.id === result.id) === undefined) {
      setFormState({
        ...formState,
        results: [...formState.results, result],
        errors: formState.errors.filter((err) => err.id !== result.id),
      });
    } else {
      setFormState({
        ...formState,
        results: formState.results.map((res) => {
          if (res.id === result.id) {
            return result;
          } else {
            return res;
          }
        }),
        errors: formState.errors.filter((err) => err.id !== result.id),
      });
    }
  };

  const removeResult = (id) => {
    setFormState({
      ...formState,
      results: formState.results.filter((result) => result.id !== id),
    });
  };

  const setError = (error) => {
    if (formState.errors.find((e) => e.id === error.id) === undefined) {
      setFormState({
        ...formState,
        results: formState.results.filter((result) => result.id !== error.id),
        errors: [...formState.errors, error],
      });
    } else {
      setFormState({
        ...formState,
        results: formState.results.filter((result) => result.id !== error.id),
        errors: formState.errors.map((e) => {
          if (e.id === error.id) {
            return error;
          } else {
            return e;
          }
        }),
      });
    }
  };

  const handleSubmit = () => {
    onSubmit({ results: formState.results });
  };

  const handleCancel = () => {
    onCancel({ results: formState.results });
  };

  const [darkThemeEnabled, toggleTheme] = useState(true);

  const toggleThemeHandler = () => {
    toggleTheme(!darkThemeEnabled);
  };

  const theme = darkThemeEnabled ? darkTheme : lightTheme;

  const aspectsReqCount = criteria.tasks
    .map((task) => task.aspects)
    .reduce((acc, cur) => {
      return (
        acc +
        cur.reduce((acc, cur) => {
          if (cur.required) {
            return acc + 1;
          }
          return acc;
        }, 0)
      );
    }, 0);

  const points = formState.results.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);

  const maxReqPoints = criteria.tasks
    .map((task) => task.aspects)
    .reduce((acc, cur) => {
      return (
        acc +
        cur.reduce((acc, cur) => {
          if (cur.required) {
            if (cur.type === "number") {
              return acc + cur.maxValue;
            } else if (cur.type === "boolean") {
              return acc + cur.value;
            } else if (cur.type === "list") {
              return acc + Math.max(...Object.values(cur.values));
            }
          }
          return acc;
        }, 0)
      );
    }, 0);

  const booleanCount = criteria.tasks
    .map((task) => task.aspects)
    .reduce((acc, cur) => {
      return (
        acc +
        cur.reduce((acc, cur) => {
          if (cur.type === "boolean") {
            return acc + 1;
          }
          return acc;
        }, 0)
      );
    }, 0);

  const progress = Math.min(
    formState.results.length - booleanCount,
    maxReqPoints
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar
          title={criteria.name}
          isDark={darkThemeEnabled}
          setTheme={toggleThemeHandler}
        />
        {criteria.tasks.map((task) => task.name).length > 0 ? (
          <>
            <Container>
              <Status
                points={points}
                maxReqPoints={maxReqPoints}
                filledCount={progress}
                aspectsReqCount={aspectsReqCount}
              />
              <Tasks
                criteria={criteria}
                formState={formState}
                addResult={addResult}
                removeResult={removeResult}
                setError={setError}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </Container>
          </>
        ) : (
          <ErrorCard missing="feladatok" />
        )}
      </ThemeProvider>
    </>
  );
}
