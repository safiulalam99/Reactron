import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Reactron
      </Typography>
      <Divider />
      <List>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <ListItem key={"home"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"home"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={`/employee`} style={{ textDecoration: "none" }}>
          <ListItem key={"employee"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"employee"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={`/project`} style={{ textDecoration: "none" }}>
          <ListItem key={"project"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"project"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            REACTRON
          </Typography>
          <Box sx={{ display: { xs: "n  one", sm: "block" } }}>

            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Button key={"home"} sx={{ color: "#fff" }}>
                home
              </Button>
            </Link>
            <Link to={`/project`} style={{ textDecoration: "none" }}>
              <Button key={"project"} sx={{ color: "#fff" }}>
                Project
              </Button>
            </Link>
            <Link to={`/employee`} style={{ textDecoration: "none" }}>
              <Button key={"employee"} sx={{ color: "#fff" }}>
                employee
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
