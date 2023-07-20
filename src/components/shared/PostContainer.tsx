import { Box, Container, styled, Typography } from '@mui/material'
import AnimatedViewBox from './AnimatedViewBox';

type PostContainer = {
    title?: string;
    children: React.ReactNode
    viewAmout?: number
}



function PostContainer({ title, children, viewAmout }: PostContainer) {
    return (
        <PostBox>
            <AnimatedViewBox viewAmount={viewAmout} >
                <Container maxWidth='lg'>
                    {!!title && <Typography variant='h3' sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, textAlign: 'center' }} >{title}</Typography>}
                    <BlogContainer>
                        {children}
                    </BlogContainer>
                </Container>
            </AnimatedViewBox>
        </PostBox>
    )
}

const PostBox = styled(Box)(() => ({
    margin: '3rem 0',
}))

const BlogContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '1rem',
    rowGap: '2rem',
    justifyItems: 'center',
    margin: '2rem 0',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
    }
}))

export default PostContainer