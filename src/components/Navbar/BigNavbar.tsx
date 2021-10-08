import { List, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ThemeSwitch from "./ThemeSwitch";
import Login from "./Login";
import NavLine from "./NavLine";
import NavbarLinks from "./NavbarLinks";
interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const BigNavbar: React.FC<Navbar> = ({ links, switchTheme }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: theme.custom.navbar,
          height: 50,
        }}
      >
        <List sx={{ maxWidth: 1200, display: "flex" }}>
          <NavbarLinks links={links} />
        </List>

        <List sx={{ display: "flex" }}>
          <ThemeSwitch switchTheme={switchTheme} />
          <Login />
        </List>
      </Box>
      <NavLine />
    </>
  );
};

export default BigNavbar;
