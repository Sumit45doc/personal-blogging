import { Card, Skeleton } from '@mui/material'

function SkeletonBlogCard() {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: '15px', boxShadow: '0 30px 40px -20px rgba(86.99999999999989,28.000000000000007,174,.1)' }}>
            <Skeleton variant='rectangular' width={354} height={194} sx={{
                borderRadius: '15px 15px 0 0'
            }} animation='wave' />
            <Skeleton variant='text' width={300} height={50} sx={{ mx: '0.5rem' }} animation='wave' />
            <Skeleton variant='text' width={200} height={30} sx={{ mx: '0.5rem', mt: '-0.5rem' }} animation='wave' />
            <Skeleton variant='text' width={320} height={100} sx={{
                mx: '0.5rem',
                mt: '-0.6rem'
            }} animation='wave' />
        </Card>
    )
}

export default SkeletonBlogCard