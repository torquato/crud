import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Crud from './page/crud';
import Home from './page/home';
import Crudhook from './page/crudhook';
import "./App.css"
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Button, Container, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
const pages = ['Products', 'crud', 'crudhook'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function App(){


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Crud Exemplo
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <Link style={{ color: 'white', display:'block',  paddingLeft:'10px',  textDecoration:'none' }} to={"/"+page}>{page}</Link>
                  // <MenuItem key={page} onClick={handleCloseNavMenu}>
                  //   <Typography textAlign="center">
                  //    </Typography>
                  // </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Crud Exemplo
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link style={{ color: 'white', paddingLeft:'10px', display:'block',  textDecoration:'none' }} to={"/"+page}>{page}</Link>
                // <Button
                //   key={page}
                //   onClick={handleCloseNavMenu}
                //   sx={{ my: 2, color: 'white', display: 'block' }}
                // >
                //   {page}
                // </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" style={{display:'block'}}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <h1>Exemplo Crud</h1>


        <div>
          <nav >
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/crud"}>Crud Manual</Link></li>
              <li><Link to={"/crudhook"}>Crud hook</Link></li>
            </ul>
          </nav>
        </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/crudhook" element={<Crudhook />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>URL inválida !</p>
            </main>
          } />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
