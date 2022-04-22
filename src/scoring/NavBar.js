import {
  AppBar,
  Container,
  ToggleButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const NavBar = ({ title, isDark, setTheme }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Pontozó rendszer: {title}</Typography>

            <ToggleButton
              value={isDark}
              selected={isDark}
              onChange={setTheme}
              sx={{ color: "white" }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </ToggleButton>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
