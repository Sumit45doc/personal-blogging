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
    display: 'grid',
    gap: '30px',
    gridAutoRows: 'min-content',
    gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
    height: 'min-content',
    justifyContent: 'center',
    overflow: 'hidden',
    margin: '2rem 0',
    [theme.breakpoints.between('sm', 'md')]: {
        gridTemplateColumns: 'repeat(2, minmax(200px, 1fr))',
    },
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(1, minmax(200px, 1fr))',
    }

}))

export default PostContainer