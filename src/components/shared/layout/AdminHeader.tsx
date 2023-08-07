import { AppBar, Container, Toolbar, Box, Button, styled, Typography, Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Drawer } from '@mui/material'
import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { PATH_ADMIN } from '../../../state/path';


const drawerWidth = 240;

const { blogsList, createBlog } = PATH_ADMIN

const pages = [
    { name: 'Blog List', url: blogsList },
    { name: 'Create Blog', url: createBlog },
]

type Props = {
    children: React.ReactNode
}

function AdminHeader({ children }: Props) {

    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Ruchita Samel
            </Typography>
            <Divider />
            <List>
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
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <>
            <Box>
                <Box sx={{ display: 'flex', backgroundColor: '#27125a' }}>
                    <Bar position='static'>
                        <Container maxWidth="xl">
                            <Toolbar sx={{ my: 1 }} >
                                <IconButton
                                    color="default"
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
                                    Ruchita Samel
                                </Typography>
                                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                    {pages.map((page) => (
                                        <Button
                                            type="button"
                                            key={page.url}
                                            sx={{ my: 2, mx: 1, color: 'rgba(255,255,255,0.6)', ':hover': { color: 'white' } }}
                                        >
                                            <NavLink to={`/${page.url}`}
                                                style={({ isActive }) => {
                                                    return {
                                                        textDecoration: 'none',
                                                        color: isActive ? 'white' : 'rgba(255,255,255,0.6)'
                                                    };
                                                }}
                                            >
                                                {page.name}
                                            </NavLink>
                                        </Button>
                                    ))}
                                </Box>
                            </Toolbar>
                        </Container>
                    </Bar>
                </Box>
                <Box component="nav" >
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
            {children}
        </>
    )
}

const Bar = styled(AppBar)({
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none'
})

export default AdminHeader