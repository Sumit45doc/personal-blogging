import { AppBar, Container, Toolbar, Box, Button, styled, Typography, Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Drawer } from '@mui/material'
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { PATH_ADMIN, PATH_HOME } from '../../../state/path';
import { useSelector } from '../../../redux/store';
import AuthOptionButtons from '../AuthOptionButton';


const drawerWidth = 240;

const { home, personalBlog, designBlog, about, contact } = PATH_HOME
const { blogsList } = PATH_ADMIN
const pages = [
    { name: 'Home', url: home },
    { name: 'Personal Blog', url: personalBlog },
    { name: 'Design blog', url: designBlog },
    { name: 'About', url: about },
    { name: 'Contact', url: contact }
]

function Header() {
    const { role } = useSelector(state => state.user)
    const isAdmin = role === 'admin'
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                PERSONAL BLOG
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={
                            <AuthOptionButtons />
                        } />
                    </ListItemButton>
                </ListItem>
                {pages.map((item) => (
                    <ListItem key={item.url} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <NavLink to={`/${item.url}`}
                                    style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'black' : '#7b7373' })}
                                >
                                    {item.name}
                                </NavLink>
                            } />
                        </ListItemButton>
                    </ListItem>
                ))}
                {isAdmin && (
                    <ListItem key={blogsList} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={
                                <NavLink to={`/${blogsList}`}
                                    style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'black' : '#7b7373' })}
                                >
                                    admin
                                </NavLink>
                            } />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component={'header'}>
            <Box sx={{ display: 'flex' }}>
                <Bar position='static'>
                    <Container maxWidth="xl">
                        <Toolbar sx={{ my: 1 }} >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, cursor: 'pointer' }}
                                onClick={() => navigate('/home')}
                            >
                                PERSONAL BLOG
                            </Typography>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box sx={{ display: 'inline-block', my: 2, mx: 1, color: 'rgba(255,255,255,0.6)' }}
                                >
                                    <AuthOptionButtons />
                                </Box>
                                {pages.map((page) => (
                                    <Button
                                        type="button"
                                        key={page.url}
                                        sx={{ my: 2, mx: 1, color: 'rgba(255,255,255,0.6)', '&:hover': { color: 'white' } }}
                                    >
                                        <NavLink to={`/${page.url}`}
                                            style={({ isActive }) => {
                                                return {
                                                    textDecoration: 'none',
                                                    color: isActive ? 'white' : 'inherit'
                                                };
                                            }}
                                        >
                                            {page.name}
                                        </NavLink>
                                    </Button>
                                ))}
                                {isAdmin && (
                                    <Button
                                        type="button"
                                        key={blogsList}
                                        sx={{ my: 2, mx: 1, color: 'rgba(255,255,255,0.6)', ':hover': { color: 'white' } }}
                                    >
                                        <NavLink to={`/${blogsList}`}
                                            style={({ isActive }) => {
                                                return {
                                                    textDecoration: 'none',
                                                    color: isActive ? 'white' : 'inherit'
                                                };
                                            }}
                                        >
                                            Admin
                                        </NavLink>
                                    </Button>
                                )}
                            </Box>
                        </Toolbar>
                    </Container>
                </Bar>
            </Box>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

const Bar = styled(AppBar)({
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none'
})

export default Header