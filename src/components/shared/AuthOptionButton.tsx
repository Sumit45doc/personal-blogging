import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { PATH_HOME } from '../../state/path';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../redux/store';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../redux/slice/user';

const { signUp, signIn } = PATH_HOME

export default function AuthOptionButtons() {
    const { _id, name } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const isLoggedIn = !!_id;

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigation = (url: string) => {
        handleClose()
        navigate(`/${url}`)
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Avatar />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {isLoggedIn ?
                    <>
                        <MenuItem><Typography>Hi, {name}</Typography></MenuItem>
                        <MenuItem onClick={() => handleLogout()}><LogoutIcon />&nbsp;&nbsp; Logout</MenuItem>
                    </>
                    :
                    <>
                        <MenuItem onClick={() => handleNavigation(signUp)}><PersonAddIcon />&nbsp;&nbsp; SignUp</MenuItem>
                        <MenuItem onClick={() => handleNavigation(signIn)}><LoginIcon /> &nbsp; &nbsp;  SignIn</MenuItem>
                    </>
                }
            </Menu>
        </div>
    );
}
