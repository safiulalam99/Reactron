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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <Link to={`/revenue`} style={{ textDecoration: "none" }}>
          <ListItem key={"revenue"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"revenue"} />
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

        <Link to={`/profit`} style={{ textDecoration: "none" }}>
          <ListItem key={"profit"} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"profit"} />
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
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to={`/revenue`} style={{ textDecoration: "none" }}>
              <Button key={"revenue"} sx={{ color: "#fff" }}>
                Revenue
              </Button>
            </Link>
            <Link to={`/profit`} style={{ textDecoration: "none" }}>
              <Button key={"profit"} sx={{ color: "#fff" }}>
                profit
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