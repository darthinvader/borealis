import { List } from "@mui/material";
import ThemeSwitch from "../ThemeSwitch";
import Login from "../Login";
import NavbarLinks from "../NavbarLinks";
interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const BigNavbarContent: React.FC<Navbar> = ({ links, switchTheme }) => {
  return (
    <>
      <List sx={{ maxWidth: 1200, display: "flex" }}>
        <NavbarLinks links={links} />
      </List>

      <List sx={{ display: "flex" }}>
        <ThemeSwitch switchTheme={switchTheme} />
        <Login />
      </List>
    </>
  );
};

export default BigNavbarContent;
