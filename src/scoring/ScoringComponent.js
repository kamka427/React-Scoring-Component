import { TabContext, TabPanel, TabList } from "@mui/lab";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Stack,
} from "@mui/material";

import { Tabs } from "./Tabs";
import { Nav } from "./Nav";
import { FormButtons } from "./FormButtons";
import { NumberCard, NumberComponent } from "./NumberCard";
import { BooleanCard } from "./BooleanCard";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { Box } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export function ScoringComponent({ criteria, onSubmit, onCancel }) {
  console.log(criteria);

  const handleOnSubmit = () => {};
  const handleOnCancel = () => {};

  const taskNames = criteria.tasks.map((task) => task.name);
  const tasks = criteria.tasks.map((task) => {
    return task.aspects.map((aspect, i) => {
      switch (aspect.type) {
        case "number":
          console.log("Number");
          return <NumberCard key={i} index={i} aspect={aspect} />;

        case "list":
          console.log("List");

          break;

        case "boolean":
          console.log("Boolean");
          return <BooleanCard key={i} index={i} aspect={aspect} />;

        default:
          console.log("Default");
          break;
      }
    });
  });

  //toggle dark theme
  const [darkThemeEnabled, toggleTheme] = useState(false);

  const toggleThemeHandler = () => {
    toggleTheme(!darkThemeEnabled);
  };

  const theme = darkThemeEnabled ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />

          <Nav title={criteria.name} isDark={darkThemeEnabled} setTheme={toggleThemeHandler} />
          <Tabs taskNames={taskNames} tasks={tasks} />
          <FormButtons onSubmit={onSubmit} onCancel={onCancel} />
      </ThemeProvider>
    </>
  );
}
