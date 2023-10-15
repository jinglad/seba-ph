import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { setToken, setUser } from "../redux/userSlice";
import { v4 as uuidv4 } from "uuid";
import { Popover } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import { Link as ScrollLink, scroller } from "react-scroll";

const pages = [
  {
    id: uuidv4(),
    name: "Home",
    route: "/",
  },
  {
    id: uuidv4(),
    name: "Doctors",
    route: "/doctors",
  },
  {
    id: uuidv4(),
    name: "Hospitals",
    route: "/hospitals",
  },
  // {
  //   id: uuidv4(),
  //   name: "Blogs",
  //   route: "/blogs",
  // },
  {
    id: uuidv4(),
    name: "About",
    route: "/about",
  },
  {
    id: uuidv4(),
    name: "Blogs",
    route: "",
    to: "blogs",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [cookies, setCookie, removeCookie] = useCookies(["seba-token"]);

  const [anchorElLogout, setAnchorElLogout] =
    React.useState<null | HTMLElement>(null);

  const { user, token } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLogoutMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLogout(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const location = useLocation();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser({}));
      dispatch(setToken(""));
      // removeCookie("seba-token");
      setAnchorElLogout(null);
    });
  };

  const scrollTarget = (target: string) => {
    scroller.scrollTo(target, { smooth: true });
  };

  const scrollToPage = async (target: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    scrollTarget(target);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#fff",
        color: "black",
        py: 2,
      }}
    >
      <div className="container mx-auto">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="Seba"
              sx={{
                height: "80px",
                py: 1,
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                page.to ? (
                  <MenuItem
                    key={page.id}
                    onClick={() => {
                      handleCloseNavMenu();
                      scrollToPage(page.to);
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.route}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="Seba"
              sx={{
                height: "80px",
                py: 1,
              }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.to ? (
                <Button
                  key={page.id}
                  onClick={() => {
                    scrollToPage(page.to);
                  }}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    mx: 1,
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  {page.name}
                </Button>
              ) : (
                <Button
                  key={page.id}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.route);
                  }}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    mx: 1,
                    fontSize: "16px",
                    textTransform: "capitalize",
                  }}
                >
                  {page.name}
                </Button>
              )
            )}
          </Box>

          <Box>
            {/* <Button sx={{ color: "black" }}>
              <SearchIcon />
            </Button> */}
            {token ? (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenLogoutMenu}
                  color="inherit"
                >
                  <AccountCircle
                    sx={{
                      fontSize: "40px",
                    }}
                  />
                </IconButton>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-primary  border-2 border-primary rounded px-3 py-1 mx-2 active:translate-y-1">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-white bg-primary px-3 py-1 rounded border-2 border-primary active:translate-y-1">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </Box>

          <Popover
            id="menu-appbar"
            anchorEl={anchorElLogout}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElLogout)}
            onClose={() => setAnchorElLogout(null)}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {user?.name}
              </Typography>

              <Link to="/dashboard">
                <MenuItem>Dashboard</MenuItem>
              </Link>

              {/* <MenuItem
                onClick={() => {
                  setAnchorElLogout(null);
                  navigate("/profile");
                }}
              >
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setAnchorElLogout(null);
                  navigate("/my-appointments/doctors");
                }}
              >
                <Typography textAlign="center">Doctor Appointments</Typography>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setAnchorElLogout(null);
                  navigate("/my-appointments/hospitals");
                }}
              >
                <Typography textAlign="center">
                  Hospitals Appointments
                </Typography>
              </MenuItem> */}

              <MenuItem
                onClick={() => {
                  // setAnchorElLogout(null);
                  handleLogout();
                  // navigate("/my-booking");
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    color: "red",
                  }}
                >
                  Logout
                </Typography>
              </MenuItem>
            </Box>
          </Popover>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;
