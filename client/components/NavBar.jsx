import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ComputerIcon from '@mui/icons-material/Computer';
import LoginModal from './LoginModal.jsx';
import SignupModal from './SignUpModal.jsx';
import axios from 'axios';

const pagesObject = [
  { name: 'Projects', id: 'project-browsing-view' },
  { name: 'Planning', id: 'project-planning-view' },
];

const loggedIn = ['Logout'];
const loggedOut = ['Login', 'Sign Up'];

function ResponsiveAppBar({ setViewHandler, isLoggedIn, handleSessionAction }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loginError, setLoginError] = React.useState('');
  const [signupError, setSignupError] = React.useState('');

  const handleModalButtonClick = (
    username,
    password,
    confirmPassword,
    action
  ) => {
    if (action === 'login') {
      tryLogin(username, password);
    }

    if (action === 'create-user') {
      if (password !== confirmPassword) {
        setSignupError('Passwords must match');
      } else {
        tryRegister(username, password);
      }
    }
  };

  async function tryLogin(username, password) {
    try {
      const response = await axios.post('/users/login', {
        username: username,
        password: password,
      });
      console.log(response.data);
      handleSessionAction('login');
    } catch (error) {
      setLoginError(error.response.data.err);
    }
  }

  async function tryRegister(username, password) {
    try {
      const response = await axios.post('/users/register', {
        username: username,
        password: password,
      });
    } catch (error) {
      setSignupError(error.response.data.err);
    }
  }

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
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <ComputerIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AmpliSaas
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pagesObject.map((page) => (
                <MenuItem key={page.id} onClick={setViewHandler}>
                  <Typography sx={{ textAlign: 'center' }} id={page.id}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ComputerIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AmpliSaas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pagesObject.map((page) => (
              <Button
                key={page.id}
                id={page.id}
                onClick={setViewHandler}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
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
              {isLoggedIn &&
                loggedIn.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      sx={{ textAlign: 'center' }}
                      onClick={() => handleSessionAction('logout')}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              {!isLoggedIn &&
                loggedOut.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}></Typography>
                    {setting === 'Login' && (
                      <LoginModal
                        loginError={loginError}
                        handleModalButtonClick={handleModalButtonClick}
                      />
                    )}
                    {setting === 'Sign Up' && (
                      <SignupModal
                        signupError={signupError}
                        handleModalButtonClick={handleModalButtonClick}
                      />
                    )}
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
