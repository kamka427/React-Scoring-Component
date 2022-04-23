import {
  Container,
  CssBaseline,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Tasks } from "./Tasks";
import { NavBar } from "./NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ErrorCard } from "./ErrorCard";

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

  const addResult = (e, aspect) => {
    if (
      formState.results.find((result) => result.id === aspect.id) === undefined
    ) {
      setFormState({
        ...formState,
        results: [
          ...formState.results,
          {
            id: aspect.id,
            value: Number(e.target.value),
          },
        ],
      });
    } else {
      setFormState({
        ...formState,
        results: formState.results.map((result) => {
          if (result.id === aspect.id) {
            return {
              id: aspect.id,
              value: Number(e.target.value),
            };
          } else {
            return result;
          }
        }),
      });
    }
  };

  const removeResult = (e, aspect) => {
    setFormState({
      ...formState,
      results: formState.results.filter((result) => result.id !== aspect.id),
    });
  };

  const setError = (error) => {
    setFormState({
      ...formState,
      errors: [
        ...formState.errors,
        {
          id: error.id,
          message: error.message,
        },
      ],
    });
  };

  const clearError = (error) => {
    setFormState({
      ...formState,
      errors: formState.errors.filter((err) => err.id !== error.id),
    });
  };

  const handleSubmit = () => {
    onSubmit({ results: formState.results });
  };

  const handleCancel = () => {
    onCancel({ results: formState.results });
  };

  const taskNames = criteria.tasks.map((task) => task.name);

  const taskAspects = criteria.tasks.map((task) => task.aspects);

  const [darkThemeEnabled, toggleTheme] = useState(false);

  const toggleThemeHandler = () => {
    toggleTheme(!darkThemeEnabled);
  };

  const theme = darkThemeEnabled ? darkTheme : lightTheme;

  const aspectsCount = taskAspects.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);

  const points = formState.results.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);

  const maxPoints = taskAspects.reduce((acc, cur) => {
    return (
      acc +
      cur.reduce((acc, cur) => {
        if(cur.required) {
        if ( cur.type === "number") {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar
          title={criteria.name}
          isDark={darkThemeEnabled}
          setTheme={toggleThemeHandler}
        />
        {taskNames.length > 0 ? (
          <>
            <Container>
              <LinearProgress
                variant="determinate"
                sx={{ margin: 1, padding: 1, borderRadius: 1 }}
                value={(formState.results.length / aspectsCount) * 100}
              />
              <Typography variant="h6" gutterBottom>
                {" "}
                {`${points}/${maxPoints}`}
              </Typography>
              <Tasks
                taskNames={taskNames}
                aspects={taskAspects}
                formState={formState}
                addResult={addResult}
                removeResult={removeResult}
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
