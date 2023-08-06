import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { PATH_HOME } from '../../state/path';
import { useNavigate } from 'react-router-dom';

const { signUp, signIn } = PATH_HOME

export default function AuthOptionButtons() {
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
                <MenuItem onClick={() => handleNavigation(signIn)}><LoginIcon /> &nbsp; &nbsp;  SignIn</MenuItem>
                <MenuItem onClick={() => handleNavigation(signUp)}><PersonAddIcon />&nbsp;&nbsp; SignUp</MenuItem>
            </Menu>
        </div>
    );
}
