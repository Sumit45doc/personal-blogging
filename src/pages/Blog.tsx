import MainHeader from '../components/shared/layout/MainHeader'
import { Container, Stack, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import useGetPost from '../hooks/query/useGetPost';
import BlogContent from '../components/sections/blogs/[blog]/BlogContent';
import SkeletonBlogContent from '../components/sections/blogs/[blog]/SkeletonBlogContent';


function Blog() {
    const { id } = useParams();

    const { isLoading, isError, error: _error, data } = useGetPost({ postId: id! })

    const renderConditionalComponent =  isLoading ? <SkeletonBlogContent /> : isError ? <>Something went wrong</> : data ? <BlogContent content={data.data} /> : <>Something went wrong</>

    return (
        <MainHeader heroTitle={null} shouldFitImageToHeader={false} >
            <Stack component={'main'}>
                <StyledContainer maxWidth='lg'>
                    {renderConditionalComponent}
                </StyledContainer>
            </Stack>
        </MainHeader>
    )
}

export default Blog

const StyledContainer = styled(Container)(() => ({
    marginTop: '1rem',
    marginBottom: '1rem'
}))