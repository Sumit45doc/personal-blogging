// @mui
import { Container, Typography } from '@mui/material';
import { useSelector } from '../../redux/store';
import { Outlet } from 'react-router-dom';

// ----------------------------------------------------------------------

type RoleBasedGuardProp = {
    roles?: string[];
    children?: React.ReactNode;
};

export default function RoleBasedGuard({ roles, children }: RoleBasedGuardProp) {
    // Logic here to get current user role
    const { role } = useSelector(state => state.user)

    if (typeof roles !== 'undefined' && !roles.includes(role)) {
        return (
            <Container sx={{ textAlign: 'center' }}>

                <Typography variant="h3" paragraph>
                    Permission Denied
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    You do not have permission to access this page
                </Typography>
            </Container>
        )
    }

    return <> {children ? children : <Outlet />} </>;
}
