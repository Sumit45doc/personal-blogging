import { Box, styled, Typography } from '@mui/material'


const blogerDescription = "I explain and teach tech­nol­o­gy, solve tech prob­lems and help you make gad­get buy­ing decisions."
type Props = {
    heroTitle?: string
}


function Detail({ heroTitle }: Props) {

    return (
        <DetailContainer>
            <TextBox maxWidth='xl'>
                {!heroTitle && <Typography variant='h6'>What  I Do?</Typography>}
                <BlogerDescription sx={{ textAlign: !!heroTitle ? 'center' : 'left' }} variant='h2'>{heroTitle ?? blogerDescription}</BlogerDescription>
            </TextBox>
        </DetailContainer>
    )
}

export default Detail


const DetailContainer = styled(Box)(() => ({
    color: 'white',
}))

const TextBox = styled(Box)(() => ({
    maxWidth: '55rem',
    margin: 'auto',
    padding: '1rem',
    overflow: 'hidden'
}))

const BlogerDescription = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.2rem',
        marginTop: '1rem'
    }
}))