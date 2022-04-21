import {
  AppBar,
  Container,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

export const Nav = ({ title, isDark, setTheme }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Container sx={{display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Pontozó rendszer: {title}</Typography>
          <FormControlLabel            
            control={<Switch checked={isDark} onChange={setTheme} />}
            label="Sötét mód"
          />
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
