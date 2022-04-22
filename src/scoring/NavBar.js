import {
  AppBar,
  Container,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const NavBar = ({ title, isDark, setTheme }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Container sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Pontozó rendszer: {title}</Typography>
            <FormControlLabel
              control={<Switch checked={isDark} onChange={setTheme} />}
              label={<DarkModeIcon />}
           />
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
