import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ContactForm from './ContactForm'

function ContactContainer() {
    return (
        <Container maxWidth='lg'>
            <Typography sx={{ textAlign: 'center', my: '2rem', fontSize: { xs: '2.2rem', md: '3rem' } }} variant='h3' >
                WANT TO GET IN TOUCH?
            </Typography>
            <Typography sx={{ textAlign: 'center', my: '2rem', fontSize: { xs: '1.5rem', md: '1.8rem' }, maxWidth: '40rem', mx: 'auto' }} variant='h5'>
                Use this contact form below. We will response back as soon as possible
            </Typography>
            <Box sx={{ my: '3rem' }} >
                <ContactForm />
            </Box>
        </Container>
    )
}

export default ContactContainer