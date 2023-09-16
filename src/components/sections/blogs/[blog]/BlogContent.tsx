import { Typography, styled } from '@mui/material'
import Image from '../../../shared/image'
import { get_post } from '../../../../state/response_constant'

type Props = {
    content: get_post
}

function BlogContent({ content }: Props) {
    const { selectedFile, title, description } = content;

    return (
        <div>
            <BlogImage
                src={selectedFile}
                title={`${title} image`}
            />
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
        </div>
    )
}

export default BlogContent

const BlogImage = styled(Image)(({ theme }) => ({
    height: '70vh',
    [theme.breakpoints.down('md')]: {
        height: 'fit-content',
    },
    objectFit: 'contain',
    borderRadius: '8px'
}))



const Title = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.2rem'
    },
    marginTop: '1rem',
    textAlign: 'center',
    textTransform: 'uppercase'
}))


const Description = styled(Typography)(() => ({
    fontSize: '1rem',
    marginTop: '2rem',
    textAlign: 'left',

}))