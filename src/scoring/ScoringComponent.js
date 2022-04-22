import {
  CssBaseline,
  LinearProgress,
} from "@mui/material";
import { Tasks } from "./Tasks";
import { NavBar } from "./NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
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

  const taskNames = criteria.tasks.map((task) => task.name);

  const aspects = criteria.tasks.map((task) => task.aspects);

  const [darkThemeEnabled, toggleTheme] = useState(false);

  const toggleThemeHandler = () => {
    toggleTheme(!darkThemeEnabled);
  };

  const theme = darkThemeEnabled ? darkTheme : lightTheme;

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
            <LinearProgress
              variant="determinate"
              sx={{ margin: 1, padding: 1, borderRadius: 1 }}
              value={50}
            />
            <Tasks
              taskNames={taskNames}
              aspects={aspects}
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          </>
        ) : (
          <ErrorCard missing="feladatok"/>
        )}
      </ThemeProvider>
    </>
  );
}
