import { Box, Container, Typography, styled } from '@mui/material'
import Image from '../../shared/image/Image'

function AboutDetails() {
    return (
        <AboutContainer maxWidth='lg'>
            <Typography variant='h3' sx={{ textAlign: 'center', fontSize: { xs: '2rem', md: '2.8rem' } }}>
                ABOUT RUCHITA SAMEL
            </Typography>
            <AboutDetailContainer>
                <Image
                    src="/assets/production_11.webp"
                    alt="ruchita samel"
                    sx={{ flex: 0.5, height: '80vh' }}
                />
                <Box sx={{ flex: 0.5 }}>
                    <Typography sx={{ fontSize: '1.1rem' }}>Hey Technology Enthusiast,
                        Incididunt ut labore et dolore magna aliqua. Ut enim ad ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.

                        Incididunt ut labore et dolore magna aliqua. Ut enim ad ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                    </Typography>
                </Box>
            </AboutDetailContainer>
        </AboutContainer>
    )
}

export default AboutDetails

const AboutContainer = styled(Container)(() => ({
    marginTop: '2rem'
}))

const AboutDetailContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '2rem 0',
    columnGap: '1rem',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        rowGap: '1rem'
    }
}))