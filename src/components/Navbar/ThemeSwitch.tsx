import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ListItem, useTheme, IconButton, Tooltip } from "@mui/material";

interface ThemeSwitchProps {
  switchTheme: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ switchTheme }) => {
  const theme = useTheme();
  return (
    <ListItem sx={{ cursor: "pointer" }} onClick={switchTheme}>
      <Tooltip title="Dark Mode On/Off">
        <IconButton sx={{ color: theme.palette.text.primary }}>
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

export default ThemeSwitch;
